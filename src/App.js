import BookGame from "./components/BookGame";
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
      <Testimonals />
    </>
  );
}

export default App;
