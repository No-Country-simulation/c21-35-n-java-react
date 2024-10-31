import { Navigate, Route, Routes } from "react-router-dom";
import { GamexoLayout } from "../layout/GamexoLayout";
import {
  Admin, AjustesPage, BlogDetallePage, CarritoPage, DashboardPage, DetallesNoticiasPage,
  FavoritosPage, GameStorePage, JuegosDetallePage, JuegosPage, LanzamientosPage,
  LicenciasPage, NoticiasPage, PagosPage, ProximamentePage, VentasPage,
  AdministrarLicencias, AgregarLicencias, HistorialLicencias, InventarioLicencias
} from "../view";

export const GamexoPage = () => {
  return (
    <GamexoLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/licencias" element={<LicenciasPage />}>
          <Route index element={<Navigate to="agregar" />} />
          <Route path="agregar" element={<AgregarLicencias />} />
          <Route path="administrar" element={<AdministrarLicencias />} />
          <Route path="historial" element={<HistorialLicencias />} />
          <Route path="inventario" element={<InventarioLicencias />} />
        </Route>
        <Route path="/ventas" element={<VentasPage />} />
        <Route path="/pagos" element={<PagosPage />} />
        <Route path="/game-store" element={<GameStorePage />} />
        <Route path="/juegos" element={<JuegosPage />} />
        <Route path="juegos/:id" element={<JuegosDetallePage />} />
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route path="/proximamente" element={<ProximamentePage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/noticias/lanzamientos" element={<LanzamientosPage />} />
        <Route path="/noticias/detalles" element={<DetallesNoticiasPage />} />
        <Route path="/noticias/blog" element={<BlogDetallePage />} />
        <Route path="/ajustes" element={<AjustesPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>
    </GamexoLayout>
  );
};
