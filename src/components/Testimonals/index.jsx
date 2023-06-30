import { BsFillBookmarksFill } from "react-icons/bs";
import john from "../../assets/john.png";
import tony from "../../assets/tony.png";
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
              "We bought a video game from this website and had an amazing
              experience! The booking was easy and the values rates were very
              affordable. "
            </p>
            <div className="boxPerson">
              <div className="personId">
                <img src={john}></img>
                <div className="infoPerson">
                  <div className="personName">
                    <h4>John Shelby</h4>
                    <p>Birmingham</p>
                  </div>
                  <BsFillBookmarksFill className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="testimonal box-2">
            <p>
              "The video game was in great condition and made our gameplay even
              better. Highly recommend buy for this video game website and i don't need another!"
            </p>
            <div className="boxPerson">
              <div className="personId">
                <img src={tony}></img>
                <div className="infoPerson">
                  <div className="personName">
                    <h4>Tony Stark</h4>
                    <p>New York</p>
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
