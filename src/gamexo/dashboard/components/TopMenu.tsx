import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Bell, MessageCircle, Search, Store } from "lucide-react"
import { NavLink } from "react-router-dom"

export const TopMenu = () => {
    return (
        <div className="h-[90px] w-full bg-[#181818]">
            <div className="flex justify-between p-5">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Buscar"
                        className="w-full bg-[#0A0A0A] border-none rounded-lg pl-8 md:w-[200px] lg:w-[320px] caret-white text-white"
                    />
                </div>
                <div className="flex gap-6 mr-5">
                    <div className="flex items-center gap-6">
                        <NavLink to={'/dashboard/carrito'}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#2ACE17]"
                                    : "text-white"
                            }
                        >
                            <Store />
                        </NavLink>
                        <button>
                            <MessageCircle className="text-white" />
                        </button>
                        <button>
                            <Bell className="text-white" />
                        </button>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <div>
                            <Avatar>
                                <AvatarImage src="" alt="@shadcn" />
                                <AvatarFallback className="bg-gray-600">CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-col text-white">
                            <h3 className="text-[20px]">Luis Rodriguez</h3>
                            <span className="text-[15px]">luisikingrodri28@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
