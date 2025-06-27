function ProjectList({ projects }) {
    return (
        <div className="project-container">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img
                        src={project.img}
                        alt={project.category}
                        className="project-img"
                    />
                </div>
            ))}
        </div>
    );
}

export default ProjectList;