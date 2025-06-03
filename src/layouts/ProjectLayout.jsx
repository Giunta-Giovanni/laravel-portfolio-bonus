// Importo i componenti
import Header from "../components/Header";
import Footer from "../components/Footer";

// importo l'outlet dal react-router-dom
import { Outlet } from "react-router-dom";

export default function ProjectLayout() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    )

}