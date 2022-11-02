import React from 'react';
import styles from './RoverArticle.module.css'


function RoverArticle({ image }) {
    return (
            <article className={styles["rover-article"]}>
                    <picture className={styles["rover-picture-container"]}>
                        <img className={styles["rover-picture"]} src={image} alt=""/>
                    </picture>
            </article>
    );
}

export default RoverArticle;