import Banner from "../../components/Banner";
import BookGame from "../../components/BookGame";
import ChooseUs from "../../components/ChooseUs";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import GameModels from "../../components/GameModels";
import HomePlay from "../../components/HomePlay";
import Plan from "../../components/Plan";
import Testimonals from "../../components/Testimonals";

const Home = () => {
  return (
    <>
      <HomePlay />
      <BookGame />
      <Plan />
      <GameModels />
      <Banner />
      <ChooseUs />
      <Testimonals />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
