import React from 'react';
import styles from './TopNav.module.css'
import {NavLink} from "react-router-dom"

function TopNav() {
    return (
        <div className={styles["top-nav"]}>
            <NavLink exact to="/"><h4 className={styles["link"]}>News</h4></NavLink>
            <h4>|</h4>
            <NavLink to="/launches"><h4 className={styles["link"]}>Launches</h4></NavLink>
        </div>
    );
}

export default TopNav;