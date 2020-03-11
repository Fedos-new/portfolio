import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import Slogan from "./Slogan";
import Contacts from "./Contacts";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
    <div className="protfolio"></div>
    <Header/>
    <Main/>
    <Skills/>
    <Projects/>
    <Slogan/>
    <Contacts/>
    <Footer/>
    </div>
  );
}

export default App;
