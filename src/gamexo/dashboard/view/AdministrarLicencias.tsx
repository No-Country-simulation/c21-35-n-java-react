
export const AdministrarLicencias = () => {
  return (
    <div className="flex m-5 min-h-[450px]">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">Fecha</th>
                <th scope="col" className="py-3 px-6">Código</th>
                <th scope="col" className="py-3 px-6">Nombre</th>
                <th scope="col" className="py-3 px-6">Stock</th>
                <th scope="col" className="py-3 px-6">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">2022-04-12</td>
                <td className="py-4 px-6">2022MIN0412</td>
                <td className="py-4 px-6">Minecraft</td>
                <td className="py-4 px-6">1266</td>
                <td className="py-4 px-6">$859.99</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">2022-04-12</td>
                <td className="py-4 px-6">2022MIN0412</td>
                <td className="py-4 px-6">Halo 4</td>
                <td className="py-4 px-6">1266</td>
                <td className="py-4 px-6">$789.99</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">2022-04-12</td>
                <td className="py-4 px-6">2022MIN0412</td>
                <td className="py-4 px-6">Age of mytho...</td>
                <td className="py-4 px-6">1266</td>
                <td className="py-4 px-6">$599.99</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">2022-04-12</td>
                <td className="py-4 px-6">2022MIN0412</td>
                <td className="py-4 px-6">Resident Evi..</td>
                <td className="py-4 px-6">1266</td>
                <td className="py-4 px-6">$1550</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">2022-04-12</td>
                <td className="py-4 px-6">2022MIN0412</td>
                <td className="py-4 px-6">Valheim</td>
                <td className="py-4 px-6">1266</td>
                <td className="py-4 px-6">$899.99</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
