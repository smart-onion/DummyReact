import {Header} from "./components/header/Header.tsx"
import {Routes, Route, BrowserRouter} from "react-router"
import './App.css'

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Header />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
