import React from 'react';
import styles from './Footer.module.css'
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <div className={styles["icon-container"]}><NavLink to="/">🏠</NavLink></div>
                <div className={styles["icon-container"]}><NavLink to="/launches">🚀</NavLink></div>
                <div className={styles["icon-container"]}><NavLink to="/gallery">📷</NavLink></div>
                <div className={styles["icon-container"]}><NavLink to="/iss">🛸</NavLink></div>
                <div className={styles["icon-container"]}><NavLink to="/rover">🤖</NavLink></div>
            </footer>
        </>
    );
}

export default Footer;