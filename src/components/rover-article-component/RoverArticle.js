import React from 'react';

function RoverArticle({ image }) {
    return (
            <article>
                    <picture>
                        <img src={image} alt=""/>
                    </picture>
            </article>
    );
}

export default RoverArticle;