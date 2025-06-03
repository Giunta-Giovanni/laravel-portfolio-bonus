export default function ProjectCard({ project }) {
    const { client, description, start_date, end_date, state, title, type } = project;

    return (
        <div className="col">
            <div className="groot-card " style={{ width: '18rem' }}>
                <div className="groot-card-header">
                    <h5 className="card-title groot-title">{title}</h5>
                    <h6 className="card-subtitle mb-2">{client}</h6>
                </div>


                <div className="badge bg-success text-white my-2">{type?.name}</div>

                <p className="card-text">
                    <strong>Start:</strong> {start_date}<br />
                    <strong>End:</strong> {end_date}
                </p>

                <div className="badge bg-info text-dark my-2">{state}</div>

                <p className="groot-description mt-3">{description}</p>
            </div>
        </div>
    );
}