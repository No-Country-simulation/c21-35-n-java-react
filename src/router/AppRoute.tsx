import { Route, Routes } from "react-router-dom"
import { GamexoPage } from "../gamexo/dashboard/pages/GamexoPage";
import { HomePage } from "@/gamexo/home/pages/HomePage";
import { AuthRoutes } from "@/auth/routes/AuthRoutes";
import useAuthStore from "@/store/useAuthStore";

export const AppRoute = () => {


    const { status } = useAuthStore(state => state)
    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path="/dashboard/*" element={<GamexoPage />} />
                    : <Route path="/auth/*" element={<AuthRoutes />} />
            }
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}
