import { BsFillBookmarksFill } from "react-icons/bs";
import controle from "../../assets/controle.png";
import "./styles.scss";

const Testimonals = () => {
  return (
    <section className="containerTestimonals">
      <div className="container">
        <div className="boxtitle">
          <h4>Reviewed by People</h4>
          <h2>Client's Testimonials</h2>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>

        <div className="boxTestimonals">
          <div className="testimonal">
            <p>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="boxPerson">
              <div className="personId">
                <img src={controle}></img>
                <div className="infoPerson">
                  <div className="personName">
                    <h4>Parry Hotter</h4>
                    <p>Belgrade</p>
                  </div>
                  <BsFillBookmarksFill className="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="testimonal">
            <p>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className="boxPerson">
              <div className="personId">
                <img src={controle}></img>
                <div className="infoPerson">
                  <div className="personName">
                    <h4>Ron Rizzly</h4>
                    <p>Novi Sad</p>
                  </div>
                  <BsFillBookmarksFill className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
