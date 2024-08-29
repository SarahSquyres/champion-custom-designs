import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <>
      <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Contact</a>
          <a href="/#">Projects</a>
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