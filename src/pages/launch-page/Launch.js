import React, {useEffect, useState} from 'react';
import axios from "axios";
import Article from "../../components/article-component/Article";

function Launch() {
    const launchAPI = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/';
    const [launch, setLaunch] = useState([]);

    useEffect(() => {
        fetchLaunch()

        async function fetchLaunch() {
            try {
                const response = await axios.get(launchAPI)
        const data = response.data.results.map((launch) => ({
            image: launch.image,
            name: launch.name,
            date: launch.net,
            url: launch.url,
            who: launch.launch_service_provider.name,
            desc: launch.status.description
        }))
                setLaunch(data)
            } catch (e) {
                console.log(e)
            }
        }
    }, []);

    return (
        <>
            <div className="inner-container">
            {launch.map((article) => {
                return (
                    <Article
                        number={article.name}
                        source={article.who}
                        date={article.date}
                        title={article.name}
                        image={article.image}
                        desc={article.desc}
                    />
                )
            })}
            </div>
        </>
    );
}

export default Launch;