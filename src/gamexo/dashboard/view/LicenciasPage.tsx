import { NavLink, Outlet } from 'react-router-dom';

export const LicenciasPage = () => {
  return (
    <div className="text-white flex flex-col m-auto my-5">
      <div className="flex">
        <div className="w-[584px] h-[600px] bg-[#181818] rounded-2xl">
          <Outlet />
        </div>
        <div className="flex flex-col gap-3 m-6">
          <NavLink to="agregar" className={({ isActive }) =>
            isActive ? `w-[258px] flex items-center justify-center h-[80px] bg-[#2ACE17] text-white rounded-xl font-bold text-xl` : `w-[258px] flex items-center justify-center h-[80px] bg-[#7E7E7E] text-white rounded-xl font-bold text-xl`}>
            Agregar licencias
          </NavLink>
          <NavLink to="administrar" className={({ isActive }) =>
            isActive ? `w-[258px] h-[80px] bg-[#2ACE17] flex items-center justify-center text-white rounded-xl font-bold text-xl` : `w-[258px] flex items-center justify-center h-[80px] bg-[#7E7E7E] text-white rounded-xl font-bold text-xl`}>
            Administrar licencias
          </NavLink>
          <NavLink to="historial" className={({ isActive }) =>
            isActive ? `w-[258px] h-[80px] bg-[#2ACE17] flex items-center justify-center text-white rounded-xl font-bold text-xl` : `w-[258px] flex items-center justify-center h-[80px] bg-[#7E7E7E] text-white rounded-xl font-bold text-xl`}>
            Historial de licencias
          </NavLink>
          <NavLink to="inventario" className={({ isActive }) =>
            isActive ? `w-[258px] h-[80px] bg-[#2ACE17] flex items-center justify-center text-white rounded-xl font-bold text-xl` : `w-[258px] flex items-center justify-center h-[80px] bg-[#7E7E7E] text-white rounded-xl font-bold text-xl`}>
            Inventario de licencias
          </NavLink>
        </div>
      </div>
    </div>
  );
};
