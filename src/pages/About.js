
import {useState, useEffect} from 'react';
import { useLoaderData } from 'react-router';

function About (props) {
    
    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        const response = await fetch(props.URL + "about" );
        const data = await response.json();
        setAbout(data);
 };

 useEffect(() => {getAboutData()}, []);

const loaded = () => (
    <div>
        <img src={about.headshot}/>
        <h2>{about.name}</h2>
        <h2>{about.email}</h2>
        <h2>{about.bio}</h2>
    </div>
 )
 return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
