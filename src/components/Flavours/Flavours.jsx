import React from "react";
import "./Flavours.css";
import SpaceNavbar from "../SpaceNavbar";
import Flavour from "./Flavour";

function Flavours(){
    return(
        <>
        <SpaceNavbar />
        <h2 class="flavours-heading">Classic ice cream flavours</h2>
        <div className="flavours-container container">
        
            <Flavour img={require('./Fiordilatte.jpeg')} alt="Fiordilatte" name="Fior di panna" />
            <Flavour img={require('./Crema.jpeg')} alt="Crema" name="Crema" />
            <Flavour img={require('./Stracciatella.jpeg')} alt="Stracciatella" name="Stracciatella" />
            <Flavour img={require('./Pistacchio.jpeg')} alt="Pistacchio" name="Pistacchio" />
            <Flavour img={require('./Nocciola.jpeg')} alt="Nocciola" name="Nocciola" />
            <Flavour img={require('./Bacio.jpeg')} alt="Bacio" name="Bacio" />
            <Flavour img={require('./Caffè.jpeg')} alt="Caffè" name="Caffè" />
            <Flavour img={require('./Cassata-Siciliana.jpeg')} alt="Cassata-Siciliana" name="Cassata Siciliana" />
            <Flavour img={require('./Malaga.jpeg')} alt="Malaga" name="Malaga" />
            <Flavour img={require('./Marron-Glacè.jpeg')} alt="Marron-Glacè" name="Marron Glacè" />
            <Flavour img={require('./panna-montata.jpeg')} alt="panna-montata" name="Panna Montata" />

        </div>
        <h2 class="flavours-heading">Ice cream fruit flavors</h2>
        <div className="flavours-container container">
        
            <Flavour img={require('./Limone.jpeg')} alt="Limone" name="Limone" />
            <Flavour img={require('./Fragola.jpeg')} alt="Fragola" name="Fragola" />
            <Flavour img={require('./Mirtillo.jpeg')} alt="Mirtillo" name="Mirtillo" />
            <Flavour img={require('./Mango.jpeg')} alt="Mango" name="Mango" />
            <Flavour img={require('./Pera.jpeg')} alt="Pera" name="Pera" />
            <Flavour img={require('./Pesca.jpeg')} alt="Pesca" name="Pesca" />
            <Flavour img={require('./Melone.jpeg')} alt="Melone" name="Melone" />
            <Flavour img={require('./Zucca.jpeg')} alt="Zucca" name="Zucca" />
            <Flavour img={require('./Castagna.jpeg')} alt="Castagna" name="Castagna" />

        </div>
        </>
    )
}

export default Flavours;