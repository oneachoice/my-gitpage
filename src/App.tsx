import styles from "./App.module.scss";

import Greeting from "./components/sections/greeting/Greeting";
import History from "./components/sections/history/History";
import Introduction from "./components/sections/introduction/Introduction";
import Navigation from "./components/navigation/Navigation";
import Skills from "./components/sections/skills/Skills";
import Footer from "./components/sections/footer/Footer";

import { createPortal } from "react-dom";
import { useMemo } from "react";

function App() {
  const navigationPortal = useMemo(() => {
    const navigation = document.getElementById("navigation");
    if (!navigation) return;
    return createPortal(<Navigation />, navigation);
  }, []);

  return (
    <>
      {navigationPortal}
      <main className={styles["page__main"]}>
        <Greeting />
        <Introduction />
        <History />
        <Skills />
        <Footer />
      </main>
    </>
  );
}

export default App;
