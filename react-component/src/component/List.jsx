// List.jsx
import React from "react";

export const List = (props) => {
    const {Data} = props;
    return (
        <li>
            <img src={Data.imageSrc} alt={Data.title} />
            <h2>Title: {Data.title}</h2>
            <p>Description: {Data.description}</p>
            <p>Genre: {Data.genre}</p>
            <a href={Data.watchUrl} target="_blank" rel="noopener noreferrer">
                <button>Watch</button>
            </a>
        </li>
    );
};
