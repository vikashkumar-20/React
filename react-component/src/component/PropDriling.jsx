import React  from "react";

export const PropDriling = () => { 
    return (
        <div>
            <Parent data="React Js"/>
        </div>
    );
}

const Parent = (props) => {
    return(
        <div>
            <Child  data={props.data}/>
        </div>
    );
}


const Child = (props) => {
    return(
        <div>
            <GrandChild data={props.data}/>
        </div>
    );
}

const GrandChild = (props) => {
    return(
        <div>
            <h1>Hello, I Love {props.data}</h1>
        </div>
    );
}