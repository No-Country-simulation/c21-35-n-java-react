import { Route, Routes } from "react-router-dom"
import { GamexoLayout } from "../layout/GamexoLayout"
import { AjustesPage, DashboardPage, FavoritosPage, GameStorePage, NoticiasPage, ProximamentePage } from "."


export const GamexoPage = () => {
  return (
    <GamexoLayout>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/game-store" element={<GameStorePage />} />
        <Route path="/dashboard/favoritos" element={<FavoritosPage />} />
        <Route path="/dashboard/proximamente" element={<ProximamentePage />} />
        <Route path="/dashboard/noticias" element={<NoticiasPage />} />
        <Route path="/dashboard/ajustes" element={<AjustesPage />} />
      </Routes>
    </GamexoLayout>
  )
}
