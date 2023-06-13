import CardBox from "../CardBox";
import "./styles.scss";

const GameModels = () => {
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
          <div className="pickGameModel">
            <button>Xbox Series X</button>
            <button>Xbox Series S</button>
            <button>Playstation 5</button>
            <button>Xbox One X</button>
            <button>Playstation 4</button>
            <button>Nintendo Switch</button>
          </div>

          <CardBox />
        </div>
      </div>
    </section>
  );
};

export default GameModels;
