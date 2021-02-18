import React from 'react';
import './App.scss';
import Header from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {RemoteWork} from './remoteWork/RemoteWork';
import {AboutMe} from "./about/AboutMe";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contacts />
            <Footer/>
        </div>
    );
}

export default App;
