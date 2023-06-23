import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import controle from "../../assets/controle.png";
import "./styles.scss";

const Header = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="containerHeader">
      <div className="boxLogo">
        <img className="logoController" src={controle} alt=""></img>
        <div className="boxNameLogo">
          <span>Iron</span>
          <span>Games</span>
        </div>
      </div>
      <div className="boxOptions">
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/testimonials">
          Testimonials
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </div>
      <div className="boxLogin">
        <Link to="/">Sign in</Link>
        <Link className="register" to="/">
          Register
        </Link>
      </div>
      <div className="iconHamburguer" onClick={openNav}>
        <CgMenuRightAlt />
      </div>
      <div className={`menu ${nav ? "open-nav" : ""}`}>
        <div className="iconX" onClick={openNav}>
          <BsXLg />
        </div>
        <ul>
          <li>
            <Link to="/" target="_blank" rel="noreferrer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" rel="noreferrer">
              About
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" rel="noreferrer">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" rel="noreferrer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
