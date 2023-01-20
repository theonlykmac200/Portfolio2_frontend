import { Link}  from 'react-router-dom';

function Header (props) {
    // inline style for Nav tag
    const NavStyle = {
        display: 'flex',
        justifyContent: 'space-around',
         padding: "8px",
        width: "90%",
        margin: "0 auto",

    }

    return (
       <header>
            <h1> Kelly McDonald's Portfolio Page</h1>
            <nav className='navcss' style={NavStyle}>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/">Contact Kelly</Link>
            </nav>
       </header>
    );

}

export default Header;