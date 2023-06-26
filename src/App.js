import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Header from "./components/Header";
import "./styles/globals.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
