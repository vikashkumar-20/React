import React from "react";

const handleClick = () => { 
    alert("Button Clicked !!")
}

export const EventHandling = () => { 
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}