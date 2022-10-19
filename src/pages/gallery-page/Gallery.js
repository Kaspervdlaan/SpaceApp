import React, {useEffect, useState} from 'react';
import axios from "axios";
import Article from "../../components/article-component/Article";
import styles from "./Gallery.module.css"
import {Link} from "react-router-dom";

function Gallery() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        searchPictures()
    },[])

    function submitSearch(e) {
        searchPictures()
        e.preventDefault();
    }

    async function searchPictures() {

        try {
            const response = await axios.get(`https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`)
            const data = response.data.collection.items
            setSearchResult(data)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className={styles["title-container"]}>
                <h3>Search the NASA picture database!</h3>
            </div>
            <form className={styles["search-form"]} onSubmit={submitSearch}>

                <input
                    className={styles["search-input"]}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    type="search"
                    placeholder="Search the Universe..."
                />

                    <button className={styles["search-button"]}></button>

            </form>
            {searchResult.length > 1 ?


                        searchResult.map((article) => {
                            return (
                                <Link to={`/item/${article.data[0].nasa_id}`}>
                                <Article
                                    number={article.links[0].href}
                                    photographer={article.data[0].photographer}
                                    source={article.data[0].secondary_creator}
                                    date={article.data[0].date_created}
                                    title={article.data[0].title}
                                    image={article.links[0].href}
                                    desc={article.data[0].description}
                                />
                        </Link>
                            )
                        })



                 :

                    <article className="article-container">
                        <h4 className={styles["no-result"]}>No data is found for: {searchQuery}</h4>
                    </article>
                }
        </>
    );
}

export default Gallery;