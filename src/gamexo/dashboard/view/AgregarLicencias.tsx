
export const AgregarLicencias = () => {
    return (
        <form action="#" className="flex flex-col items-center gap-2">
            <div className="flex mx-2">
                <div className="w-[275px] h-[173px] bg-[#7E7E7E] my-3 rounded-2xl"></div>
                <div className="flex flex-col gap-2 mx-5 my-3">
                    <input type="text" placeholder="Ingrese su nombre" className="w-[257px] h-[42px] rounded-lg placeholder:ml-8 bg-[#D9D9D9]" />
                    <textarea name="" id="" className="w-[257px] h-[123px] rounded-lg bg-[#D9D9D9]"></textarea>
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
                <div className="">
                    <div className="bg-[#0A0A0A] rounded-2xl h-[50px] items-center mx-2 flex gap-1">
                        <div>
                            <label htmlFor="stock" className="mx-2">Stock</label>
                            <input type="number" name="stock" id="stock" className="w-[180px] h-[35px] rounded-lg text-black bg-[#D9D9D9]" />
                        </div>
                        <div>
                            <label htmlFor="venta" className="mx-1">Precio de venta</label>
                            <input type="number" name="venta" id="venta" className="w-[203px] h-[35px] rounded-lg text-black bg-[#D9D9D9]" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-[#0A0A0A] rounded-2xl h-[50px] items-center mx-2 flex gap-1">
                        <div>
                            <label htmlFor="codigo" className="mx-2">Código</label>
                            <input type="number" name="codigo" id="codigo" className="w-[203px] h-[35px] rounded-lg text-black bg-[#D9D9D9]" />
                        </div>
                        <div className="flex gap-4 items-center mx-auto">
                            <label htmlFor="venta">Fecha</label>
                            <input type="date" name="fecha" id="fecha" className="w-[203px] h-[35px] rounded-lg text-black bg-[#D9D9D9]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 bg-[#0A0A0A] w-[563px] h-[124px] rounded-2xl items-center justify-center">
                <div className="w-[118px] h-[103px] bg-[#737373] rounded-lg"></div>
                <div className="w-[118px] h-[103px] bg-[#737373] rounded-lg"></div>
                <div className="w-[118px] h-[103px] bg-[#737373] rounded-lg"></div>
                <div className="w-[118px] h-[103px] bg-[#737373] rounded-lg"></div>
            </div>

            <textarea className="w-[563px] h-[80px] bg-[#0A0A0A] rounded-2xl text-white" />

            <div className="flex gap-4 items-end mx-5 justify-end">
                <button className="w-[145px] h-[40px] bg-[#EB001B] hover:bg-[#EB005B] text-white rounded-2xl">Cancelar</button>
                <button className="w-[145px] h-[40px] bg-[#2ACE17] hover:bg-[#2ACE69] text-white rounded-2xl">Publicar</button>
            </div>
        </form>
    )
}
