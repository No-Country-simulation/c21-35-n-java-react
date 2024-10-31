import { logoutProvider } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import useAuthStore from "@/store/useAuthStore"
import { LogOut, MessageCircle, Search, Store } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"

export const TopMenu = () => {
    const { logout, rol } = useAuthStore()
    const navigate = useNavigate()
    const { email, name } = useAuthStore(state => state)
    const handleLogout = () => {
        const result = logoutProvider()
        if (result.ok) {
            logout()
            navigate('/')
        } else {
            logout(result.msg)
        }
    }
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
                        {
                            rol === 'CLIENT'
                                ? (<NavLink to={'/dashboard/carrito'}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-[#2ACE17]"
                                            : "text-white"
                                    }
                                >
                                    <Store className="hover:text-green-600" />
                                </NavLink>)
                                : ''
                        }

                        <button>
                            <MessageCircle className="text-white hover" />
                        </button>
                        <button onClick={handleLogout}>
                            <LogOut className="text-white hover:text-red-600" />
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
                            <h3 className="text-[20px]">{name}</h3>
                            <span className="text-[15px]">{email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
