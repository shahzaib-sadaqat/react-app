import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Services from "./components/pages/services/Services";
import Portfolio from "./components/pages/portfolio/Portfolio";
import News from "./components/pages/news/News";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import FooterComp from "./components/footer/FooterComp";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <FooterComp />
    </>
  );
}

export default App;
