import React from "react";
import "./Home-Flavours.css"

function HomeFlavours(){
    return(
        <>
        <section id="about-flavours">
        <div class="about-wrapper-flavours container">
            <div class="about-text-flavours">
            <h2>The taste of tradition</h2>
            <p>
                Elisa gelateria is an artisanal laboratory where ice cream is produced
                first and foremost out of passion. A passion born suddenly, but which
                has consolidated in 20 years. At the Elisa gelateria the attention to the
                recipes, the choice of raw materials and the attention to the customer
                are those of a gourmet restaurant, where tradition makes the difference.
            </p>
            <a href="/flavours" class="btn btn-primary">Flavours</a>
            </div>
            <div class="about-img-flavours"></div>
        </div>
        </section>
        </>
    )
}

export default HomeFlavours;