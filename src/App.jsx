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
import { useEffect } from "react";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";

const App = () => {
  useEffect(() => {
    document.title = "Morenno";
  }, []);

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <div className="relative z-0 bg-lightBg dark:bg-primary">
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
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

export default App;
