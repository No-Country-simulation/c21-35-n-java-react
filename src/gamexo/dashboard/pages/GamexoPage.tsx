import { Route, Routes } from "react-router-dom"
import { GamexoLayout } from "../layout/GamexoLayout"
import { AjustesPage, BlogDetallePage, CarritoPage, DashboardPage, DetallesNoticiasPage, FavoritosPage, GameStorePage, JuegosDetallePage, JuegosPage, LanzamientosPage, NoticiasPage, ProximamentePage } from "../view"


export const GamexoPage = () => {
  return (
    <GamexoLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/game-store" element={<GameStorePage />} />
        <Route path="/juegos" element={<JuegosPage />} />
        <Route path="juegos/:id" element={<JuegosDetallePage />} />
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route path="/proximamente" element={<ProximamentePage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/noticias/lanzamientos" element={<LanzamientosPage />} />
        <Route path="/noticias/detalles" element={<DetallesNoticiasPage />} />
        <Route path="/noticias/blog" element={<BlogDetallePage />} />
        <Route path="/ajustes" element={<AjustesPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>
    </GamexoLayout>
  )
}
