import { MoveLeft, MoveRight } from "lucide-react"

export const DashboardPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#000000]">
      <img src="../images/dashboard/image-dashboard-1.png" className="brightness-50 object-fill w-[884px] h-[337px] m-auto mt-[42px]" />
      <div className="w-[385px] h-[252px] text-white absolute top-20 left-24">
        <div>
          <h4 className="font-extrabold leading-[45px] text-[40px]">Disfruta de la mejor
            experiencia gaming</h4>
          <p className="font-extrabold text-xl">Estrena nuestra nueva licencia y vuélvete un pro en MINECRAFT</p>
        </div>
        <button className="rounded-2xl bg-white text-black p-3 mt-10">Comprar ahora</button>
      </div>

      <div>
        <div className="flex text-white justify-between w-[85%] m-auto mt-5 h-[50px] ">
          <h3 className="font-bold text-xl uppercase">Los mas vendidos</h3>
          <div className="flex gap-10">
            <MoveLeft className="text-[#2ACE17]" />
            <MoveRight className="text-[#2ACE17]" />
          </div>
        </div>
        <div className="flex w-[85%] gap-3 m-auto">
          <div className="w-[340px] h-[221px] rounded-3xl bg-[#181818]">
            <div className="flex flex-col">
              <div className="m-2 w-[316px] h-[162px]">
                <img src="../images/dashboard/image-dashboard-2.png" alt="" />
              </div>
              <div className="w-full h-[10%]">
                <div className="text-white flex justify-between mx-4 items-center">
                  <h4 className="font-extrabold text-[15px]">PALWORLD</h4>
                  <button className="p-1 bg-[#2ACE17] w-[73px] rounded-3xl">$200.59</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[221px] rounded-3xl bg-[#181818]">
            <div className="flex flex-col">
              <div className="m-2 w-[316px] h-[162px]">
                <img src="../images/dashboard/image-dashboard-3.png" alt="" />
              </div>
              <div className="w-full h-[10%]">
                <div className="text-white flex justify-between mx-4 items-center">
                  <h4 className="font-extrabold text-[15px]">GEARS 5</h4>
                  <button className="p-1 bg-[#2ACE17] w-[73px] rounded-3xl">$200.59</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[221px] rounded-3xl overflow-hidden bg-[#181818]">
            <div className="flex flex-col">
              <div className="m-2 w-[316px] h-[162px]">
                <img src="../images/dashboard/image-dashboard-4.png" alt="" />
              </div>
              <div className="w-full h-[10%]">
                <div className="text-white flex justify-between mx-4 items-center">
                  <h4 className="font-extrabold text-[15px]">DOOM</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
