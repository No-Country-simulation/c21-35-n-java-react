import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import { createNewUserWithEmailAndPassword } from "../providers";
import { BookLock, Eye, EyeOff, Lock, Mail, User } from "lucide-react";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null | undefined>(null);
  const { login, checkingCredentials, logout } = useAuthStore()
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setLoading(true)
    checkingCredentials()

    const result = await createNewUserWithEmailAndPassword({ name, email, password, rol })

    if (result.ok) {
      login({ email, name, rol })
      navigate('/dashboard')
    } else {
      logout(result.msg)
      setError(result.msg)
    }
    setLoading(false)
  };

  return (
    <div className="w-full h-[900px] relative">
      <img src="../images/home/home-section.png" alt="imagen principal de la página" className="z-[10] brightness-75 h-full" />
      <div className="absolute top-1 z-[99]">
        <Link to={'/'} className="relative top-0">
          <img src="../images/home/logo-svg.svg" alt="" className="ml-[40px]" />
        </Link>
      </div>
      <div className="absolute top-5">
        <div className="flex absolute w-[1200px] h-[500px] mt-[40px] ml-[100px]">
          <div className="w-[600px] mt-[125px] h-full text-white m-auto flex flex-col items-center">
            <h4 className="w-[547px] font-black text-[40px] text-center">Únete a GAME<span className="text-[#39FF14]">X</span>O y comienza a jugar hoy mismo</h4>
            <p className="font-bold text-[20px] h-[108px] mt-[26px] w-[465px] text-center">Regístrate para acceder a nuestra amplia biblioteca de videojuegos y disfruta de licencias exclusivas a precios competitivos.</p>
          </div>
          <div className="w-[493px] rounded-3xl h-[700px] bg-[#181818]">
            <div className="flex flex-col items-center mx-5 my-5 gap-1">
              <h5 className="font-bold text-[25px] text-white">Registro</h5>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[95%] items-center">
                {error && <p className="text-red-500">{error}</p>}

                <div className="w-full flex flex-col gap-1 mt-[14px]">
                  <div className="flex gap-2 text-white">
                    <User />
                    <label htmlFor="name" className="font-bold text-[20px] text-white">Nombre completo</label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-[44px] rounded-xl w-full p-3"
                  />
                </div>

                <div className="w-full flex flex-col gap-1">
                  <div className="text-white flex gap-2 items-center">
                    <Mail />
                    <label htmlFor="email" className="font-bold text-[20px] text-white">Correo electronico</label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Correo electronico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[44px] rounded-xl w-full p-3"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 mt-[6px] relative">
                  <div className="flex gap-2 text-white">
                    <Lock />
                    <label htmlFor="password" className="font-bold text-[20px]">Ingrese una contraseña</label>
                  </div>
                  <input
                    type="password"
                    id="password"
                    placeholder="************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 rounded-xl w-full p-3"
                  />
                  <div className="absolute top-12 left-96">
                    <Eye />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-1 mt-[6px] relative">
                  <div className="flex gap-2 text-white">
                    <Lock />
                    <label htmlFor="password-2" className="font-bold text-[20px]">Confirme la contraseña</label>
                  </div>
                  <input
                    type="password"
                    id="password-2"
                    placeholder="************"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12 rounded-xl w-full p-3"
                  />
                  <div className="absolute top-12 left-96">
                    <EyeOff />
                  </div>
                </div>

                {/* Selector de rol */}
                <div className="w-full flex flex-col gap-3 mt-4">
                  <div className="flex gap-2">
                    <BookLock className="text-white" />
                    <label htmlFor="role" className="font-bold text-[20px] text-white">Rol</label>
                  </div>
                  <select
                    id="rol"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                    className="h-[44px] rounded-xl w-full p-3  text-black"
                  >
                    <option value="CLIENT">Usuario</option>
                    <option value="ADMIN">Administrador</option>
                  </select>
                </div>

                <button type="submit" className="rounded-3xl bg-[#2ACE17] hover:bg-[#29ce17a4] mt-[29px] text-white h-[40px] w-[192px] font-bold text-[20px]">Ingresar</button>

                <div className="flex gap-2 text-white">
                  <p className="font-bold text-[15px]">¿Ya tienes cuenta?</p>
                  <Link to={'/auth/login'} className="font-black text-[15px]">Inicia sesión</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
