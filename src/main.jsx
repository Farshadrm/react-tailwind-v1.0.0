import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "@fontsource/syne/400.css"; // وزن 400
import "@fontsource/syne/500.css"; // وزن 500
import "@fontsource/syne/700.css"; // وزن 700

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
