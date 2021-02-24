import React, {useState} from 'react';
import './App.scss';
import Header from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {RemoteWork} from './remoteWork/RemoteWork';
import {AboutMe} from "./about/AboutMe";
import {Loader} from "./common/components/Loader/Loader";


function App() {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contacts setIsLoading={setIsLoading} />
            <Footer/>
            <Loader active={isLoading}/>
        </div>
    );
}

export default App;
