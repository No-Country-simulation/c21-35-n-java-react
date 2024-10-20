import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./routes/AppRoute"


export const GamexoApp = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}
