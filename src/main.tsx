import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeProvider } from "./components/ui/color-mode"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import './index.css'
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider value={defaultSystem}>
          <ColorModeProvider>
            <App />
          </ColorModeProvider>
      </ChakraProvider>
  </StrictMode>,
)
