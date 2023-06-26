import { GiGameConsole, GiGamepad, GiGamepadCross } from "react-icons/gi";
import conversation from "../../assets/conversation.png";
import Footer from "../../components/Footer";
import "./About.scss";

const Home = () => {
  return (
    <>
      <section className="aboutPage">
        <div className="container">
          <div className="aboutMain">
            <img
              className="aboutMainImg"
              src={conversation}
              alt="car-renting"
            />
            <div className="aboutMainText">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="aboutMainTextIcons">
                <div className="aboutMainTextIconsBox">
                  <GiGameConsole className="iconAbout"/>
                  <span>
                    <h4>6</h4>
                    <p>Video Game Types</p>
                  </span>
                </div>
                <div className="aboutMainTextIconsBox">
                  <GiGamepadCross className="iconAbout"/>
                  <span>
                    <h4>44</h4>
                    <p>Games Outlets</p>
                  </span>
                </div>
                <div className="aboutMainTextIconsBox">
                  <GiGamepad className="iconAbout"/>
                  <span>
                    <h4>30</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <PlanTrip /> */}
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
