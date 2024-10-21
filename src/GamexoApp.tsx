import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./router/AppRoute"


export const GamexoApp = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}
