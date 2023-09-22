import React from "react";

function Flavour(props){
    return(
        <div className="flavours-item">
            <img src={props.img} alt={props.alt} />
            <p>{props.name}</p>
        </div>
    )
}

export default Flavour;