import { GiGameConsole, GiGamepad, GiGamepadCross } from "react-icons/gi";
import "./styles.scss";

const About = () => {
  return (
    <>
      <section className="aboutPage">
        <div className="aboutMain">
          <div className="aboutMainText">
            <h3>About Company</h3>
            <h2>You start the video game and your adventure begins</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="aboutMainTextIcons">
              <div className="aboutMainTextIconsBox">
                <GiGameConsole className="iconAbout" />
                <span>
                  <h4>6</h4>
                  <p>Video Game Types</p>
                </span>
              </div>
              <div className="aboutMainTextIconsBox">
                <GiGamepadCross className="iconAbout" />
                <span>
                  <h4>44</h4>
                  <p>Games Outlets</p>
                </span>
              </div>
              <div className="aboutMainTextIconsBox">
                <GiGamepad className="iconAbout" />
                <span>
                  <h4>30</h4>
                  <p>Repair Shop</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
