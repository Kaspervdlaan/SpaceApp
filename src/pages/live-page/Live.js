import React from 'react';
import TopNav from "../../components/topnav-component/TopNav";

function Live() {
    return (
        <>
            <TopNav/>
            <div className="iframe-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/nA9UZF-SZoQ"
                    title="Nasa Live"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >

                </iframe>
            </div>
        </>
    );
}

export default Live;