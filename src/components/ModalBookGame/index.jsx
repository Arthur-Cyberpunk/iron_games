import { BsXLg } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import "./styles.scss";

const ModalBookGame = (props) => {

  const closeModal = () => {
    props.setModalOpen(false)
  }

  return (
    <section className="containerModal">
      <div className="modalTitle">
        <h2>Complete Reservation</h2>
        <BsXLg className="closeX" onClick={closeModal}/>
      </div>
      <div className="modalMessage">
        <h4>
          <FaInfoCircle />
          &nbsp;Upon completing this reservation enquiry, you will receive:
        </h4>
        <p>
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>
      <div className="modalInfoModel">
        <h5>
          <span>Game - </span>
          {props.nameGame}
        </h5>
        <img src={props.imgUrl}></img>
      </div>
      <div className="modalPersonInfo">
        <h4>Personal Information</h4>
        <form className="modalForm">
          <div className="infoForm2column">
            <span>
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name"></input>
              <p>This field is required.</p>
            </span>
            <span>
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name"></input>
              <p>This field is required.</p>
            </span>
            <span>
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number"></input>
              <p>This field is required.</p>
            </span>
            <span>
              <label>Age</label>
              <input type="number" placeholder="Enter your age"></input>
              <p>This field is required.</p>
            </span>
          </div>
          <div className="infoForm1column">
            <span>
              <label>Email</label>
              <input type="email" placeholder="Enter your email"></input>
              <p>This field is required.</p>
            </span>
            <span>
              <label>Address</label>
              <input type="text" placeholder="Enter your address"></input>
              <p>This field is required.</p>
            </span>
          </div>
          <div className="infoForm2column">
            <span>
              <label>City</label>
              <input type="text" placeholder="Enter your city"></input>
              <p>This field is required.</p>
            </span>
            <span>
              <label>Zip Code</label>
              <input type="text" placeholder="Enter your zip code"></input>
              <p>This field is required.</p>
            </span>
          </div>
          <span className="infoCheckbox">
            <div>
              <input type='checkbox'></input>
              <p>Please send me latest news and updates</p>
            </div>
            <div>
              <button>Buy Now</button>
            </div>
          </span>
        </form>
      </div>
    </section>
  );
};

export default ModalBookGame;
