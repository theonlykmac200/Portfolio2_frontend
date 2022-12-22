import { useState, useEffect } from 'react';


function Projects(props) {

    const [projects, setProjects] = useState(null);

    const getProjectsData = async () => {
        const response = await fetch(`${props.URL}/projects/`);
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => getProjectsData(), []);

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h2>{project.name}</h2>
                <img src={project.image}/>
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live</button>
                </a>
            </div>

        ))   
}
return projects ? loaded() : <h1>Loading...</h1>;
}
export default Projects;