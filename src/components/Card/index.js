import React from "react";
import "./styles.css";


function Card() {
    return (
        <div className="main-card">
            <div className="card-container">
                <div class="card-info">
                    <div class="description">
                        <img className="photo" src={process.env.PUBLIC_URL + '/images/portfolio.jpg'} />
                        <p className="report">Report for</p>
                        <h1 className="name">Natalie Lopez</h1>
                    </div>
                </div>
                <ul className="days">
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul>
            </div>
        </div>
    )
}

export default Card;