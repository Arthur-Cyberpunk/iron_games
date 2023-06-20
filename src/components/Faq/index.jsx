import { useState } from "react";
import "./styles.scss";

const Faq = () => {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "activeAnswer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "activeQuestion" : "";
  };

  return (
    <>
      <section className="containerFaq">
        <div className="container">
          <div className="faqContent">
            <div className="boxTitle">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Video Game Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="allQuestions">
              <div className="boxFaq">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`question  ${getClassQuestion("q1")}`}
                >
                  <p>1. What is special about comparing video game deals?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`answer ${getClassAnswer("q1")}`}
                >
                  Comparing video game deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better video games models. You can find video game
                  deals by researching online and comparing prices from
                  different rental companies.
                </div>
              </div>
              <div className="boxFaq">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`question ${getClassQuestion("q2")}`}
                >
                  <p>2. How do I find the video game deals?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`answer ${getClassAnswer("q2")}`}
                >
                  You can find video game deals by researching online and
                  comparing prices from different game store companies. Websites
                  allow you to compare prices. It is also recommended to sign up 
                  for email newsletters and follow game store companies on social 
                  media to be informed of any special deals or promotions.
                </div>
              </div>
              <div className="boxFaq">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`question ${getClassQuestion("q3")}`}
                >
                  <p>3. How do I find such low video game prices?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`answer ${getClassAnswer("q3")}`}
                >
                  Book in advance: Booking your video game ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites to compare prices from multiple game 
                  store companies. Look for discount codes and coupons: 
                  Search for discount codes and coupons that you can use to 
                  lower the price.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
