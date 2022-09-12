import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="body-shell">
      <div className={`card ${darkMode ? "card--dark" : ""}`}>
        <Info darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <About darkMode={darkMode} />
          <Interests darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
