import { Link } from "react-router-dom"

export const NoticiasPage = () => {
  return (
    <div className="text-white min-h-screen w-[90%] m-auto mb-14 mt-6">
      <h4 className="font-extrabold text-xl ml-2 my-5">Novedades del día</h4>
      <div className="flex bg-[#000000] gap-4 ">
        <div className="w-[506px] min-h-screen bg-[#181818] rounded-3xl">
          <div className="mt-8 mx-6">
            <div className="flex items-start flex-col">
              <h3 className="font-extrabold text-xl mb-4">Nuevos lanzamientos</h3>
              <Link to={'/dashboard/noticias/lanzamientos'} className="hover:underline">
                <h4 className="font-extrabold text-[15px]">Lo que no te puedes perder en noviembre 2024</h4>
              </Link>
              <p className="font-normal text-[12px] my-5">¡Hola, gamers! Soy Yorch, administrador de GAMEXO, y les traigo las novedades más emocionantes para este mes. Tenemos algunos lanzamientos de licencias de videojuegos que seguramente harán vibrar a nuestra comunidad. Aquí les dejo los más esperados:</p>
              <Link to={'/dashboard/noticias/lanzamientos'} className="hover:underline">
                <h5 className="font-extrabold text-[14px]">Marvel's Spider-Man 2 (PS5) – 10 de noviembre</h5>
              </Link>
              <ul className="list-disc list-inside space-y-1 mb-12 font-normal text-[12px]">
                <li>¡Prepárate para balancearte por la ciudad de Nueva York en la secuela más esperada del universo Marvel! En esta nueva entrega, podrás controlar tanto a Peter Parker como a Miles Morales, cada uno con sus propias habilidades únicas, lo que permitirá alternar entre ellos en momentos clave de la historia.</li>
                <li>Nuevas Características:
                  <ul className="list-disc list-inside space-y-1 ml-12">
                    <li>Modo libre mejorado: Explora la ciudad con una mayor fluidez, gracias a las mejoras en el sistema de balanceo y los nuevos gadgets que aumentan la agilidad.</li>
                    <li>Villanos icónicos: Enfréntate a enemigos legendarios como Kraven el Cazador y el icónico Venom, que prometen llevar la historia a un nivel más oscuro e intrigante.</li>
                    <li>Contenido Exclusivo para Reservas: Reserva tu licencia en GAMEXO y accede a trajes exclusivos, mejoras de gadgets y un paquete de puntos de habilidad para empezar la aventura con ventaja.</li>
                  </ul>
                </li>
              </ul>

              <Link to={'/dashboard/noticias/lanzamientos'} className="hover:underline">
                <h5 className="font-extrabold text-[14px]">Final Fantasy VII Rebirth (PS5) – 16 de noviembre</h5>
              </Link>
              <ul className="list-disc list-inside space-y-1 mb-12 font-normal text-[12px]">
                <li>La épica historia de Final Fantasy VII se expande con esta segunda parte del remake, continuando la trama en un vasto mundo abierto que te llevará a nuevas regiones fuera de Midgar. Este capítulo promete ahondar en la historia de Cloud, Tifa, Aerith y compañía, mientras se enfrentan a nuevos desafíos y desvelan oscuros secretos.</li>
                <li>Novedades del Juego:</li>
                <ul className="list-disc list-inside space-y-1 mb-12 ml-12">
                  <li>Exploración Ampliada: Viaja por entornos más grandes y detallados, desde los campos abiertos hasta ciudades icónicas del universo de Final Fantasy.</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[372px] h-[296px] bg-[#181818] rounded-3xl p-3">
            <h4 className="text-xl font-bold my-[7px]">Noticias</h4>
            <Link to={'/dashboard/noticias/detalles'} className="hover:underline">
              <span className="font-extrabold text-[15px]">Nueva Actualización de Cyberpunk 2077 – Phantom Liberty mejora el rendimiento y añade nuevas funciones.</span></Link>
            <p className="font-normal text-xs mt-2">¡Hola, gamers! Soy Yorch, administrador de GAMEXO, y les traigo buenas noticias para todos los que disfrutan de Cyberpunk 2077. CD Projekt Red acaba de lanzar una importante actualización para su última expansión, Phantom Liberty, que trae mejoras en el rendimiento y nuevas funciones para mejorar la experiencia de juego. Aquí te contamos los detalles:</p>

            <h5 className="text-xs font-bold">Mejoras en el Rendimiento</h5>
            <ul className="list-disc list-inside space-y-1 ml-3">
              <li className="font-normal text-xs">La actualización 2.1.1 ha optimizado el juego para</li>
            </ul>

          </div>
          <div className="w-[372px] h-[296px] bg-[#181818] rounded-3xl p-3">
            <h4 className="text-xl font-bold my-[7px]">Blog</h4>
            <Link to={'/dashboard/noticias/blog'} className="hover:underline">
              <span className="font-extrabold text-[15px]">¿Qué hace que un videojuego sea memorable? Un vistazo a los elementos que marcan la diferencia</span></Link>
            <p className="font-normal text-xs mt-2">Hola, comunidad gamer! Soy Yorch, administrador de GAMEXO, y hoy quiero hablarles sobre algo que todos hemos experimentado: ese sentimiento especial cuando jugamos un videojuego que realmente nos deja huella. ¿Qué hace que un juego sea inolvidable? ¿Por qué algunos títulos se convierten en clásicos mientras que otros caen en el olvido? Vamos a explorar algunos de los elementos clave que transforman un buen</p>
          </div>
        </div>
      </div>
    </div>
  )
}
