import { useParams } from "react-router-dom";

interface InformacionDeCompra {
    fecha_de_compra: string;
    hora_de_compra: string;
    precio: string;
    descuento_aplicado: boolean;
    metodo_de_pago: string;
    id_de_compra: string;
    correo_electronico_asociado: string;
}

interface Juego {
    id: string;
    titulo: string;
    descripcion: string;
    informacion_de_compra: InformacionDeCompra;
    imagen: string;
    informacion_del_juego: string;
    estado_licencia_activa: string;
}

const juegosDetalles: Juego[] = [
    {
        id: "minecraft",
        titulo: "Minecraft",
        descripcion: "Minecraft es un juego de construcción y aventura en un mundo abierto de bloques, donde los jugadores pueden explorar, crear estructuras, recolectar recursos y enfrentar criaturas en modos de supervivencia o creativo.",
        informacion_de_compra: {
            fecha_de_compra: "12-09-2024",
            hora_de_compra: "21:45 hrs",
            precio: "$859.99 pesos",
            descuento_aplicado: false,
            metodo_de_pago: "Tarjeta de debito",
            id_de_compra: "098764423",
            correo_electronico_asociado: "luisikingrodri28@gmail.com",
        },
        imagen: "../../images/dashboard/image-1-gamestore.png",
        informacion_del_juego: "Minecraft es un juego de tipo sandbox que permite a los jugadores crear, explorar y sobrevivir en un mundo generado aleatoriamente compuesto por bloques tridimensionales. Lanzado en 2011, ha evolucionado hasta convertirse en uno de los videojuegos más vendidos de todos los tiempos, con millones de jugadores en diversas plataformas, incluyendo PC, consolas y dispositivos móviles.",
        estado_licencia_activa: "ACTIVA",
    },
    {
        id: "halo-4",
        titulo: "Halo 4",
        descripcion: "Halo 4 es un juego de disparos en primera persona desarrollado por 343 Industries y publicado por Microsoft Studios. Es la cuarta entrega principal de la saga Halo, en la que los jugadores controlan al icónico Jefe Maestro, un supersoldado mejorado cibernéticamente. En esta entrega, el Jefe Maestro debe enfrentarse a una nueva amenaza alienígena conocida como los Prometeos mientras continúa su lucha contra los Covenant. Halo 4 ofrece una campaña épica, un multijugador innovador y la continuación de la historia de ciencia ficción de Halo.",
        informacion_de_compra: {
            fecha_de_compra: "24-05-2024",
            hora_de_compra: "21:45 hrs",
            precio: "$759.59 pesos",
            descuento_aplicado: false,
            metodo_de_pago: "Tarjeta de debito",
            id_de_compra: "098734323",
            correo_electronico_asociado: "luisikingrodri28@gmail.com",
        },
        imagen: "../../images/dashboard/image-2-gamestore.png",
        informacion_del_juego: "En Halo 4, el jugador asume el control del Jefe Maestro (Master Chief), un supersoldado cibernéticamente mejorado, cuatro años después de los eventos de Halo 3. El Jefe Maestro y su compañera de inteligencia artificial Cortana son despertados de un estado de criosueño a bordo de la nave Forward Unto Dawn para enfrentarse a una nueva amenaza alienígena conocida como los Prometeos, una facción del antiguo ejército Forerunner.",
        estado_licencia_activa: "ACTIVA",
    },
    {
        id: "valheim",
        titulo: "Valheim",
        descripcion: "Valheim es un juego de supervivencia y aventura en mundo abierto desarrollado por Iron Gate Studio. Inspirado en la mitología nórdica, los jugadores son guerreros vikingos caídos, enviados al purgatorio para demostrar su valía. En este vasto mundo generado de forma procedimental, los jugadores deben recolectar recursos, construir asentamientos, forjar armas y armaduras, y enfrentarse a poderosos jefes inspirados en figuras míticas. Valheim destaca por su estética retro pero inmersiva, su mecánica profunda de construcción y combate, y su sistema cooperativo que permite a varios jugadores explorar y sobrevivir juntos",
        informacion_de_compra: {
            fecha_de_compra: "08-05-2024",
            hora_de_compra: "21:45 hrs",
            precio: "$599.59 pesos",
            descuento_aplicado: false,
            metodo_de_pago: "Tarjeta de debito",
            id_de_compra: "098764423",
            correo_electronico_asociado: "luisikingrodri28@gmail.com",
        },
        imagen: "../../images/dashboard/image-3-gamestore.png",
        informacion_del_juego: "Valheim está ambientado en un mundo inspirado en la mitología nórdica, donde los jugadores asumen el papel de un guerrero vikingo que ha fallecido y es transportado al décimo mundo, Valheim, para cumplir una misión divina. Este purgatorio es un vasto mundo abierto generado de manera procedimental, en el cual los jugadores deben explorar, recolectar recursos y derrotar a los poderosos jefes que gobiernan diferentes biomas.",
        estado_licencia_activa: "ACTIVA",
    },
];


export const JuegosDetallePage = () => {
    const { id } = useParams<{ id: string }>();

    // Verifica que id no sea undefined y busca el juego correspondiente
    const juego = juegosDetalles.find(j => j.id === id);

    if (!juego) {
        return <div>El juego que buscas no existe.</div>;
    }

    // Renderizar los detalles del juego
    return (
        <div className="text-white">
            <div className="flex flex-col p-5 gap-5">
                <div className="flex gap-5">
                    <div className="w-[345px] bg-[#181818] rounded-3xl min-h-screen">
                        <img src={juego.imagen} alt={juego.titulo} className="w-[90%] m-auto h-[300px] object-contain" />
                        <div className="mx-[22px] mb-[15px]">
                            <h1 className="font-bold text-xl uppercase">{juego.titulo}</h1>
                            <p className="font-normal text-[15px]">{juego.descripcion}</p>
                        </div>
                    </div>
                    <div className=" w-[520px] flex flex-col gap-5">
                        <div className="bg-[#181818] rounded-3xl w-full h-[205px]">
                            <div className="ml-[14px] mt-[16px]">
                                <h2 className="font-bold text-xl">Información de Compra</h2>
                                <ul>
                                    <li className="font-bold text-[15px]">Fecha de compra: <span className="font-normal text-[15px]">{juego.informacion_de_compra.fecha_de_compra}</span></li>
                                    <li className="font-bold text-[15px]">Hora de compra: <span className="font-normal text-[15px]">{juego.informacion_de_compra.hora_de_compra}</span></li>
                                    <li className="font-bold text-[15px]">Precio: <span className="font-normal text-[15px]">{juego.informacion_de_compra.precio}</span></li>
                                    <li className="font-bold text-[15px]">Método de pago: <span className="font-normal text-[15px]">{juego.informacion_de_compra.metodo_de_pago}</span></li>
                                    <li className="font-bold text-[15px]">ID de compra: <span className="font-normal text-[15px]">{juego.informacion_de_compra.id_de_compra}</span></li>
                                    <li className="font-bold text-[15px]">Correo electrónico asociado: <span className="font-normal text-[15px]">{juego.informacion_de_compra.correo_electronico_asociado}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-[#181818] rounded-3xl w-full h-[215px]">
                            <div className="ml-[23px] mt-[16px] mr-[37px] mb-[12px]">
                                <h2 className="font-bold text-xl">Información del Juego</h2>
                                <p className="font-normal text-[15px]">{juego.informacion_del_juego}</p>
                            </div>
                        </div>
                        <div className="w-full h-[97px] bg-[#181818] rounded-3xl flex flex-col justify-center p-5">
                            <p className="font-bold text-xl">Estado de licencia</p>
                            <span className="font-extrabold text-xl text-[#2ACE17]">{juego.estado_licencia_activa}</span>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};