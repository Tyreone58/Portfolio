const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            image: '/images/project-one.jpg', // Ensure correct path
            description: 'A brief description of Project One.',
            deployedLink: 'https://link-to-deployed-project-one.com',
            githubLink: 'https://github.com/yourusername/project-one',
        },
        {
            id: 2,
            title: 'Project Two',
            image: '/images/project-two.jpg', // Ensure correct path
            description: 'A brief description of Project Two.',
            deployedLink: 'https://link-to-deployed-project-two.com',
            githubLink: 'https://github.com/yourusername/project-two',
        },
    ];

    return (
        <section id="portfolio">
            <h2>My Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={`Screenshot of ${project.title}`} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
