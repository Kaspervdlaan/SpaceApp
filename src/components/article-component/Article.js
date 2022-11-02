import React from 'react';
import styles from './Article.module.css';


function Article({number, source, date, title, image, desc}) {

    return (
        <article key={number} className={styles["article-container"]}>
            <div className={styles["date-source-container"]}>
                <div>
                    <h3>📰</h3>
                </div>
                <div>
                     <h4>{source}</h4>
                    <h5>{date}</h5>
                </div>
            </div>
            <div className={styles["title-container"]}><h3>{title}</h3></div>

            {image && <picture className={styles["picture-container"]}>
                <img className={styles["pictures"]} src={image} alt={title}/>
            </picture>}
            <div className={styles["desc-container"]}>
                {desc.length < 700 && <p>{desc}</p>}
            </div>
        </article>
    );
}

export default Article;