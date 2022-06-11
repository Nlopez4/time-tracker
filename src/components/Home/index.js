import React from "react";
import "./styles.css";
import User from "../../components/User";
import Cards from "../../components/Cards";

// Home will contain the entire page of main card and cards
function Home() {
    return (
        <div className="home-container">
            <User />
            <Cards />
        </div>
    )
}

export default Home;
