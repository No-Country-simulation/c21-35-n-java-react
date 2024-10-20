import { Bookmark, Clock4, LayoutDashboard, MessageSquare, Settings } from "lucide-react"
import { NavLink } from "react-router-dom"



const menu = [
    {
        "icon": <LayoutDashboard />,
        "path": '/',
        "name": "Dashboard"
    },
    {
        "icon": <LayoutDashboard />,
        "path": '/game-store',
        "name": "Mis juegos"
    },
    {
        "icon": <Bookmark />,
        "path": '/favoritos',
        "name": "Favoritos"
    },
    {
        "icon": <Clock4 />,
        "path": '/proximamente',
        "name": "Proximamente"
    },
    {
        "icon": <MessageSquare />,
        "path": '/noticias',
        "name": "Blog y Noticias"
    },
    {
        "icon": <Settings />,
        "path": '/ajustes',
        "name": "Ajustes"
    }
]


export const Sidebar = () => {

    return (

        <div className="w-[305px] bg-[#0A0A0A] h-[832px]">
            <div className="w-[200px] h-[100px] m-5 ml-5">
                <img src="../../public/images/logo-gamexo.png" className="ml-5" />
            </div>
            <div>
                {
                    menu.map((item, idx) => (
                        <div className="text-white flex gap-1 mx-10">
                            <NavLink
                                key={idx}
                                to={item.path}
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
                }
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
