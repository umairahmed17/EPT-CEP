"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTower = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const addTower = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        Object.keys(req.body).forEach(function (key) {
            if (key !== "name" &&
                key !== "description" &&
                key !== "conductor_type" &&
                key !== "cable_configuration" &&
                key !== "line_type" &&
                key !== "conductor_length_unit" &&
                key !== "spacing_between_conductors_unit") {
                req.body[key] = parseFloat(req.body[key]);
            }
        });
        const { name, description, tower_height, conductor_type, conductor_length, conductor_length_unit, commulative_line_loading, span, conductor_cross_sectional_area, frequency, temperature_effect, cable_configuration, spacing_between_conductors, sending_end_voltage_in_KV, receiving_end_voltage_in_KV, power_transmitted_in_MVA, line_type, } = req.body;
        const resistivity = 0.0000000265;
        const coronaLoss = coronaLosses(frequency, diameter(conductor_cross_sectional_area), spacing_between_conductors, sending_end_voltage_in_KV, disruptiveVoltage(spacing_between_conductors, diameter(conductor_cross_sectional_area)));
        const power_received_at_load_in_MVA = powerReceivedAtLoad(power_transmitted_in_MVA, coronaLoss);
        const tower = yield prisma.tower.create({
            data: {
                name: name,
                description: description,
                tower_height: tower_height,
                frequency: frequency,
                resistance: resistance(resistivity, conductor_length, conductor_cross_sectional_area),
                skin_depth: skinDepth(resistivity, frequency),
                temperature_effect: temperature_effect,
                spacing_between_bundled_conductors: 0,
                spacing_between_conductors: spacing_between_conductors,
                current_carrying_capacity: currentCarryingCapacity(cable_configuration),
                inductance_of_transmission_lines: inductanceOfTransmissionLines(spacing_between_conductors, diameter(conductor_cross_sectional_area)),
                capacitance: capacitance(spacing_between_conductors, diameter(conductor_cross_sectional_area)),
                capacitive_reactance: capacitiveReactance(frequency, spacing_between_conductors, diameter(conductor_cross_sectional_area)),
                conductor_type: conductor_type,
                conductor_length: conductor_length,
                conductor_cross_sectional_area: conductor_cross_sectional_area,
                span: span,
                commulative_line_loading: commulative_line_loading,
                cable_configuration: cable_configuration,
                power_transmitted_in_MVA: power_transmitted_in_MVA,
                power_received_at_load_in_MVA: power_received_at_load_in_MVA,
                efficiency: efficiency(power_received_at_load_in_MVA, power_transmitted_in_MVA),
                sending_end_voltage_in_KV: sending_end_voltage_in_KV,
                receiving_end_voltage_in_KV: receiving_end_voltage_in_KV,
                voltage_regulation: voltageRegulation(sending_end_voltage_in_KV, receiving_end_voltage_in_KV),
                corona_losses: coronaLoss,
                line_type: line_type,
            },
        });
        res.json(tower);
    });
};
exports.addTower = addTower;
function resistance(resistivity, conductorLength, crossSectionalArea) {
    return (resistivity * conductorLength) / crossSectionalArea;
}
function skinDepth(resistivity, frequency) {
    return Math.sqrt(resistivity / (3.134 * frequency * 0.00000125));
}
function currentCarryingCapacity(cableConfiguration) {
    if (cableConfiguration == 1)
        return 430;
    if (cableConfiguration == 0)
        return 389;
}
function diameter(csa) {
    return 2 * Math.sqrt(csa / 3.124);
}
function temperatureResistance(resistance, temperatureEffect) {
    return resistance * (235 + temperatureEffect / (235 + 29));
}
function inductanceOfTransmissionLines(spacingBetweenConductors, diameter) {
    return ((0.00000125 / 2) *
        3.142 *
        (0.25 + Math.log(spacingBetweenConductors / (diameter / 2))));
}
function capacitance(spacingBetweenConductors, diameter) {
    return 0.0000000000555 / Math.log(spacingBetweenConductors / (diameter / 2));
}
function capacitiveReactance(frequency, spacingBetweenConductors, diameter) {
    return ((6600000 / frequency) * Math.log(spacingBetweenConductors / (diameter / 2)));
}
function disruptiveVoltage(spacingBetweenConductors, diameter) {
    return 0.0374 * Math.log(spacingBetweenConductors / (diameter / 2));
}
function coronaLosses(frequency, diameter, spacingBetweenConductors, sendingEndVoltage, disruptiveVoltage) {
    const constant = 0.0000244 / 1.225;
    return (constant *
        (frequency + 25) *
        Math.sqrt(diameter / 2 / (spacingBetweenConductors * 1000)) *
        Math.pow((sendingEndVoltage / Math.sqrt(3)) * 1000 - disruptiveVoltage, 1));
}
function powerReceivedAtLoad(powerTransmitted, coronaLosses) {
    return powerTransmitted - coronaLosses / 1000;
}
function efficiency(powerReceivedAtLoad, powerTransmitted) {
    return (powerReceivedAtLoad / powerTransmitted) * 100;
}
function voltageRegulation(sendingEndVoltage, receivingEndVoltage) {
    return (((sendingEndVoltage - receivingEndVoltage) / receivingEndVoltage) * 100);
}
