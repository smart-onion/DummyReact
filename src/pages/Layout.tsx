import {Header} from "../components/header/Header.tsx";
import {Outlet} from "react-router";

export function Layout(){
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}