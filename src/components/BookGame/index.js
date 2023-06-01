import { GiRetroController } from "react-icons/gi";
import "./styles.scss";

const BookGame = () => {
  return (
    <section className="container">
      <div className="boxBook">
        <div className="boxContent">
          <div className="boxForm">
            <h2>Book a car</h2>
            <form className="formContent">
              <div className="boxLabel">
                <label>
                  <GiRetroController className="iconGame" />
                  &nbsp;Select Your Car Type
                </label>
                <select>
                  <option></option>
                  <option value="Audi A1 S-Line">Xbox Series X</option>
                  <option value="Audi A1 S-Line">Xbox Series S</option>
                  <option value="Audi A1 S-Line">Playstation 5</option>
                  <option value="Audi A1 S-Line">Xbox One X</option>
                  <option value="Audi A1 S-Line">Playstation 4</option>
                  <option value="Audi A1 S-Line">Nintendo Switch</option>
                </select>
              </div>
              <button></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookGame;
