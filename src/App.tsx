import {Routes, Route, BrowserRouter} from "react-router"
import './App.css'
import {Layout} from "./pages/Layout.tsx";
import {Home} from "./pages/Home.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Home />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
