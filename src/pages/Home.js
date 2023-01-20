import { useState, useEffect } from "react";



function Home(props) {
  const [home, setHome] = useState(null);

  const getHomeData = async () => {
    const response = await fetch(props.URL + "home");
    const data = await response.json();
    setHome(data);
  };

  useEffect(() => {getHomeData()}, []);

  const loaded = () => (
    
      <div className="home">
        <h1>{home.name}</h1>
        <h2>{home.email}</h2>
        <h2>{home.phone}</h2>
        <a className="linkedin" href={home.linkedin}>LinkedIn</a>

      </div>
   
    );
  

  return home ? loaded() : <h1>Loading...</h1>;
}
  export default Home;