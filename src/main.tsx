import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GamexoApp } from './GamexoApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GamexoApp />
  </StrictMode>,
)
