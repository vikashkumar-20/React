import React from "react";
import movieData from '../api/MovieData.json';
import { List } from './List'; 

const NetflixCard = () => {

    return (
        <>
            <ul>
                {
                    movieData.map ((currElem ) => {
                        return <List key = {currElem.id} Data={currElem}/>
                    })
                }
            </ul>
        </>
    );

}

export default NetflixCard;