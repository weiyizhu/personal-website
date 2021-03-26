import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
