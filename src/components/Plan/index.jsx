import controlps from "../../assets/controlps.png";
import selectgame from "../../assets/selectgame.png";
import support from "../../assets/support.png";
import "./styles.scss";

const Plan = () => {
  return (
    <section className="sectionPlan">
      <div className="container">
        <div className="boxPlanPlay">
          <div className="boxTitle">
            <h3>Plan your next gameplay</h3>
            <h2>Quick & easy Video Game</h2>
          </div>
          <div className="containerConcernsBoxes">
            <div className="boxConcerns">
              <img src={selectgame}></img>
              <h3>Select Game</h3>
              <p>
                We offers a big range of video games for all your playing needs.
                We have the perfect video game to meet your needs
              </p>
            </div>
            <div className="boxConcerns">
              <img src={support}></img>
              <h3>Contact Operator</h3>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="boxConcerns">
              <img src={controlps}></img>
              <h3>Let's Play</h3>
              <p>
                Whether you need a new perfect Game, we've got you covered with
                our wide range of video games
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
