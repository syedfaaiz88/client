import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/themes.css'
import './styles/scrollbar.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { PROJECT_NAME } from './constants/env.constants.ts'

document.title = PROJECT_NAME || "Title";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
