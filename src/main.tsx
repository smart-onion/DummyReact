import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeProvider } from "./components/ui/color-mode"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import './index.css'
import App from './App.tsx'
import {store} from "./redux/app/store.ts"
import {Provider} from "react-redux"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
          <ColorModeProvider>
            <App />
          </ColorModeProvider>
      </ChakraProvider>
      </Provider>
  </StrictMode>,
)
