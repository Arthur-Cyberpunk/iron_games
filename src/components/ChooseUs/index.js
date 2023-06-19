import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsCashCoin, BsCashStack } from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";
import videogames from "../../assets/videogames.png";
import "./styles.scss";

const ChooseUs = () => {
  return (
    <section className="containerChooseUs">
      <div className="chooseContainer">
        <img className="mainImg" src={videogames} alt="car_img" />
        <div className="text-container">
          <div className="textLeft">
            <h4>Why Choose Us</h4>
            <h2>Best valued deals you will ever find</h2>
            <p>
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <a href="#home">
              Find Details &nbsp;
              <AiOutlineDoubleRight className="rightArrow" />
            </a>
          </div>
          <div className="textRight">
            <div className="boxTextRight">
              <GiConsoleController className="coin-img" />
              <div className="boxText">
                <h4>Cross Country Drive</h4>
                <p>
                  Take your driving experience to the next level with our
                  top-notch video games for your adventures.
                </p>
              </div>
            </div>
            <div className="boxTextRight">
              {" "}
              <BsCashCoin className="coin-img" />
              <div className="boxText">
                <h4>All Inclusive Pricing</h4>
                <p>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="boxTextRight">
              {" "}
              <BsCashStack className="coin-img" />
              <div className="boxText">
                <h4>No Hidden Charges</h4>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
