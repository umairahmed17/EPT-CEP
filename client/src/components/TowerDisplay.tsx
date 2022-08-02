import { MouseEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { capacitiveReactanceCalculator } from "../formulae/capacitance";
import { coronaLossCalculator } from "../formulae/coronaLoss";
import { efficiencyCalculator } from "../formulae/efficiency";
import { groundClearance } from "../formulae/groundClearance";
import { inductiveReactanceCalculator } from "../formulae/inductance";
import { sagCalculator } from "../formulae/sag";
import { voltageRegulationCalculator } from "../formulae/voltageRegulation";

function Tower(): JSX.Element {
  const { id = "" } = useParams();

  const showResults = function (event: MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    const {
      Dab,
      Dca,
      Dbc,
      pf,
      power_transmission,
      distance_transmission,
      air_density_factor,
      ambient_temperature,
      tension,
    } = Object.fromEntries(
      new FormData(event.target as HTMLFormElement).entries()
    );

    setData({
      ...data,
      inductiveReactance: inductiveReactanceCalculator(
        parseInt(id),
        parseFloat(Dab as string),
        parseFloat(Dbc as string),
        parseFloat(Dca as string)
      ),
      capacitiveReactance: capacitiveReactanceCalculator(
        parseInt(id),
        parseFloat(Dab as string),
        parseFloat(Dbc as string),
        parseFloat(Dca as string)
      ),
      voltageRegulation: voltageRegulationCalculator(
        parseInt(id),
        inductiveReactanceCalculator(
          parseInt(id),
          parseFloat(Dab as string),
          parseFloat(Dbc as string),
          parseFloat(Dca as string)
        ),
        capacitiveReactanceCalculator(
          parseInt(id),
          parseFloat(Dab as string),
          parseFloat(Dbc as string),
          parseFloat(Dca as string)
        ),
        parseFloat(power_transmission as string),
        parseFloat(pf as string),
        parseFloat(distance_transmission as string),
        parseFloat(ambient_temperature as string)
      ),
      efficiency: efficiencyCalculator(
        parseInt(id),
        inductiveReactanceCalculator(
          parseInt(id),
          parseFloat(Dab as string),
          parseFloat(Dbc as string),
          parseFloat(Dca as string)
        ),
        capacitiveReactanceCalculator(
          parseInt(id),
          parseFloat(Dab as string),
          parseFloat(Dbc as string),
          parseFloat(Dca as string)
        ),
        parseFloat(power_transmission as string),
        parseFloat(pf as string),
        parseFloat(distance_transmission as string),
        parseFloat(ambient_temperature as string)
      ),
      coronaLoss: coronaLossCalculator(
        parseInt(id),
        parseFloat(Dab as string),
        parseFloat(Dbc as string),
        parseFloat(Dca as string),
        parseFloat(air_density_factor as string),
        parseFloat(distance_transmission as string)
      ),
      groundClearance: groundClearance(
        parseInt(id) !== 662 ? parseInt(id) : 66
      ),
      sag: sagCalculator(parseInt(id), parseFloat(tension as string)),
    });
  };

  const [data, setData] = useState<{
    inductiveReactance: number;
    capacitiveReactance: number;
    voltageRegulation: number;
    efficiency: number;
    coronaLoss: number;
    groundClearance: number;
    sag: number;
  }>({
    inductiveReactance: 0,
    capacitiveReactance: 0,
    voltageRegulation: 0,
    efficiency: 0,
    coronaLoss: 0,
    groundClearance: 0,
    sag: 0,
  });

  return (
    <div className="flex flex-row gap-4">
      <div className="w-1/2">
        <form onSubmit={showResults} className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              htmlFor="Dab"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Distance between conductor 'a' & 'b'
            </label>
            <input
              required
              name="Dab"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-600 text-xs italic">
              Specify in <span className="font-bold">meters</span>
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="Dbc"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Distance between conductor 'b' & 'c'
            </label>
            <input
              required
              name="Dbc"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-600 text-xs italic">
              Specify in <span className="font-bold">meters</span>
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="Dca"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Distance between conductor 'c' & 'a'
            </label>
            <input
              required
              name="Dca"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-600 text-xs italic">
              Specify in <span className="font-bold">meters</span>
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="pf"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Power Factor
            </label>
            <input
              required
              name="pf"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="power_transmission"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Power Of Transmission
            </label>
            <input
              required
              name="power_transmission"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-600 text-xs italic">
              Specify in <span className="font-bold">MW</span>
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="distance_transmission"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Distance Of Transmission
            </label>
            <input
              required
              name="distance_transmission"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-600 text-xs italic">
              Specify in <span className="font-bold">KM</span>
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="air_density_factor"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Air Density Factor
            </label>
            <input
              required
              name="air_density_factor"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ambient_temperature"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Ambient Temperature
            </label>
            <input
              required
              name="ambient_temperature"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p
              dangerouslySetInnerHTML={{
                __html: "Specify in <span className='font-bold'>&#8451</span>",
              }}
              className="text-gray-600 text-xs italic"
            ></p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="tension"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Tension
            </label>
            <input
              required
              name="tension"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-600 text-xs italic">
              Specify in <span className="font-bold">kN</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Show Results
            </button>
          </div>
        </form>
      </div>

      <div className="w-1/2">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Inductive Reactance
          </label>
          <input
            readOnly
            required
            type="number"
            value={data.inductiveReactance || ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-gray-600 text-xs italic">
            <span
              dangerouslySetInnerHTML={{ __html: "&#8486;/km/phase" }}
              className="font-bold"
            ></span>
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Capacitive Reactance
          </label>
          <input
            readOnly
            required
            type="number"
            value={data.capacitiveReactance || ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-gray-600 text-xs italic">
            <span
              dangerouslySetInnerHTML={{ __html: "&#8486;*km/phase" }}
              className="font-bold"
            ></span>
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Voltage Regulation
          </label>
          <input
            readOnly
            required
            type="number"
            value={data.voltageRegulation || ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Efficiency
          </label>
          <input
            readOnly
            required
            type="number"
            value={data.efficiency || ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Corona Loss
          </label>
          <input
            readOnly
            required
            type="number"
            value={data.coronaLoss || ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ground Clearance
          </label>
          <input
            readOnly
            required
            type="number"
            value={data.groundClearance || ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            sag
          </label>
          <input
            readOnly
            required
            type="number"
            value={data.sag || ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </div>
  );
}

export default Tower;
