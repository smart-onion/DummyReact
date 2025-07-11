import {Routes, Route, BrowserRouter} from "react-router"
import './App.css'
import {Layout} from "./pages/Layout.tsx";
import {Home} from "./pages/Home.tsx";
import {Category} from "./pages/Category.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/categories"} element={<Category />}>
                        <Route path={":category"}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

