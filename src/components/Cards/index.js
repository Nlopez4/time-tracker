import { useState, useEffect } from "react";
import "./styles.css";
import { MoreHorizontal } from 'react-feather';

function Cards() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        getData();
    }, []); // render once

    const getData = async() => {
        const response = await fetch('./data.json')
        const json = await response.json();
        setJsonData(json);
        console.log(json)
    }

   
    return (
        <div className="cards-container">
            <div className="full-container">
                <div className="work-info">
                        <div className="menu-dot">
                            <MoreHorizontal />
                        </div>
                        <p className="cards-title">Work</p>
                    <h1 className="hours">32hrs</h1>
                    <p className="past-p">Last Week: 30hrs</p>
                </div>
            </div>
        </div>
    )
}

export default Cards; 