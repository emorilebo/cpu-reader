import React from "react";

const cpus = [
  {
    pd: "127",
    name: "Chrome",
    cpupercent: "22%",
    cpupower: "30",
  },
  {
    pd: "127",
    name: "Chrome",
    cpupercent: "22%",
    cpupower: "30",
  },
  {
    pd: "127",
    name: "Chrome",
    cpupercent: "22%",
    cpupower: "30",
  },
  {
    pd: "127",
    name: "Chrome",
    cpupercent: "22%",
    cpupower: "30",
  },
  {
    pd: "127",
    name: "Chrome",
    cpupercent: "22%",
    cpupower: "30",
  },
  {
    pd: "127",
    name: "Chrome",
    cpupercent: "22%",
    cpupower: "30",
  },
  {
    pd: "127",
    name: "Chrome",
    cpupercent: "22%",
    cpupower: "30",
  },
  
];

export default function Tables() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className=" mt-10 text-xl font-semibold text-gray-900">
            Total CPU :{" "}
          </h1>
          <h1 className=" mt-10 text-xl font-semibold text-gray-900">
            Total CPU-Power :{" "}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            This is the description of all cpu details
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                  
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      PD
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      PD
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      CPU%
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      CPU Power
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {cpus.map((cpu) => (
                    <tr key={cpu.cpupercent}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {cpu.pd}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {cpu.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {cpu.cpupercent}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {cpu.cpupower}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
