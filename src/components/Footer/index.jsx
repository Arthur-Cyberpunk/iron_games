import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./styles.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContent">
          <ul className="footerContent1">
            <li>
              <span>Iron</span> Games
            </li>
            <li>
              We offers a big range of video games. We
              have the perfect video game to meet your needs.
            </li>
            <li>
              <a href="tel:123456789">
                <BsFillTelephoneFill className="contactIcon" /> (123) -456-789
              </a>
            </li>

            <li>
              <a
                href="mailto: 
                  irongames@gmail.com"
              >
                <AiFillMail className="contactIcon" />
                irongames@gmail.com
              </a>
            </li>

            <li>
              <a
                style={{ fontSize: "14px" }}
                target="_blank"
                rel="noreferrer"
                href="https://irongames.com/"
              >
                Design by Irongames
              </a>
            </li>
          </ul>

          <ul className="footerContent2">
            <li>Company</li>
            <li>
              <a href="#home">Florianópolis</a>
            </li>
            <li>
              <a href="#home">Careers</a>
            </li>
            <li>
              <a href="#home">Mobile</a>
            </li>
            <li>
              <a href="#home">Blog</a>
            </li>
            <li>
              <a href="#home">How we work</a>
            </li>
          </ul>

          <ul className="footerContent2">
            <li>Working Hours</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>

          <ul className="footerContent2">
            <li>Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news & updates.</p>
            </li>
            <li>
              <input type="email" placeholder="Enter Email Address"></input>
            </li>
            <li>
              <button className="submitEmail">Submit</button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
