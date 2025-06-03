import { Link } from "react-router-dom";
import groot from "../assets/groot-coding.png"
export default function HomePage() {
    return (
        <>
            <div className="home-container">
                <h1 className="home-title">I am Groot! 🌱</h1>
                <p className="home-description">
                    Ok, lo ammetto... non dico solo "I am Groot". <br />
                    Mio padre Groot senior mi ha insegnato ad essere un artigiano Laravel e adesso vi mostro cosa ho imparato
                </p>
                <Link to="/projects" className="btn btn-success btn-lg mt-3">
                    Esplora i miei progetti
                </Link>
                <div className="home-image-container">
                    <img
                        src={groot}
                        alt="Baby Groot"
                        className="home-image"
                    />
                </div>
            </div>

        </>
    );

}