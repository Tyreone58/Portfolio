const Portfolio = () => {
    const projects = [
        {
            title: 'Project One',
            image: 'path_to_project_one_image.jpg',
            description: 'A brief description of Project One.',
            deployedLink: 'https://link-to-deployed-project-one.com',
            githubLink: 'https://github.com/yourusername/project-one',
        },
        {
            title: 'Project Two',
            image: 'path_to_project_two_image.jpg',
            description: 'A brief description of Project Two.',
            deployedLink: 'https://link-to-deployed-project-two.com',
            githubLink: 'https://github.com/yourusername/project-two',
        },
        // Add more projects as needed
    ];

    return (
        <section id="portfolio">
            <h2>My Projects</h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Live</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;