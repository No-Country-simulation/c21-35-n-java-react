import { GameStoreView } from "../components"

export const GameStorePage = () => {
  return (
    <div className="text-white">
      <GameStoreView title="LOS FAVORITOS DE SIEMPRE" imagen1="minecraft" imagen2="age_of_mitology" imagen3="among_us" imagen4="valheim" subtitle1="MINECRAFT" subtitle2="AGE OF MIT..." subtitle3="AMONG US" subtitle4="VALHEIM" />
      <GameStoreView title="SELECCION DE LA SEMANA" imagen1="final_fantasy" imagen2="halo" imagen3="persona_5" imagen4="call_of_duty" subtitle1="FINAL FANTASY" subtitle2="HALO" subtitle3="PERSONA 5" subtitle4="CALL OF DUTY" />
      <GameStoreView title="" imagen1="resident_evil_1" imagen2="resident_evil_2" imagen3="resident_evil_3" imagen4="halo_4" yesArrow={false} subtitle1="RESIDENT EVIL 1" subtitle2="RESIDENT EVIL 2" subtitle3="RESIDENT EVIL 3" subtitle4="HALO 4" />
      <GameStoreView title="AVENTURA" imagen1="final_fantasy" imagen2="halo" imagen3="persona_5" imagen4="call_of_duty" subtitle1="FINAL FANTASY" subtitle2="HALO" subtitle3="PERSONA 5" subtitle4="CALL OF DUTY" />
      <GameStoreView title="" imagen1="resident_evil_1" imagen2="resident_evil_2" imagen3="resident_evil_3" imagen4="halo_4" yesArrow={false} subtitle1="RESIDENT EVIL 1" subtitle2="RESIDENT EVIL 2" subtitle3="RESIDENT EVIL 3" subtitle4="HALO 4" />
      <GameStoreView title="ESTRATEGIA" imagen1="final_fantasy" imagen2="halo" imagen3="persona_5" imagen4="call_of_duty" subtitle1="FINAL FANTASY" subtitle2="HALO" subtitle3="PERSONA 5" subtitle4="CALL OF DUTY" />
      <GameStoreView title="" imagen1="resident_evil_1" imagen2="resident_evil_2" imagen3="resident_evil_3" imagen4="halo_4" yesArrow={false} subtitle1="RESIDENT EVIL 1" subtitle2="RESIDENT EVIL 2" subtitle3="RESIDENT EVIL 3" subtitle4="HALO 4" />
    </div>
  )
}
