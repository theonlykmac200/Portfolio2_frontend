import { useState, useEffect } from 'react';


function Projects(props) {

    const [projects, setProjects] = useState(null);

    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {getProjectsData()}, []);

    const loaded = () => {
        return projects.map((project) => (
            <div className='projcard'>
                <div className='proj'>
                <h2>{project.name}</h2>
                <img className='logo' src={project.image}/>
                
                    <div>
                        <a href={project.git}>
                            <button>Github</button>
                        </a>
                        <a className='git' href={project.live}>
                            <button className='net'>Live</button>
                        </a>
                    </div>
                
                </div>

            </div>
            

        ))   
}
return projects ? loaded() : <h1>Loading...</h1>;
}
export default Projects;