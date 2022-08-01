import { MouseEvent } from "react";

const addTower = async function (event: MouseEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);

  const res = await fetch("http://localhost:8080/tower/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData.entries())),
  });

  if (res.status !== 201) return;
  const data = res.json();

  return;
};

function Tower(): JSX.Element {
  return (
    <div>
      <div className="text-2xl text-center font-bold text-blue-500">
        Create Tower
      </div>
      <div className="w-full mx-auto max-w-[30rem]">
        <form
          onSubmit={addTower}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="conductor_type"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Conductor Type
            </label>
            <div className="relative w-full">
              <select
                name="conductor_type"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Partridge</option>
                <option>Ostrich</option>
                <option>Merlin</option>
                <option>Pelican</option>
                <option>Drake</option>
                <option>Pheasant</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="conductor_length"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Conductor Length
            </label>
            <div className="relative flex flex-row gap-2">
              <input
                name="conductor_length"
                className="w-3/5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
              />
              <select
                name="conductor_length_unit"
                className="w-2/5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="km">Km</option>
                <option value="ft">ft</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="conductor_cross_sectional_area"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Conductor Cross-Sectional Area
            </label>
            <input
              name="conductor_cross_sectional_area"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-600 text-xs italic">Use meter square</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="conductor_cross_sectional_area"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Frequency
            </label>
            <input
              name="frequency"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="conductor_cross_sectional_area"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Temperature Effect
            </label>
            <input
              name="temperature_effect"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="conductor_type"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Conductor Type
            </label>
            <div className="relative w-full">
              <select
                name="conductor_type"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value={1}>Horizontal</option>
                <option value={0}>Vertical</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="conductor_length"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Spacing between Conductors
            </label>
            <div className="relative flex flex-row gap-2">
              <input
                name="spacing_between_conductors"
                className="w-3/5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
              />
              <select
                name="spacing_between_conductors_unit"
                className="w-2/5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="m">m</option>
                <option value="ft">ft</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="sending_end_voltage_in_KV"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Sending End Voltage
            </label>
            <input
              name="sending_end_voltage_in_KV"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-600 text-xs italic">
              Please specify value in KV
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="power_transmitted_in_MVA"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Power Transmitted
            </label>
            <input
              name="power_transmitted_in_MVA"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-600 text-xs italic">
              Please specify value in MVA
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="conductor_type"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Conductor Type
            </label>
            <div className="relative w-full">
              <select
                name="line_type"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>SINGLE CIRCUIT UNBUNDLED</option>
                <option>DOUBLE CIRCUIT UNBUNDLED</option>
                <option>DOUBLE CIRCUIT BUNDLED (3C)</option>
                <option>DOUBLE CIRCUIT BUNDLED (4C)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tower;
