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
        console.log(jsonData)
    }

return (
    <div>
    {jsonData.map((data) => {
        return(
            <div key={data.title} className="cards-container">
                <div className="full-container">
                    <div className="work-info">
                        <div className="menu-dot">
                            <MoreHorizontal />
                            <h1 className="hours">{data.title}</h1>
                            <p>{data.timeframes.daily.current}</p>
                            <p>{data.timeframes.weekly.current}</p>
                            <p>{data.timeframes.monthly.current}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })}
    </div>
    )
}
export default Cards; 