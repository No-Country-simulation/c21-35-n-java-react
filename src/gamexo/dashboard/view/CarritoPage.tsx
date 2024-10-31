import { Input } from "@/components/ui/input"
import { Minus, Plus, X } from "lucide-react"
import { Outlet } from "react-router-dom"

export const CarritoPage = () => {
    return (
        <div className="text-white">
            <h4 className="font-extrabold text-xl mt-[17px] ml-12">LICENCIAS EN TU CARRITO</h4>
            <div className="w-full text-white h-screen p-6 flex  m-auto">
                <div className="flex w-[574px]">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-4">
                            <div className="w-[552px] bg-[#181818] h-[109px] rounded-3xl flex">
                                <img src="../images/dashboard/gamestore/minecraft.png" alt="" className="m-[13px]" />
                                <div className="my-[13px] ml-[16px] flex flex-col justify-center gap-4">
                                    <div>
                                        <h4 className="font-extrabold text-[15px]">HALO 4</h4>
                                    </div>
                                    <div className="flex gap-8 w-[320px] items-center">
                                        <span>$ 859.99</span>
                                        <div className="flex items-center">
                                            <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                                <Minus />
                                            </button>

                                            <p className="mx-2">2</p>
                                            <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                                <Plus />
                                            </button>
                                        </div>
                                        <span>$ 1719.98</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center m-auto">
                                    <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                        <X className="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[552px] bg-[#181818] h-[109px] rounded-3xl flex">
                                <img src="../images/dashboard/gamestore/halo_4.png" alt="" className="m-[13px]" />
                                <div className="my-[13px] ml-[16px] flex flex-col justify-center gap-4">
                                    <div>
                                        <h4 className="font-extrabold text-[15px]">HALO 4</h4>
                                    </div>
                                    <div className="flex gap-8 w-[320px] items-center">
                                        <span>$ 745.55</span>
                                        <div className="flex items-center">
                                            <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                                <Minus />
                                            </button>

                                            <p className="mx-2">1</p>
                                            <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                                <Plus />
                                            </button>
                                        </div>
                                        <span>$ 745.55</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center m-auto">
                                    <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                        <X className="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[552px] bg-[#181818] h-[109px] rounded-3xl flex">
                                <img src="../images/dashboard/gamestore/among_us.png" alt="" className="m-[13px]" />
                                <div className="my-[13px] ml-[16px] flex flex-col justify-center gap-4">
                                    <div>
                                        <h4 className="font-extrabold text-[15px]">AMONG US</h4>
                                    </div>
                                    <div className="flex gap-8 w-[320px] items-center">
                                        <span>$ 139.99</span>
                                        <div className="flex items-center">
                                            <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                                <Minus />
                                            </button>

                                            <p className="mx-2">1</p>
                                            <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                                <Plus />
                                            </button>
                                        </div>
                                        <span>$ 139.99</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center m-auto">
                                    <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                        <X className="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[552px] bg-[#181818] h-[109px] rounded-3xl flex">
                                <img src="../images/dashboard/gamestore/valheim.png" alt="" className="m-[13px]" />
                                <div className="my-[13px] ml-[16px] flex flex-col justify-center gap-4">
                                    <div>
                                        <h4 className="font-extrabold text-[15px]">VALHEIM</h4>
                                    </div>
                                    <div className="flex gap-8 w-[320px] items-center">
                                        <span>$ 599.99</span>
                                        <div className="flex items-center">
                                            <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                                <Minus />
                                            </button>

                                            <p className="mx-2">1</p>
                                            <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                                <Plus />
                                            </button>
                                        </div>
                                        <span>$ 599.99</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center m-auto">
                                    <button className="rounded-full size-10 bg-[#201E1E] flex items-center justify-center">
                                        <X className="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pantalla a cambiar */}
                <div className="w-[320px] h-[492px] bg-[#181818] rounded-3xl">
                    <div className="m-6">
                        <div className="flex justify-between font-bold text-[18px]">
                            <p>Productos (5)</p>
                            <p>$ 3,205.98</p>
                        </div>
                        <div>
                            <h5 className="font-medium text-lg my-[9px]">Correo electrónico</h5>
                            <p className="text-[#989191] font-semibold text-[15px]">luisikingrodri28@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center m-auto">
                        <small className="border-[0.1px] border-white w-[95%] m-auto"></small>
                    </div>
                    <div className="w-[290px] h-[69px] rounded-xl bg-[#454944] flex items-center justify-center mx-4 my-4">
                        <p className="font-normal text-[12px] mx-2">Asegúrese de ingresar su correo electrónico correctamente ya que por este medio le haremos llegar su licencia.</p>
                    </div>
                    <div className="m-4">
                        <p className="text-[#2ACE17] mb-2 font-medium text-[15px]">Ingresar código de descuento.</p>
                        <div className="relative">
                            <Input
                                type="number"
                                placeholder="Ingrese su código aqui"
                                className="w-[250px] bg-[#0A0A0A] border-none rounded-lg pl-8 caret-white text-white"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between font-extrabold text-xl mx-4">
                        <p>Total:</p>
                        <p>$ 3,205.98</p>
                    </div>
                    <div className="flex justify-center items-center m-auto mt-12">
                        <button className="h-[46px] w-[212px] bg-[#2ACE17] rounded-3xl m-auto">Continuar compra</button>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
