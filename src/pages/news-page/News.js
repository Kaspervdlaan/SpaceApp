import React, {useEffect, useState} from "react";
import axios from "axios";
import Iss from "../iss-page/Iss";
import Article from "../../components/article-component/Article";

function News() {
    const newsAPI = 'https://api.spaceflightnewsapi.net/v3/articles';
    const [news, setNews] = useState([]);


    useEffect(() => {
        fetchNews()

        async function fetchNews() {
            try {
                const response = await axios.get(newsAPI)
                const data = response.data
                setNews(data)
            } catch (e) {
                console.log(e)
            }
        }
    }, []);

    return (
        <>
            <div className="inner-container">
                {news.map((article) => {
                return (

                    <Article
                        number={article.title}
                        source={article.newsSite}
                        date={article.publishedAt}
                        title={article.title}
                        image={article.imageUrl}
                        desc={article.summary}
                    />

                    // <a target="_blank" key={article.title} href={article.url}>
                    //     <article className="news-article-container">
                    //         <div className="news-date-and-site-container">
                    //             <h4>{article.newsSite}</h4>
                    //             <h5>{article.publishedAt}</h5>
                    //         </div>
                    //         <div className="news-title-container"></div>
                    //         <h3>{article.title}</h3>
                    //         <picture className="news-picture-container">
                    //             <img className="news-pictures" src={article.imageUrl} alt={article.title}/>
                    //         </picture>
                    //         <div className="news-desc-container">
                    //             <p>{article.summary}</p>
                    //         </div>
                    //     </article>
                    // </a>


                )
            })}
                <Iss/>
            </div>
        </>
    )
}

export default News