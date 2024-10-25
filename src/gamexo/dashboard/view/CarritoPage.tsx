import { Input } from "@/components/ui/input"

export const CarritoPage = () => {
    return (
        <div className="text-white">
            <h4 className="font-extrabold text-xl mt-[17px] ml-12">LICENCIAS EN TU CARRITO</h4>
            <div className="w-full text-white h-screen p-6 flex  m-auto">
                <div className="flex w-full">
                    <div>
                        <div className="flex gap-4">
                            <div className="w-[532px] bg-[#181818] h-[97px] rounded-3xl flex">
                                <img src="../images/dashboard/image-1-gamestore.png" alt="" className="m-[13px]" />
                                <div className="my-[13px] ml-[16px] mr-[15px]">
                                    <h4 className="font-extrabold text-xl">MINECARFT</h4>
                                    <p className="font-semibold text-[15px]">Explora, construye y sobrevive en el mundo de bloques de Minecraft. Con modos Supervivencia y Creativo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[532px] bg-[#181818] h-[97px] rounded-3xl flex">
                                <img src="../images/dashboard/image-1-gamestore.png" alt="" className="m-[13px]" />
                                <div className="my-[13px] ml-[16px] mr-[15px]">
                                    <h4 className="font-extrabold text-xl">MINECARFT</h4>
                                    <p className="font-semibold text-[15px]">Explora, construye y sobrevive en el mundo de bloques de Minecraft. Con modos Supervivencia y Creativo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[532px] bg-[#181818] h-[97px] rounded-3xl flex">
                                <img src="../images/dashboard/image-2-gamestore.png" alt="" className="m-[13px]" />
                                <div className="my-[13px] ml-[16px] mr-[15px]">
                                    <h4 className="font-extrabold text-xl">HALO 4</h4>
                                    <p className="font-semibold text-[15px]">Explora, construye y sobrevive en el mundo de bloques de Minecraft. Con modos Supervivencia y Creativo.</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-4">
                            <div className="w-[532px] bg-[#181818] h-[97px] rounded-3xl flex">
                                <img src="../images/dashboard/image-3-gamestore.png" alt="" className="m-[13px]" />
                                <div className="my-[13px] ml-[16px] mr-[15px]">
                                    <h4 className="font-extrabold text-xl">VALHEIM</h4>
                                    <p className="font-semibold text-[15px]">Explora, construye y sobrevive en el mundo de bloques de Minecraft. Con modos Supervivencia y Creativo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[492px] bg-[#181818] rounded-3xl">
                    <div>
                        <div className="flex justify-between">
                            <p>Productos (5)</p>
                            <small>$ 3,205.98</small>
                        </div>
                        <div>
                            <h5>Correo electronico</h5>
                            <p>luisikingrodri28@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center m-auto">
                        <small className="border-[0.1px] border-white w-[95%] m-auto"></small>
                    </div>
                    <div className="w-[290px] h-[69px] rounded-2xl bg-[#454944]">
                        <p>Asegúrese de ingresar su correo electrónico correctamente ya que por este medio le haremos llegar su licencia.</p>
                    </div>
                    <p className="text-[#2ACE17]">Ingresar código de descuento.</p>
                    <div className="relative">
                        {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
                        <Input
                            type="number"
                            placeholder="Ingrese su código aqui"
                            className="w-full bg-[#0A0A0A] border-none rounded-lg pl-8 md:w-[200px] lg:w-[320px] caret-white text-white"
                        />
                    </div>
                    <div className="flex justify-between">
                        <p>Total:</p>
                        <p>$ 3,205.98</p>
                    </div>
                    <button className="h-[46px] w-[212px] bg-[#2ACE17] rounded-3xl">Continuar compra</button>
                </div>
            </div>
        </div>
    )
}
