import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="body-shell">
      <div className="card">
        <Info toggleDarkMode={toggleDarkMode} />
        <main>
          <About />
          <Interests />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
