import { useState, useEffect } from "react";
import React from "react";
import Cards from "../../components/Cards";
import "./styles.css";


function User() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        getData();
    }, []); // render once

    const getData = async() => {
        const response = await fetch('./data.json')
        const json = await response.json();
        setJsonData(json);
        console.log(jsonData)
    }

    const allHours = (e) => {
       e.preventDefault(); 
       getData(); 
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
                <form className="days">
                    <button onClick={allHours}>Daily</button>
                    <button onClick={allHours}>Weekly</button>
                    <button onClick={allHours}>Monthly</button>
                </form>
            </div>
    )
}

export default User;