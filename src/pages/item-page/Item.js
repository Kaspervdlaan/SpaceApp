import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import styles from "../../components/article-component/Article.module.css";


function Item() {
    const { id } = useParams();
    const [idResult, setIdResult] = useState([])
    const [imageResult, setImageResult] = useState('')

    useEffect(() => {
        searchPictures()
    },[]);

    async function searchPictures() {

        try {
            const response = await axios.get(`https://images-api.nasa.gov/search?nasa_id=${id}`)
            const data = response.data.collection.items[0].data[0]
            const dataImage = response.data.collection.items[0].links[0].href
            setIdResult(data)
            setImageResult(dataImage)

        } catch (e) {
            console.log(e)
        }
    }
    {
        console.log(idResult.title)}

    return (
        <>
            <article key={id} className={styles["article-container"]}>
                <div className={styles["date-source-container"]}>
                    <h4>{idResult.secondary_creator}</h4>
                    <h5>{idResult.date_created}</h5>
                </div>
                <div className={styles["title-container"]}></div>
                <h3>{idResult.title}</h3>
                <picture className={styles["picture-container"]}>
                    <img className={styles["pictures"]} src={imageResult} alt={idResult.title}/>
                </picture>
                <div className={styles["desc-container"]}>
                    <p>{idResult.description}</p>
                </div>
            </article>
        </>
    );
}

export default Item;