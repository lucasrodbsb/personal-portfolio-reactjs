// import logo from './logo.svg';
import React from 'react';
import Home from './pages/home/home';
import AboutMe from './pages/aboutme/aboutme';
import Techs from './pages/techs/techs'
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Footer from './pages/footer/footer';
import './App.css';


function App() {
  return (
    <>
      <Home/>
      <AboutMe/>
      <Techs/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
