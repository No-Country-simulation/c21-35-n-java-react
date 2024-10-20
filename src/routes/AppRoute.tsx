import {  Route, Routes } from "react-router-dom"
// import { GamexoApp } from "../GamexoApp";
import { GamexoPage } from "../gamexo/pages/GamexoPage";

export const AppRoute = () => {
    // const status = true;
    // if (status !== true) {
    //     return <h2>No autenticado</h2>
    // }
    return (
        <Routes>
            <Route path="/*" element={<GamexoPage />} />
            {/* {
                (status === true)
                    ? <Route path="/*" element={<GamexoApp />} />
                    : <Route path="/*" element={<GamexoApp />} />

            }
            <Route path="/*" element={<Navigate to='/*' />} /> */}
        </Routes>
    )
}
