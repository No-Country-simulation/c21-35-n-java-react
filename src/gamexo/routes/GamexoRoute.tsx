import { Route, Routes } from "react-router-dom"
import { GamexoPage } from "../dashboard/pages/GamexoPage"

export const GamexoRoute = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<GamexoPage />} />
        </Routes>
    )
}
