import { Link } from "react-router-dom";
import "./styles.scss";

const CardBox = () => {
  return (
    <div className="boxGames">
      <div className="pickGame">
        <span className="loader"></span>
        <img></img>
      </div>
      <div className="boxDescription">
        <div className="boxPrice">
          <span>Price: $299</span>
        </div>
        <div className="boxDescriptionTable">
          <div className="boxDescriptionColumn">
            <span>Model</span>
            <span></span>
          </div>
          <div className="boxDescriptionColumn">
            <span>Mark</span>
            <span></span>
          </div>
          <div className="boxDescriptionColumn">
            <span>HD/SSD</span>
            <span></span>
          </div>
          <div className="boxDescriptionColumn">
            <span>Teraflops</span>
            <span></span>
          </div>
          <div className="boxDescriptionColumn">
            <span>Video</span>
            <span></span>
          </div>
          <div className="boxDescriptionColumn">
            <span>Audio</span>
            <span></span>
          </div>
        </div>
        <Link className="buyNow">Buy Now</Link>
      </div>
    </div>
  );
};

export default CardBox;
