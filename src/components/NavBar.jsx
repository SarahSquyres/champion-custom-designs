import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <>
      <header>
        <h3>Champion Custom Designs</h3>
        <nav ref={navRef}>
          <Link to="/" onClick={showNavbar}>Home</Link>
          <Link to="/Contact" onClick={showNavbar}>Contact</Link>
          <Link to="/Projects" onClick={showNavbar}>Projects</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>

  );
}