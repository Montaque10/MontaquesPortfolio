import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";


const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
<About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App
