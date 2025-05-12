import React from 'react';

export const ProfileCard = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {props.greeting} {/* Directly render the greeting */}
            <div>{props.children}</div>
        </div>
    );
};
