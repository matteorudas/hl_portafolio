import { Outlet } from "react-router-dom";
import Banner from "../Banner";

export default function PaginaPatron(){
    return (
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}