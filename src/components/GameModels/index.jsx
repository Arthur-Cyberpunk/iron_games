import { useState } from "react";
import { GAME_DATA } from '../../mock/gameData.js';
import CardBox from '../CardBox';
import "./styles.scss";

const GameModels = () => {
  const [active, setActive] = useState("FirstCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <section className="containerSection">
      <div className="boxModels">
        <div className="boxTitle">
          <h3>Video Game Models</h3>
          <h2>Our rental fleet</h2>
          <p>
            Choose from a variety of our amazing video games to buy for your
            next gameplay
          </p>
        </div>
        <div className="boxGameContent">
          <div className="pokoto">
            <div className="pickGameModel">
              <button
                className={`${coloringButton("btn1")}`}
                onClick={() => {
                  setActive("FirstCar");
                  btnID("btn1");
                }}
              >
                Xbox Series X
              </button>
              <button
              className={`${coloringButton("btn2")}`}
              id="btn2"
              onClick={() => {
                setActive("SecondCar");
                btnID("btn2");
              }}
            >
              Xbox Series S
            </button>
            <button
              className={`${coloringButton("btn3")}`}
              id="btn3"
              onClick={() => {
                setActive("ThirdCar");
                btnID("btn3");
              }}
            >
              Playstation 5
            </button>
              <button
              className={`${coloringButton("btn4")}`}
              id="btn4"
              onClick={() => {
                setActive("FourthCar");
                btnID("btn4");
              }}
            >
              Xbox One X
            </button>
            <button
              className={`${coloringButton("btn5")}`}
              id="btn5"
              onClick={() => {
                setActive("FifthCar");
                btnID("btn5");
              }}
            >
              Playstation 4
            </button>
            <button
              className={`${coloringButton("btn6")}`}
              id="btn6"
              onClick={() => {
                setActive("SixthCar");
                btnID("btn6");
              }}
            >
              Nintendo Switch
            </button>
            </div>
          </div>

          {active === "FirstCar" && <CardBox data={GAME_DATA} gameID={0} />}
          {active === "SecondCar" && <CardBox data={GAME_DATA} gameID={1} />}
          {active === "ThirdCar" && <CardBox data={GAME_DATA} gameID={2} />}
          {active === "FourthCar" && <CardBox data={GAME_DATA} gameID={3} />}
          {active === "FifthCar" && <CardBox data={GAME_DATA} gameID={4} />}
          {active === "SixthCar" && <CardBox data={GAME_DATA} gameID={5} />}
        </div>
      </div>
    </section>
  );
};

export default GameModels;
