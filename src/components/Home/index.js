import React from "react";
import "./styles.css";
import Card from "../../components/Card";
import Cards from "../../components/Cards";

// Home will contain the entire page of main card and cards
function Home() {
    return (
        <div className="home-container">
            <Card />
            <Cards />
        </div>
    )
}

export default Home;
