import { Route, Routes } from "react-router-dom"
import { GamexoLayout } from "../layout/GamexoLayout"
import { AjustesPage, DashboardPage, FavoritosPage, GameStorePage, NoticiasPage, ProximamentePage } from "."


export const GamexoPage = () => {
  return (
    <GamexoLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/game-store" element={<GameStorePage />} />
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route path="/proximamente" element={<ProximamentePage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/ajustes" element={<AjustesPage />} />
      </Routes>
    </GamexoLayout>
  )
}
