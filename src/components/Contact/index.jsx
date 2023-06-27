import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill, BsPinMap } from "react-icons/bs";
import "./styles.scss";

const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <div className="container">
          <div className="contactDiv">
            <div className="contactDivText">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <BsFillTelephoneFill className="contactIcon" />
                &nbsp; (123) 456-7869
              </a>
              <a href="/">
                <AiFillMail className="contactIcon" />
                &nbsp; irongames@gmail.com
              </a>
              <a href="/">
                <BsPinMap className="contactIcon" />
                &nbsp; Florianópolis, Brazil
              </a>
            </div>
            <div className="contactDivForm">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='"Peter Parker"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
