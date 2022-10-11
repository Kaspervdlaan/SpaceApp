import React, {useEffect, useState} from "react";
import axios from "axios";
import Article from "../../components/article-component/Article";
import TopNav from "../../components/topnav-component/TopNav";

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
            <TopNav/>
                {news.map((article) => {
                return (
                    <a href={article.url} target="_blank" rel="noreferrer" >
                    <Article
                        number={article.title}
                        source={article.newsSite}
                        date={article.publishedAt}
                        title={article.title}
                        image={article.imageUrl}
                        desc={article.summary}
                    />
                </a>
                )
            })}
        </>
    )
}

export default News