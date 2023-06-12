import { Link } from "react-router-dom";
import "./styles.scss";

const GameModels = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <h3>Video Game Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing video games to buy for your
              next gameplay
            </p>
          </div>
          <div>
            <div>
              <button>Xbox Series X</button>
              <button>Xbox Series S</button>
              <button>Playstation 5</button>
              <button>Xbox One X</button>
              <button>Playstation 4</button>
              <button>Nintendo Switch</button>
            </div>
            <div>
              <div>
                <img></img>
              </div>
              <div>
                <div>
                  <span></span>
                </div>
                <div>
                  <div>
                    <span>Model</span>
                    <span></span>
                  </div>
                  <div>
                    <span>Mark</span>
                    <span></span>
                  </div>
                  <div>
                    <span>HD/SSD</span>
                    <span></span>
                  </div>
                  <div>
                    <span>Teraflops</span>
                    <span></span>
                  </div>
                  <div>
                    <span>Video</span>
                    <span></span>
                  </div>
                  <div>
                    <span>Audio</span>
                    <span></span>
                  </div>
                </div>
                <Link>Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameModels;
