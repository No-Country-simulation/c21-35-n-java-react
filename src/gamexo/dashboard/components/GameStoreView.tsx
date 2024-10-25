import { ArrowLeft, ArrowRight } from "lucide-react"

interface PropsGame {
    title?: string,
    imagen1: string,
    imagen2: string,
    imagen3: string,
    imagen4: string,
    yesArrow?: boolean,
    subtitle1: string
    subtitle2: string
    subtitle3: string
    subtitle4: string
}

export const GameStoreView = ({ title, imagen1, imagen2, imagen3, imagen4, yesArrow = true, subtitle1, subtitle2, subtitle3, subtitle4 }: PropsGame) => {
    return (
        <div className="w-[90%] m-auto my-5">
            <div className="flex justify-between ">
                <h4 className="font-extrabold text-xl mb-[22px]">{title}</h4>
                <div className="flex text-[#2ACE17] gap-6">
                    {
                        yesArrow
                            ? (
                                <>
                                    <button>
                                        <ArrowLeft />
                                    </button>
                                    <button>
                                        <ArrowRight />
                                    </button>
                                </>
                            )
                            : ''
                    }

                </div>
            </div>
            <div className="flex gap-10">
                <div className="bg-[#181818] w-[206px] h-[170px] rounded-2xl p-2 hover:scale-105 transition-all cursor-pointer">
                    <img src={`../../images/dashboard/gamestore/${imagen1}.png`} alt="" />
                    <div className="flex justify-between items-center my-2 ">
                        <h4 className="font-extrabold text-[12px]">{subtitle1}</h4>
                        <button className="bg-[#2ACE17] font-bold text-[12px] rounded-2xl h-7 p-1 text-white">$200.59</button>
                    </div>
                </div>
                <div className="bg-[#181818] w-[206px] h-[170px] hover:scale-105 transition-all rounded-2xl p-2 cursor-pointer">
                    <img src={`../../images/dashboard/gamestore/${imagen2}.png`} alt="" />
                    <div className="flex justify-between items-center my-2">
                        <h4 className="font-extrabold text-[12px]">{subtitle2}</h4>
                        <button className="bg-[#2ACE17] font-bold text-[12px] rounded-2xl h-7 p-1 text-white">$200.59</button>
                    </div>
                </div>
                <div className="bg-[#181818] w-[206px] h-[170px] rounded-2xl p-2 hover:scale-105 transition-all cursor-pointer">
                    <img src={`../../images/dashboard/gamestore/${imagen3}.png`} alt="" />
                    <div className="flex justify-between items-center my-2">
                        <h4 className="font-extrabold text-[12px]">{subtitle3}</h4>
                        <button className="bg-[#2ACE17] font-bold text-[12px] rounded-2xl h-7 p-1 text-white">$200.59</button>
                    </div>
                </div>
                <div className="bg-[#181818] w-[206px] h-[170px] rounded-2xl p-2 hover:scale-105 transition-all cursor-pointer">
                    <img src={`../../images/dashboard/gamestore/${imagen4}.png`} alt="" />
                    <div className="flex justify-between items-center my-2">
                        <h4 className="font-extrabold text-[12px]">{subtitle4}</h4>
                        <button className="bg-[#2ACE17] font-bold text-[12px] rounded-2xl h-7 p-1 text-white">$599.59</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
