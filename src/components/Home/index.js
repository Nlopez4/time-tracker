import React from "react";
import "./styles.css";

function Home() {
    return (
        <div>
            <p className="report">Report for</p>
            <h1 className="name">Natalie Lopez</h1>
            <ul className="days">
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul>
        </div>
    )
}

export default Home;
