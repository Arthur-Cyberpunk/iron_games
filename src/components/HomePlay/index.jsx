import { Link } from "react-router-dom";
import controle from "../../assets/controle.png";
import "./styles.scss";

const HomePlay = () => {
  return (
    <section id="home" className="containerHome">
      <div className="boxInfo">
        <div className="textInfo">
          <h4>Plan your gameplay now</h4>
          <h1>
            Save <span>big</span> with our video game
          </h1>
          <p>
            Buy the video game of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div>
            <Link>Book Ride</Link>
            <Link>Learn More</Link>
          </div>
        </div>
        <img className="logoController" src={controle} alt="logo control"></img>
      </div>
    </section>
  );
};

export default HomePlay;
