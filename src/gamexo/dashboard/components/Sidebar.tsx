import useAuthStore from "@/store/useAuthStore"
import { Archive, Bookmark, Box, Clock4, CreditCard, HardDrive, LayoutDashboard, MessageSquare, Settings, Star } from "lucide-react"
import { NavLink } from "react-router-dom"



const menuUser = [
    {
        "icon": <LayoutDashboard />,
        "path": '/dashboard',
        "name": "Dashboard"
    },
    {
        "icon": <Archive />,
        "path": '/dashboard/game-store',
        "name": "Game Store"
    },
    {
        "icon": <Bookmark />,
        "path": '/dashboard/juegos',
        "name": "Mis juegos"
    },
    {
        "icon": <Star />,
        "path": '/dashboard/favoritos',
        "name": "Favoritos"
    },
    {
        "icon": <Clock4 />,
        "path": '/dashboard/proximamente',
        "name": "Proximamente"
    },
    {
        "icon": <MessageSquare />,
        "path": '/dashboard/noticias',
        "name": "Blog y Noticias"
    },
    {
        "icon": <Settings />,
        "path": '/dashboard/ajustes',
        "name": "Ajustes"
    }
]

const menuAdmin = [
    {
        "icon": <LayoutDashboard />,
        "path": '/dashboard/admin',
        "name": "Dashboard"
    },
    {
        "icon": <Box />,
        "path": '/dashboard/licencias',
        "name": "Licencias"
    },
    {
        "icon": <HardDrive />,
        "path": '/dashboard/ventas',
        "name": "Ventas"
    },
    {
        "icon": <CreditCard />,
        "path": '/dashboard/pagos',
        "name": "Pagos"
    },
    {
        "icon": <Clock4 />,
        "path": '/dashboard/proximamente',
        "name": "Proximamente"
    },
    {
        "icon": <MessageSquare />,
        "path": '/dashboard/noticias',
        "name": "Blog y Noticias"
    },
    {
        "icon": <Settings />,
        "path": '/dashboard/ajustes',
        "name": "Ajustes"
    }
]


export const Sidebar = () => {

    const { rol } = useAuthStore(state => state)

    return (

        <div className="w-[305px] bg-[#0A0A0A] min-h-screen">
            <div className="w-[200px] h-[100px] m-5 ml-5">
                <img src="../../images/logo-gamexo.png" className="ml-5" />
            </div>
            <div>
                {rol === 'ADMIN' && (
                    menuAdmin.map((item, idx) => (
                        <div key={idx} className="text-white flex gap-1 mx-10">
                            <NavLink
                                to={item.path}
                                end={item.path === '/dashboard'}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-500 w-[250px] text-white rounded-lg flex items-center gap-2 px-4 py-3 my-1"
                                        : "w-[250px] text-white rounded-lg flex items-center gap-2 my-1 px-4 py-3 hover:bg-gray-700"
                                }
                            >
                                <div>{item.icon}</div>
                                <span className="font-bold text-[20px]">{item.name}</span>
                            </NavLink>
                        </div>
                    ))
                )}
                {rol === 'CLIENT' && (
                    menuUser.map((item, idx) => (
                        <div key={idx} className="text-white flex gap-1 mx-10">
                            <NavLink
                                to={item.path}
                                end={item.path === '/dashboard'}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-500 w-[250px] text-white rounded-lg flex items-center gap-2 px-4 py-3 my-1"
                                        : "w-[250px] text-white rounded-lg flex items-center gap-2 my-1 px-4 py-3 hover:bg-gray-700"
                                }
                            >
                                <div>{item.icon}</div>
                                <span className="font-bold text-[20px]">{item.name}</span>
                            </NavLink>
                        </div>
                    ))
                )}
            </div>
            <div className="w-[70%] h-[100px] bg-[#1A6C10] m-auto mx-10 rounded-2xl">
                <div className="text-white grid mx-3 my-4 items-center justify-center">
                    <h3 className="mt-3">Felicidades!</h3>
                    <p>Recibe 15% de descuento en tu primera compra.</p>
                </div>
            </div>

        </div>

    )
}
