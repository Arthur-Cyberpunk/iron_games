import Banner from "./components/Banner";
import BookGame from "./components/BookGame";
import ChooseUs from "./components/ChooseUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import GameModels from "./components/GameModels";
import Header from "./components/Header";
import Home from "./components/Home";
import Plan from "./components/Plan";
import Testimonals from "./components/Testimonals";
import "./styles/globals.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
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

export default App;
