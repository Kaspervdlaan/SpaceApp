import React from 'react';
import TopNav from "../../components/topnav-component/TopNav";

function Live() {
    return (
        <>
            <TopNav/>
            <div className="iframe-container">
                <iframe width="360" height="270" src="https://www.youtube.com/embed/nA9UZF-SZoQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <div className="iframe-container">
                <iframe width="360" height="270" src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                </iframe>
            </div>

        </>
    );
}

export default Live;
