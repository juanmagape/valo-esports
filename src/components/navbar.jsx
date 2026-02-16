import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <Link to="/" className="navbarTitle">Valorant Esports</Link>
                <div className="navbarLinks">
                    <Link to="/teams">Teams</Link>
                    <Link to="/">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar