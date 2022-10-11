import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

function Header() {
    const [menu, setMenu] = useState("hide-menu")

    function toggleMenu() {
        if (menu === "hide-menu") {
            setMenu("show-menu")
        } else {
            setMenu("hide-menu")
        }
    }

    return (
        <>
            <header>
                <div onClick={toggleMenu} className={styles["hamburger-container"]}>
                    <svg width="23px" height="23px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>

                <div>
                    <h4>🌌GalacticUniverse</h4>
                </div>

                <NavLink to="/login"><div className={styles["profile-container"]}><h2>👨‍🚀</h2></div></NavLink>
            </header>

            {menu === "show-menu" && <nav onMouseLeave={toggleMenu} className={styles["nav-container"]}>
                <ul>
                    <NavLink onClick={toggleMenu} activeClassName={styles["active-menu"]} to="/">
                        <li>SpaceNews</li>
                    </NavLink>
                    <NavLink onClick={toggleMenu} activeClassName={styles["active-menu"]} to="/launches">
                        <li>Launches</li>
                    </NavLink>
                    <NavLink onClick={toggleMenu} activeClassName={styles["active-menu"]} to="/gallery">
                        <li>Search Nasa</li>
                    </NavLink>
                    <NavLink onClick={toggleMenu} activeClassName={styles["active-menu"]} to="/rover">
                        <li>Check on the mars Rovers</li>
                    </NavLink>
                    <NavLink onClick={toggleMenu} activeClassName={styles["active-menu"]} to="/iss">
                        <li>Where's the ISS?</li>
                    </NavLink>
                    <NavLink onClick={toggleMenu} activeClassName={styles["active-menu"]} to="/live">
                        <li>Watch NASA Live</li>
                    </NavLink>
                </ul>
            </nav>}
        </>
    );
}

export default Header;