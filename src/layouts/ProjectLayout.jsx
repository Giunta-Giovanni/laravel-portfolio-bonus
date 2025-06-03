// Importo i componenti
import Header from "../components/Header";

// importo l'outlet dal react-router-dom
import { Outlet } from "react-router-dom";

export default function ProjectLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )

}