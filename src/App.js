import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
