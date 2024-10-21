import { FacebookIcon, InstagramIcon, WhatsAppIcon, XIcon } from "@/components/icons"
import { useRef } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const heroRef = useRef(null);
    const nosotrosRef = useRef(null);
    const catalogoRef = useRef(null);
    const soporteRef = useRef(null);

    // Función para hacer scroll a la sección seleccionada
    const scrollToSection = (ref: any) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="scroll-smooth">
            {/* Barra superior */}
            <header className="h-[74px] w-full bg-[#000000]">
                <div className="flex justify-between items-center w-[98%] mx-auto">
                    <Link to={'/'} className="w-[200px] h-[70px]">
                        <img src="../images/logo-gamexo.png" className="ml-5 mt-2" />
                    </Link>
                    <nav className="flex items-center text-white space-x-6 font-bold text-[20px]">
                        <ol><a href="#hero" onClick={() => scrollToSection(heroRef)}>Inicio</a></ol>
                        <ol><a href="#nosotros" onClick={() => scrollToSection(nosotrosRef)}>Nosotros</a></ol>
                        <ol><a href="#catalogo-juegos" onClick={() => scrollToSection(catalogoRef)}>Catálogo de juegos</a></ol>
                        <ol><a href="#soporte" onClick={() => scrollToSection(soporteRef)}>Soporte</a></ol>
                        <Link className="bg-[#39FF14] rounded-3xl w-[143px] h-[47px] flex items-center justify-center" to={"auth/login"}>Iniciar Sesión</Link>
                    </nav>
                </div>
            </header>


            {/* Hero */}
            <div className="relative w-full min-h-screen" id="hero">

                <img src="../images/home/home-section.png" alt="" className="object-cover w-full h-full brightness-75" />

                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute z-[99] top-[200px] left-[380px]">
                    <div className="w-[555px] text-[#FFFFFF] ml-6 h-[71px] font-bold text-[50px]">
                        <h1>¡Bienvenido a GAME<span className="text-[#39FF14]">X</span>O!</h1>
                    </div>
                    <div className="w-[634px] mt-[26px]">
                        <p className="font-bold text-white text-[20px]">"Descubre los mejores juegos y licencias al mejor precio. Todo lo que necesitas para sumergirte en tu próxima aventura está aquí."</p>
                    </div>
                    <div className="m-auto mt-[120px] ml-[180px]">
                        <button className="bg-[#39FF14] rounded-3xl text-white w-[208px] h-[47px] text-[20px] font-bold">Explorar el catálogo</button>
                    </div>
                </div>
            </div>

            {/* Quienes somos? */}
            <section className="w-full h-[772px] bg-[#181818] flex justify-center items-center" id="nosotros">
                <div className="w-[634px] mx-[323px] font-bold text-[20px] text-white">
                    <h3 className="font-bold text-[30px] text-center mb-[93px]">¿Quiénes Somos?</h3>
                    <p className="mt-4 mb-[50px]">En GAMEXO nos apasiona el mundo de los videojuegos. Nos dedicamos a ofrecerte las mejores licencias a precios competitivos, para que disfrutes de tus juegos favoritos en cualquier momento y en cualquier plataforma.</p>
                    <p className="mt-4 mb-[50px]">Contamos con una amplia gama de títulos disponibles para las principales plataformas, desde los últimos lanzamientos hasta los clásicos más queridos. Nuestro objetivo es brindarte una experiencia de compra excepcional, con un enfoque en la satisfacción del cliente. Creemos que cada jugador merece acceso fácil, rápido y seguro a sus videojuegos favoritos, y trabajamos arduamente para lograrlo.</p>
                    <p className="mt-4 mb-[50px]">Ya seas un jugador casual o un aficionado de corazón, en GAMEXO encontrarás lo que necesitas para vivir grandes aventuras en el mundo de los videojuegos.</p>
                </div>
            </section>
            {/* Catalogo de juegos */}
            <section className="w-full h-[792px] bg-[#000000] text-white flex flex-col items-center" id="catalogo-juegos">
                <h4 className="font-bold text-[30px] mt-[51px]">Catalogo de juegos</h4>
                <div className="flex gap-4 mt-[55px] font-bold ">
                    <div className="w-[578px] flex flex-col gap-9">
                        <p className="text-[20px]">En GAMEXO, te ofrecemos un catálogo extenso y cuidadosamente seleccionado, que abarca todos los géneros y plataformas. Desde las últimas novedades hasta los clásicos que han marcado generaciones, nuestra tienda te asegura que siempre encontrarás el juego perfecto para tu estilo y preferencias.</p>
                        <div>
                            <h5 className="text-[20px] text-[#39FF14]">Títulos Destacados</h5>
                            <p className="text-[15px]">
                                Te ofrecemos licencias de los juegos más populares del momento, incluyendo éxitos como Call of Duty, The Legend of Zelda, FIFA, Elden Ring, y Minecraft, además de sagas icónicas que han dejado huella en la historia de los videojuegos.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-[20px] text-[#39FF14]">Variedad de Plataformas</h5>
                            <p className="text-[15px]">Disponemos de licencias para las principales plataformas, incluyendo PC, PlayStation, Xbox y Nintendo, asegurando que siempre puedas acceder a los mejores juegos, sin importar el dispositivo que utilices.</p>
                        </div>
                        <div>
                            <h5 className="text-[20px] text-[#39FF14]">Ofertas Exclusivas y Nuevos Lanzamientos</h5>
                            <p className="text-[15px]">En GAMEXO, siempre estamos actualizando nuestro catálogo con los lanzamientos más esperados y ofreciendo descuentos exclusivos para nuestros usuarios registrados. ¡Mantente al tanto de nuestras ofertas para no perderte las mejores oportunidades!</p>
                        </div>

                    </div>
                    <div className=" flex gap-3 mt-[112px] ml-[92px]">
                        <div className="flex gap-4 flex-col items-end">
                            <div>
                                <img src="../images/home/home-img-1.png" alt="" />
                            </div>
                            <div>
                                <img src="../images/home/home-img-3.png" alt="" />
                            </div>
                            <div className="">
                                <img src="../images/home/home-img-5.png" alt="" />
                            </div>

                        </div>
                        <div className=" flex flex-col gap-4 mt-[114px]">
                            <div>
                                <img src="../images/home/home-img-2.png" alt="" />
                            </div>
                            <div className="">
                                <img src="../images/home/home-img-4.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Soporte */}
            <section className="w-full h-[772px] bg-[#181818] flex flex-col items-center justify-center gap-2" id="soporte">
                <h4 className="font-bold text-[30px] text-white">Soporte</h4>
                <p className="text-white text-[20px]">"Estamos aquí para ayudarte. Encuentra la solución que necesitas o contacta a nuestro equipo."</p>
                <div className="flex items-center justify-center gap-4 mt-[25px]">
                    <div className="w-[368px] h-[514px] bg-[#EDEDED] rounded-3xl">
                        <div className="flex flex-col items-center mx-5 my-5 gap-3">
                            <h5 className="text-[20px] font-bold">Preguntas frecuentes</h5>
                            <small className="border-[0.1px] border-black w-[95%] m-auto"></small>
                            <ol>
                                <li className="font-normal text-[15px]">1.<a href="#" className="underline"> ¿Cómo puedo activar mi licencia de juego?</a></li>
                                <li className="font-normal text-[15px]">2. <a href="#" className="underline">¿Qué hacer si tengo problemas para descargar un juego?</a></li>
                                <li className="font-normal text-[15px]">3.<a href="#" className="underline"> ¿Cómo puedo cambiar mis datos de cuenta o contraseña?</a></li>
                                <li className="font-normal text-[15px]">4.<a href="#" className="underline"> ¿Cómo puedo solicitar un reembolso?</a></li>
                                <li className="font-normal text-[15px]">5.<a href="#" className="underline"> ¿Cómo puedo contactar con soporte técnico?</a></li>
                                <li className="font-normal text-[15px]">6.<a href="#" className="underline"> ¿Puedo descargar un juego en varios dispositivos?</a></li>
                                <li className="font-normal text-[15px]">7.<a href="#" className="underline"> ¿Qué métodos de pago acepta GAMEXO?</a></li>
                                <li className="font-normal text-[15px]">8.<a href="#" className="underline">¿Cómo sé si un juego es compatible con mi dispositivo?</a></li>
                                <li className="font-normal text-[15px]">9.<a href="#" className="underline">¿Cómo puedo recuperar mi cuenta si olvidé mi contraseña?</a> </li>
                                <li className="font-normal text-[15px]">10. <a href="#" className="underline">¿Cómo puedo ver mis compras anteriores?</a></li>
                            </ol>
                        </div>
                    </div>
                    <div className="w-[368px] h-[514px] bg-[#EDEDED] rounded-3xl">
                        <div className="flex flex-col items-center mx-5 my-5 gap-3">
                            <h5 className="text-[20px] font-bold">Contáctanos</h5>
                            <span className="border-[0.1px] border-black w-[95%] m-auto"></span>
                            <form action="#" className="flex flex-col gap-4 w-[95%] items-center">

                                <input type="text" id="name" placeholder="Nombre" className="h-10 rounded-3xl w-full p-3" />
                                <input type="email" id="email" placeholder="Correo electronico" className="h-12 rounded-3xl w-full p-3" />
                                <input type="text" id="email" placeholder="Asunto" className="h-12 rounded-3xl w-full p-3" />
                                <textarea name="text" id="" className="w-full h-[182px] p-3 rounded-3xl resize-none" placeholder="Mensaje"></textarea>
                                <button className="rounded-3xl bg-[#181818] hover:bg-gray-800 text-white h-[40px] w-[127px]">Enviar solicitud</button>
                            </form>
                        </div>
                    </div>
                    <div className="w-[368px] h-[514px] bg-[#EDEDED] rounded-3xl">
                        <div className="flex flex-col items-center mx-5 my-5 gap-3">
                            <h5 className="text-[20px] font-bold">Accesos directos</h5>
                            <small className="border-[0.1px] border-black w-[95%] m-auto"></small>
                            <ol className="w-full h-[402px] font-semibold text-[15px] leading-5">
                                <li className="font-normal text-[15px]">1.<a href="#" className="underline"> Cambiar Contraseña</a></li>
                                <li className="font-normal text-[15px]">2. <a href="#" className="underline">Gestionar Licencias</a></li>
                                <li className="font-normal text-[15px]">3.<a href="#" className="underline"> Ver Mis Compras</a></li>
                                <li className="font-normal text-[15px]">4.<a href="#" className="underline"> Solicitar Reembolso</a></li>
                                <li className="font-normal text-[15px]">5.<a href="#" className="underline"> Contactar al Soporte</a></li>
                                <li className="font-normal text-[15px]">6.<a href="#" className="underline"> Activar Licencia de Juego</a></li>
                                <li className="font-normal text-[15px]">7.<a href="#" className="underline"> Descargar Juego</a></li>
                                <li className="font-normal text-[15px]">8.<a href="#" className="underline">Ver Juegos Comprados</a></li>
                                <li className="font-normal text-[15px]">9.<a href="#" className="underline">Actualizar Datos de Cuenta</a> </li>
                                <li className="font-normal text-[15px]">10. <a href="#" className="underline">Consultar Historial de Pagos</a></li>
                                <li className="font-normal text-[15px]">11. <a href="#" className="underline">Ver Juegos Disponibles</a></li>
                                <li className="font-normal text-[15px]">12. <a href="#" className="underline">Comprobar Compatibilidad del Sistema</a></li>
                                <li className="font-normal text-[15px]">13. <a href="#" className="underline">Modificar Información de Facturación</a></li>
                                <li className="font-normal text-[15px]">14. <a href="#" className="underline">Canjear Código de Juego</a></li>
                                <li className="font-normal text-[15px]">15. <a href="#" className="underline">Acceder al Chat en Vivo</a></li>
                                <li className="font-normal text-[15px]">16. <a href="#" className="underline">Consultar Preguntas Frecuentes (FAQs)</a></li>
                                <li className="font-normal text-[15px]">17. <a href="#" className="underline">Ver Estado del Reembolso</a></li>
                                <li className="font-normal text-[15px]">18. <a href="#" className="underline">Revisar Términos y Condiciones</a></li>
                                <li className="font-normal text-[15px]">19. <a href="#" className="underline">Reportar Problema Técnico</a></li>
                                <li className="font-normal text-[15px]">20. <a href="#" className="underline">Consultar Historial de Pagos</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="w-full h-[132px] bg-[#000000] flex items-center justify-center">
                <nav className="text-white flex items-center justify-center gap-5 font-bold text-[20px]">
                    <ol><a href="#">Políticas de privacidad</a></ol>
                    <ol><a href="#">Términos y condiciones</a></ol>
                    <ol><a href="#">Soporte tecnico</a></ol>
                    <div className="flex gap-4">
                        <a href="#"><WhatsAppIcon /></a>
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"> <InstagramIcon /> </a>
                        <a href="#"> <XIcon /> </a>
                    </div>
                </nav>

            </footer>

        </main>
    )
}
