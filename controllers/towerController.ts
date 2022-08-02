import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addTower = async function (req: Request, res: Response) {
  Object.keys(req.body).forEach(function (key: string) {
    if (
      key !== "name" &&
      key !== "description" &&
      key !== "conductor_type" &&
      key !== "cable_configuration" &&
      key !== "line_type" &&
      key !== "conductor_length_unit" &&
      key !== "spacing_between_conductors_unit"
    ) {
      req.body[key] = parseFloat(req.body[key]);
    }
  });

  const {
    name,
    description,
    tower_height,
    conductor_type,
    conductor_length,
    conductor_length_unit,
    commulative_line_loading,
    span,
    conductor_cross_sectional_area,
    frequency,
    temperature_effect,
    cable_configuration,
    spacing_between_conductors,
    sending_end_voltage_in_KV,
    receiving_end_voltage_in_KV,
    power_transmitted_in_MVA,
    line_type,
  } = req.body;

  const resistivity = 0.0000000265;

  const coronaLoss = coronaLosses(
    frequency,
    diameter(conductor_cross_sectional_area),
    spacing_between_conductors,
    sending_end_voltage_in_KV,
    disruptiveVoltage(
      spacing_between_conductors,
      diameter(conductor_cross_sectional_area)
    )
  );
  const power_received_at_load_in_MVA = powerReceivedAtLoad(
    power_transmitted_in_MVA,
    coronaLoss
  );
  const tower = await prisma.tower.create({
    data: {
      name: name,
      description: description,
      tower_height: tower_height,
      frequency: frequency,
      resistance: resistance(
        resistivity,
        conductor_length,
        conductor_cross_sectional_area
      ),
      skin_depth: skinDepth(resistivity, frequency),
      temperature_effect: temperature_effect,
      spacing_between_bundled_conductors: 0,
      spacing_between_conductors: spacing_between_conductors,
      current_carrying_capacity: currentCarryingCapacity(cable_configuration),
      inductance_of_transmission_lines: inductanceOfTransmissionLines(
        spacing_between_conductors,
        diameter(conductor_cross_sectional_area)
      ),
      capacitance: capacitance(
        spacing_between_conductors,
        diameter(conductor_cross_sectional_area)
      ),
      capacitive_reactance: capacitiveReactance(
        frequency,
        spacing_between_conductors,
        diameter(conductor_cross_sectional_area)
      ),
      conductor_type: conductor_type,
      conductor_length: conductor_length,
      conductor_cross_sectional_area: conductor_cross_sectional_area,
      span: span,
      commulative_line_loading: commulative_line_loading,
      cable_configuration: cable_configuration,
      power_transmitted_in_MVA: power_transmitted_in_MVA,
      power_received_at_load_in_MVA: power_received_at_load_in_MVA,
      efficiency: efficiency(
        power_received_at_load_in_MVA,
        power_transmitted_in_MVA
      ),
      sending_end_voltage_in_KV: sending_end_voltage_in_KV,
      receiving_end_voltage_in_KV: receiving_end_voltage_in_KV,
      voltage_regulation: voltageRegulation(
        sending_end_voltage_in_KV,
        receiving_end_voltage_in_KV
      ),
      corona_losses: coronaLoss,
      line_type: line_type,
    },
  });
  res.json(tower);
};

function resistance(
  resistivity: number,
  conductorLength: number,
  crossSectionalArea: number
): number {
  return (resistivity * conductorLength) / crossSectionalArea;
}

function skinDepth(resistivity: number, frequency: number): number {
  return Math.sqrt(resistivity / (3.134 * frequency * 0.00000125));
}

function currentCarryingCapacity(cableConfiguration: 1 | 0) {
  if (cableConfiguration == 1) return 430;
  if (cableConfiguration == 0) return 389;
}

function diameter(csa: number) {
  return 2 * Math.sqrt(csa / 3.124);
}

function temperatureResistance(
  resistance: number,
  temperatureEffect: number
): number {
  return resistance * (235 + temperatureEffect / (235 + 29));
}

function inductanceOfTransmissionLines(
  spacingBetweenConductors: number,
  diameter: number
): number {
  return (
    (0.00000125 / 2) *
    3.142 *
    (0.25 + Math.log(spacingBetweenConductors / (diameter / 2)))
  );
}

function capacitance(
  spacingBetweenConductors: number,
  diameter: number
): number {
  return 0.0000000000555 / Math.log(spacingBetweenConductors / (diameter / 2));
}

function capacitiveReactance(
  frequency: number,
  spacingBetweenConductors: number,
  diameter: number
) {
  return (
    (6600000 / frequency) * Math.log(spacingBetweenConductors / (diameter / 2))
  );
}

function disruptiveVoltage(spacingBetweenConductors: number, diameter: number) {
  return 0.0374 * Math.log(spacingBetweenConductors / (diameter / 2));
}

function coronaLosses(
  frequency: number,
  diameter: number,
  spacingBetweenConductors: number,
  sendingEndVoltage: number,
  disruptiveVoltage: number
) {
  const constant = 0.0000244 / 1.225;
  return (
    constant *
    (frequency + 25) *
    Math.sqrt(diameter / 2 / (spacingBetweenConductors * 1000)) *
    Math.pow((sendingEndVoltage / Math.sqrt(3)) * 1000 - disruptiveVoltage, 1)
  );
}

function powerReceivedAtLoad(powerTransmitted: number, coronaLosses: number) {
  return powerTransmitted - coronaLosses / 1000;
}

function efficiency(powerReceivedAtLoad: number, powerTransmitted: number) {
  return (powerReceivedAtLoad / powerTransmitted) * 100;
}

function voltageRegulation(
  sendingEndVoltage: number,
  receivingEndVoltage: number
) {
  return (
    ((sendingEndVoltage - receivingEndVoltage) / receivingEndVoltage) * 100
  );
}
