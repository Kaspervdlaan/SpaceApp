import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./Iss.module.css"

function Iss() {
    const issAPI = 'https://api.wheretheiss.at/v1/satellites/25544'
    const [iss, setIss] = useState([]);
    const [country, setCountry] = useState('');


    useEffect(() => {
        fetchIss()

        async function fetchIss() {
            try {
                const response = await axios.get(issAPI)
                const data = response.data
                setIss(data)
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }
    }, []);

    return (
        <>
            <div className="inner-container">
                <a target="_blank"
                   href="https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station/Where_is_the_International_Space_Station">
                    <article className={styles["article-container"]}>
                        <h3>Where is the international space station?</h3>
                        <picture><img src="https://www.tudelftcampus.nl/wp-content/uploads/2021/01/space-station.jpg"
                                      alt=""/></picture>
                        <p>Latitude: {Math.round(iss.latitude)}°</p>
                        <p>Longitude: {Math.round(iss.longitude)}°</p>
                        <p>Altitude: {Math.round(iss.altitude)} km</p>
                        <p>Velocity: {Math.round(iss.velocity)} km/h</p>
                    </article>
                </a>

            </div>
        </>
    );
}

export default Iss;