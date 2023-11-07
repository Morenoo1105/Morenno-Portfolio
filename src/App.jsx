import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Morenno";
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
