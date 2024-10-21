import { Route, Routes } from "react-router-dom"
import { GamexoPage } from "../pages/GamexoPage"
import { HomePage } from "../pages/HomePage"

export const GamexoRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard/' element={<GamexoPage />} />
        </Routes>
    )
}
