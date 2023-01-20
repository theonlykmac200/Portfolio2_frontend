
import './App.css';
// import components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const URL = "https://portfolio2theonlykmac.herokuapp.com/";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
