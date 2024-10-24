
export const FavoritosPage = () => {
  return (
    <div className="w-full text-white h-screen p-6">
      <h4 className="font-extrabold text-xl mt-[17px] mb-[23px]">Tus favoritos</h4>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="w-[532px] bg-[#181818] h-[97px] rounded-3xl flex">
            <img src="../images/dashboard/image-1-gamestore.png" alt="" className="m-[13px]" />
            <div className="my-[13px] ml-[16px] mr-[15px]">
              <h4 className="font-extrabold text-xl">MINECARFT</h4>
              <p className="font-semibold text-[15px]">Explora, construye y sobrevive en el mundo de bloques de Minecraft. Con modos Supervivencia y Creativo.</p>
            </div>
          </div>
          <div className="w-[167px] h-[97px] bg-[#2ACE17] rounded-3xl p-3 flex flex-col gap-1">
            <div className="w-[131px] flex items-center justify-center h-full">
              <p className="font-bold text-[15px]">
                <a href="#">Comprar ahora</a>
              </p>
            </div>
          </div>
          <div className="w-[141px] h-[97px] bg-[#181818] rounded-3xl flex items-center text-center justify-center">
            <a href="#" className="font-bold text-[15px] mx-[31px]">Agregar al carrito</a>
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
          <div className="w-[167px] h-[97px] bg-[#2ACE17] rounded-3xl p-3 flex flex-col gap-1">
            <div className="w-[131px] flex items-center justify-center h-full">
              <p className="font-bold text-[15px]">
                <a href="#">Comprar ahora</a>
              </p>
            </div>
          </div>
          <div className="w-[141px] h-[97px] bg-[#181818] rounded-3xl flex items-center text-center justify-center">
            <a href="#" className="font-bold text-[15px] mx-[31px]">Agregar al carrito</a>
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
          <div className="w-[167px] h-[97px] bg-[#181818] rounded-3xl p-3 flex flex-col gap-1">
            <div className="w-[131px]">
              <p className="font-bold text-[15px]">Licencia adquirida el: <span className="font-semibold text-[15px]">12-09-2024</span></p>
            </div>
            <div>
              <p className="font-semibold text-[15px]">Por:<span className="font-bold text-xl"> $ 859.99</span></p>
            </div>
          </div>
          <div className="w-[141px] h-[97px] bg-[#181818] rounded-3xl flex items-center justify-center">
            <a href="#" className="font-bold text-[15px]">Más detalles</a>
          </div>
        </div>
      </div>
    </div>
  )
}
