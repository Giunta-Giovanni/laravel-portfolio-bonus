import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function SingleProjectPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
            .then(res => setProject(res.data.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="container pt-5">
            <h1 className="groot-title mb-4 text-primary">Dettagli Progetto #{id}</h1>

            <div className="groot-card shadow-sm p-4 mb-4">
                <h2 className="groot-title groot-text-success mb-3">{project.title ?? "Caricamento..."}</h2>

                <p className="groot-text-muted">
                    Tipo di progetto: <span className="badge bg-success">{project.type?.name ?? "Nessun tipo"}</span>
                </p>

                <div className="mb-3">
                    {project.technologies === undefined ? (
                        <p className="groot-text-muted">Caricamento tecnologie...</p>
                    ) : project.technologies.length > 0 ? (
                        project.technologies.map(tech => (
                            <span key={tech.id} className="badge bg-primary mx-2">
                                {tech.name}
                            </span>
                        ))
                    ) : (
                        <p className="groot-text-muted">Nessuna tecnologia associata</p>
                    )}
                </div>

                <div className="mb-3">
                    <span className="badge bg-info text-dark me-2">{project.state}</span>
                    <span className="fw-semibold groot-text-muted">Cliente:</span> {project.client}
                </div>

                <div className="d-flex flex-wrap gap-3 mb-4 groot-text-muted">
                    <div>
                        <strong>Data di inizio:</strong>{" "}
                        <time dateTime={project.start_date}>{project.start_date}</time>
                    </div>
                    <div>
                        <strong>Data di fine:</strong>{" "}
                        <time dateTime={project.end_date}>{project.end_date}</time>
                    </div>
                </div>

                <h3 className="mb-3 groot-title">Descrizione progetto</h3>
                <p className="groot-text-muted">{project.description ?? "Nessuna descrizione disponibile."}</p>

                <button
                    className="btn text-light mt-3"
                    onClick={() => navigate(-1)}
                >
                    Torna indietro
                </button>
            </div>
        </div>
    );
}