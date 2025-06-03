import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    function fetchProjects() {
        axios.get("http://127.0.0.1:8000/api/projects")
            .then(res => setProjects(res.data.data))
            .catch(err => console.log(err));
    }

    const renderProjects = () => {
        return projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ));
    };

    useEffect(fetchProjects, []);

    return (
        <>
            <div className="projects-page">
                <div className="container py-5">
                    <h1 className="groot-heading text-center mb-4">I am Groot... e questi sono i miei progetti 🌱</h1>
                    <section className="row justify-content-center g-4">
                        {renderProjects()}
                    </section>
                </div>
            </div>
        </>

    );
}