import React from "react";
import Showcase from "../Showcase/Showcase";
import HomeFlavours from "../Flavours/Home-Flavours";
import Pleasure from "../Pleasure/Pleasure";
import Contact from "../Contact/Contact";
import SpaceNavbar from "../SpaceNavbar";

function Home(){
    return(
        <>
        <SpaceNavbar />
        <Showcase />
        <HomeFlavours />
        <Pleasure />
        <Contact /> 
        </>
    )
}

export default Home;