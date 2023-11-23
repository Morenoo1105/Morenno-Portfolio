import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Tech,
  Works,
  Footer,
  Header,
  Intro,
} from "./components";
import { useEffect, useState } from "react";
import ActiveSectionContextProvider from "./context/active-section-context";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.title = "Morenno";
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ActiveSectionContextProvider>
          <Header />
          <Intro />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
          <Footer />
        </ActiveSectionContextProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
