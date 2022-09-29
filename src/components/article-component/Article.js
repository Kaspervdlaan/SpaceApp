import React from 'react';
import styles from './Article.module.css'

function Article({number, source, date, title, image, desc }) {

    return (
        <article key={number} className={styles["article-container"]}>
            <div className={styles["date-source-container"]}>
                <h4>{source}</h4>
                <h5>{date}</h5>
            </div>
            <div className={styles["title-container"]}></div>
            <h3>{title}</h3>
            <picture className={styles["picture-container"]}>
                <img className={styles["pictures"]} src={image} alt={title}/>
            </picture>
            <div className={styles["desc-container"]}>
                {desc.length < 1000 && <p>{desc}</p>}
            </div>
        </article>
    );
}

export default Article;