import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const CardBox = (data, gameID) => {
  const [gameLoad, setGameLoad] = useState(true);
  console.log(data[gameID]);
  console.log(gameID);
  return (
    // {data[gameID].map((game, id) => (
    <div key={id} className="boxGames">
      <div className="pickGame">
        {gameLoad && <span className="loader"></span>}
        <img
          style={{ display: gameLoad ? "none" : "block" }}
          src={game.img}
          alt="game_img"
          onLoad={() => setGameLoad(false)}
        ></img>
      </div>
      <div className="boxDescription">
        <div className="boxPrice">
          <span>{game.price}</span>
        </div>
        <div className="boxDescriptionTable">
          <div className="boxDescriptionColumn">
            <span>Model</span>
            <span>{game.Model}</span>
          </div>
          <div className="boxDescriptionColumn">
            <span>Mark</span>
            <span>{game.Mark}</span>
          </div>
          <div className="boxDescriptionColumn">
            <span>HD/SSD</span>
            <span>{game.HD_SSD}</span>
          </div>
          <div className="boxDescriptionColumn">
            <span>Teraflops</span>
            <span>{game.Teraflops}</span>
          </div>
          <div className="boxDescriptionColumn">
            <span>Video</span>
            <span>{game.Video}</span>
          </div>
          <div className="boxDescriptionColumn">
            <span>Audio</span>
            <span>{game.Audio}</span>
          </div>
        </div>
        <Link className="buyNow">Buy Now</Link>
      </div>
    </div>
    // ))}
  );
};

export default CardBox;
