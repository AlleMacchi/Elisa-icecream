import React from "react";
import "./About.css"
import SpaceNavbar from "../SpaceNavbar";

function About(){
    return(
        <>
        <SpaceNavbar />
        <section id="about">
        <div class="about-wrapper container">
            <div class="about-text">
            <h2>Suddenly ice cream</h2>
            <p>
                Elisa Gelato begins with humble beginnings, with her little ice cream
                cart in an open space.
                Probably, without the strong passion for ice cream, Elisa Gelato would
                never have seen the light. Starting a long tradition of ice cream makers.
            </p>
            <span><br></br></span>
            <p>
                For Elisa Gelato, customers are a continuous source of inspiration, and
                she loves to tell it through her recipes, paths of taste that she still
                baptizes today with amusing names, ice creams that become a journey
                through the streets of the city, to savor all the taste of Italian tradition.
            </p>
            </div>
            <div class="about-img"></div>
        </div>
        </section>
        </>
    )
}

export default About;