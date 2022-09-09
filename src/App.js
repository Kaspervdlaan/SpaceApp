import React from "react";
import './App.css';
import axios from "axios";


// API endpoints
const newsAPI = 'https://api.spaceflightnewsapi.net/v3/articles';
const lauchAPI = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/';
const issAPI = 'https://api.wheretheiss.at/v1/satellites/25544'

// Space news API
async function fetchNews () {
    try {
        const response = await axios.get(newsAPI)
        const data = response.data.map((article) => ({
            title: article.title,
            site: article.newsSite,
            date: article.publishedAt,
            image: article.imageUrl,
            description: article.summary,
            url: article.url
        }))
        console.log(data)
    }
    catch (e) {
        console.log(e)
    }
}

// Launch API
async function fetchLaunch () {
    try {
        const response = await axios.get(lauchAPI)
        const data = response.data.results.map((launch) => ({
            image: launch.image,
            name: launch.name,
            date: launch.net,
            url: launch.url,
            who: launch.launch_service_provider.name,
            desc: launch.status.description
        }))
        console.log(data)
    }
    catch (e) {
        console.log(e)
    }
}

// ISS API
async function fetchIss () {
    try {
        const response = await axios.get(issAPI)
        const { altitude, latitude, longitude, velocity } = response.data
        console.log({ altitude, latitude, longitude, velocity })
    } catch (e) {
        console.log(e)
    }
}

function App() {
    // SpaceNews API
    fetchNews();
    // Launch API
    fetchLaunch();
    // ISS API
    fetchIss();




  return (
    <>

    </>
  );
}

export default App;
