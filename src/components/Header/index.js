import { Link } from "react-router-dom";
import controle from "../../assets/controle.png";
import "./styles.scss";

const Header = () => {
  return (
    <nav className="containerHeader">
      <div className="boxLogo">
        <img className="logoController" src={controle}></img>
        <div className="boxNameLogo">
          <span>Iron</span>
          <span>Games</span>
        </div>
      </div>
      <div className="boxOptions">
        <Link to={"/"} target="_blank" rel="noreferrer">
          Home
        </Link>
        <Link to={"/"} target="_blank" rel="noreferrer">
          About
        </Link>
        <Link to={"/"} target="_blank" rel="noreferrer">
          Testimonials
        </Link>
        <Link to={"/"} target="_blank" rel="noreferrer">
          Contact
        </Link>
      </div>
      <div className="boxLogin">
        <Link to={"/"}>Sign in</Link>
        <Link className="register" to={"/"}>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Header;
