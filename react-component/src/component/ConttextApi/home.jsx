import React, { useContext } from "react";
import { Context } from ".";

export const Home = () => { 
    const myName = useContext(Context);
    return(
        <p>Hello, My Name is : {myName}</p>
    );
}