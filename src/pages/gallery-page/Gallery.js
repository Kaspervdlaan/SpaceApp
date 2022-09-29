import React, {useEffect, useState} from 'react';
import axios from "axios";
import Article from "../../components/article-component/Article";
import styles from "./Gallery.module.css"

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
                <h2>Search the NASA picture database!</h2>
            </div>
            <form className={styles["search-form"]} onSubmit={submitSearch}>

                <input
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
                                <Article
                                    number={article.links[0].href}
                                    source={article.data[0].secondary_creator}
                                    date={article.data[0].date_created}
                                    title={article.data[0].title}
                                    image={article.links[0].href}
                                    desc={article.data[0].description}
                                />
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