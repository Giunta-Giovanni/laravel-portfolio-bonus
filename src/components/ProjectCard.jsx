import { Link } from "react-router-dom";
export default function ProjectCard({ project }) {
    const { id, client, start_date, end_date, state, title, type } = project;

    return (
        <Link to={`/projects/${id}`} className="col-12 col-md-6 col-lg-4">
            <div className="groot-card " >
                <div className="groot-card-header">
                    <h5 className="card-title groot-title">{title}</h5>
                    <h6 className="card-subtitle mb-2">{client}</h6>
                </div>


                <div className="groot-badge">
                    <div className=" badge bg-success ">{type?.name}</div>
                    <p className="badge">{state}</p>
                </div>


                <p className="card-text">
                    <strong>Start:</strong> {start_date}<br />
                    <strong>End:</strong> {end_date}
                </p>

            </div>
        </Link >

    );
}