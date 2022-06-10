import React from "react";
import "./styles.css";


function Card() {

    const renderHours = () => {
        // if daily, weekly, or monthly is clicked, render those hours
    } 


    return (
        <div className="card-container">
            <div className="card-info">
                <div className="description">
                    <div className="mobile-img">
                        <img className="photo" src={process.env.PUBLIC_URL + '/images/person.png'} alt="portfolio"/>
                    </div>
                    <div className="mobile-description">
                        <p className="report">Report for</p>
                        <h1 className="name">Natalie Lopez</h1>
                    </div>
                </div>
            </div>
                <ul className="days">
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul>
            </div>
    )
}

export default Card;