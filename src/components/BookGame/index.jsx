import { useState } from "react";
import { GiRetroController } from "react-icons/gi";
import mario from "../../assets/mario.png";
import nintendoswitch from "../../assets/nintendoswitch.png";
import playstation4pro from "../../assets/playstation4pro.png";
import playstation5 from "../../assets/playstation5.png";
import xboxonex from "../../assets/xboxonex.png";
import xboxseriess from "../../assets/xboxseriess.png";
import xboxseriesx from "../../assets/xboxseriesx.png";
import ModalBookGame from "../ModalBookGame";
import "./styles.scss";

const BookGame = () => {
  const [game, setGame] = useState("");
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  const handleGame = (event) => {
    setGame(event.target.value);
  };

  let imgUrl;
  let nameGame;
  switch (game) {
    case "xboxseriesx":
      imgUrl = xboxseriesx;
      nameGame = 'Xbox Series X';
      break;
    case "xboxseriess":
      imgUrl = xboxseriess;
      nameGame = 'Xbox Series S';
      break;
    case "playstation5":
      imgUrl = playstation5;
      nameGame = 'Playstation 5';
      break;
    case "xboxonex":
      imgUrl = xboxonex;
      nameGame = 'Xbox One X';
      break;
    case "playstation4pro":
      imgUrl = playstation4pro;
      nameGame = 'Playstation 4';
      break;
    case "nintendoswitch":
      imgUrl = nintendoswitch;
      nameGame = 'Nintendo Switch';
      break;
    default:
      imgUrl = mario;
      nameGame = ''
  }

  const openModal = (event) => {
    event.preventDefault();
    if (imgUrl === mario) {
      setError(true);
    } else {
      setError(false);
      setModalOpen(true)
    }
  };

  return (
    <>
    <section className="containerBookGame">
      <div className="boxForm">
        <h2>Book a game</h2>
        {error ? <p>Field required!</p> : <></>}
        <form className="formContent">
          <div className="boxLabel">
            <label>
              <GiRetroController className="iconGame" />
              &nbsp;Select Your Game Type
            </label>
            <select onChange={handleGame}>
              <option></option>
              <option value={"xboxseriesx"}>Xbox Series X</option>
              <option value={"xboxseriess"}>Xbox Series S</option>
              <option value={"playstation5"}>Playstation 5</option>
              <option value={"xboxonex"}>Xbox One X</option>
              <option value={"playstation4pro"}>Playstation 4 Pro</option>
              <option value={"nintendoswitch"}>Nintendo Switch</option>
            </select>
          </div>
          <button type="submit" onClick={openModal}>
            Search
          </button>
        </form>
      </div>
      <img className="gameImage" src={imgUrl} alt=""></img>
    </section>
    {modalOpen ? <ModalBookGame imgUrl={imgUrl} nameGame={nameGame}/> : <></> }
    
    </>
  );
};

export default BookGame;
