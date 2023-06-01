import { Link } from "react-router-dom";
import controle from "../../assets/controle.png";
import "./styles.scss";

const Home = () => {
  return (
    <section className="containerHome">
      <div className="boxInfo">
        <div className="textInfo">
          <h4>Plan your trip now</h4>
          <h1>
            Save <span>big</span> with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div>
            <Link>Book Ride</Link>
            <Link>Learn More</Link>
          </div>
        </div>
        <img className="logoController" src={controle} alt=""></img>
      </div>
    </section>
  );
};

export default Home;
