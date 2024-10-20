import { Navigate, Route, Routes } from "react-router-dom"

export const GamexoRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<GamexoRoute />} />
            <Route path='/*' element={<Navigate to='/' />} />

        </Routes>
    )
}
