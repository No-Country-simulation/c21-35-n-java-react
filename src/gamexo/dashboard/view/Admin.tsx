import { Calendar, ShoppingCart, User } from "lucide-react"


export const Admin = () => {
    return (
        <div className="text-white">
            <div className="m-5">
                <h4 className="font-bold text-[25px]">Resumen Semanal</h4>
                <div className="flex gap-4">
                    <div className="w-[272px] h-[120px] bg-[#7E7E7E] rounded-2xl flex items-center  justify-center">
                        <div>
                            <User className="size-12" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl">75,849</span>
                            <span className="font-normal text-sm">Usuarios Online</span>
                        </div>
                    </div>
                    <div className="w-[272px] h-[120px] bg-[#7E7E7E] rounded-2xl flex items-center  justify-center">
                        <div className="mr-4">
                            <ShoppingCart className="size-12" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl">1,102</span>
                            <span className="font-normal text-sm">Ventas</span>
                        </div>
                    </div>
                    <div className="w-[272px] h-[120px] bg-[#7E7E7E] rounded-2xl flex items-center  justify-center">
                        <div className="mr-4">
                            <Calendar className="size-12" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl">2024-04-11</span>
                            <span className="font-normal text-sm">Mejor Fecha</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">

                <div className="flex m-5 min-h-[450px]">
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">Person</th>
                                        <th scope="col" className="py-3 px-6">Bank Account</th>
                                        <th scope="col" className="py-3 px-6">Amount</th>
                                        <th scope="col" className="py-3 px-6">Approved</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-4 px-6">Alex Johnson</td>
                                        <td className="py-4 px-6">82926417</td>
                                        <td className="py-4 px-6">$4,500.00</td>
                                        <td className="py-4 px-6">Yes</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-4 px-6">Maria Garcia</td>
                                        <td className="py-4 px-6">55387621</td>
                                        <td className="py-4 px-6">$3,150.00</td>
                                        <td className="py-4 px-6">No</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-4 px-6">James Smith</td>
                                        <td className="py-4 px-6">90817264</td>
                                        <td className="py-4 px-6">$7,820.00</td>
                                        <td className="py-4 px-6">Yes</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-4 px-6">Patricia Brown</td>
                                        <td className="py-4 px-6">26483910</td>
                                        <td className="py-4 px-6">$1,230.00</td>
                                        <td className="py-4 px-6">Yes</td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <td className="py-4 px-6">Ethan Davis</td>
                                        <td className="py-4 px-6">64738290</td>
                                        <td className="py-4 px-6">$865.00</td>
                                        <td className="py-4 px-6">No</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
