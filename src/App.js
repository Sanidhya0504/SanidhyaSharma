import "./App.css";
import Navigation from "./navigationbar.js";
import React from "react";
import Homebanner from "./components/homebanner";
import About from "./components/about";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Homebanner />

      <About />

      <Footer />
    </div>
  );
}

export default App;
