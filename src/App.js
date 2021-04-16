import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  // const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  // const handleResize = () => {
  //   setwindowWidth(window.innerWidth)
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
