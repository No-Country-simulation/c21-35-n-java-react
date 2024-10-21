import { EyeOff, Lock, User } from "lucide-react"
import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <div className="w-full max-h-screen relative">
      <img src="../images/home/home-section.png" alt="imagen principal de la página" className="z-[10] brightness-75" />
      <div className="absolute top-1 z-[99]">
        <Link to={'/'}>
          <img src="../images/home/logo-svg.svg" alt="" className="ml-[40px]" />
        </Link>
      </div>
      <div className="absolute top-4">
        <div className="flex w-[1200px] h-[500px] mt-[100px] ml-[100px]">
          <div className="w-[570px] mt-[65px] h-full text-white m-auto flex flex-col items-center">
            <h4 className="w-[444px] font-black text-[40px] text-center">Bienvenido de nuevo a ¡GAME<span className="text-[#39FF14]">X</span>O!</h4>
            <p className="font-bold text-[20px] h-[108px] text-center">Tu puerta de entrada al mundo de los videojuegos. Inicia sesión para acceder a tu cuenta, gestionar tus licencias, descargar tus juegos favoritos y disfrutar de los mejores títulos del mercado en cualquier plataforma.</p>
          </div>
          <div className="w-[493px] rounded-3xl h-full bg-[#181818] ">
            <div className="flex flex-col items-center mx-5 my-5 gap-3">
              <h5 className="font-bold text-[25px] text-white">Inicio de Sesión</h5>
              <form action="#" className="flex flex-col gap-4 w-[95%] items-center">
                <div className="w-full flex flex-col gap-2 mt-[34px]">
                  <div className="flex gap-2">
                    <User className="text-white" />
                    <label htmlFor="" className="font-bold text-[20px] text-white">Usuario</label>
                  </div>
                  <input type="text" id="name" placeholder="Nombre" className="h-[44px] rounded-xl w-full p-3" />
                </div>
                <div className="w-full flex flex-col gap-2 mt-[22px] relative">
                  <div className="flex gap-2 text-white">
                    <Lock />
                    <label htmlFor="password" className="font-bold text-[20px]">Contraseña</label>
                  </div>
                  <input type="password" id="password" placeholder="************" className="h-12 rounded-xl w-full p-3" />
                  <div className="absolute top-12 left-96">
                    <EyeOff />
                  </div>
                </div>
                <div className="flex gap-2 text-white font-bold text-[15px]">
                  <p>¿Olvidaste tu contraseña?</p>
                  <a href="" className="font-black">Restablécela Ahora</a>
                </div>

                <button className="rounded-3xl bg-[#2ACE17] hover:bg-[#29ce17a4] mt-[29px] text-white h-[40px] w-[192px] font-bold text-[20px]">Ingresar</button>

                <div className="flex gap-2 text-white">
                  <p className="font-bold text-[15px]">¿No tienes cuenta?</p>
                  <Link to={'/auth/register'} className="font-black text-[15px]">Regístrate</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
