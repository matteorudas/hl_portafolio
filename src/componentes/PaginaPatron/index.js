import { Outlet } from "react-router-dom";
import Banner from "../Banner";

export default function PaginaPatron({children}) {
    return (
        <main>
            <Banner/>
            <Outlet/>
            {children}
        </main>
    )
}