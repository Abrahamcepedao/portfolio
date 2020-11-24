import React from 'react';
import Landing from "./Landing";
import Menu from "./Menu";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function index() {
    return (
        <>
           <Landing/>
           <Menu/>
           <Education/>
           <Projects/>
           <Skills/>
           <Contact/> 
        </>
    )
}

export default index;
