import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./Iss.module.css"
import TopNav from "../../components/topnav-component/TopNav";

function Iss() {
    const issAPI = 'https://api.wheretheiss.at/v1/satellites/25544'
    const [iss, setIss] = useState([]);


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
            <TopNav/>
                <a target="_blank" rel="noreferrer"
                   href="https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station/Where_is_the_International_Space_Station">
                    <article className={styles["article-container"]}>
                        <h3>Where is the international space station?</h3>
                        <picture><img className={styles["iss-picture"]} src="https://www.tudelftcampus.nl/wp-content/uploads/2021/01/space-station.jpg"
                                      alt=""/></picture>
                        <p>Latitude: {Math.round(iss.latitude)}°</p>
                        <p>Longitude: {Math.round(iss.longitude)}°</p>
                        <p>Altitude: {Math.round(iss.altitude)} km</p>
                        <p>Velocity: {Math.round(iss.velocity)} km/h</p>
                    </article>
                </a>
        </>
    );
}

export default Iss;