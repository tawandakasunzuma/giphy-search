import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
// PWA service worker registration
import { registerSW } from 'virtual:pwa-register'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// auto‑update the service worker in the background
registerSW({ onRegistered(r) { r && setInterval(() => r.update(), 60 * 60 * 1000) } })