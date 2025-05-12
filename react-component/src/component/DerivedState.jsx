import React from 'react'
import { useState } from 'react'

// const users =
// export const DerivedState = () => {
//     return (
//         <div>{users.map((curr, index) => 
//             <div key={index}>
//                 <p>Name: {curr.name}</p>
//                 <p>Name: {curr.age}</p>
//             </div>

//         )}</div>
//     )
// }


    export const DerivedState = () => {
        const [users, setUsers] = useState( [
            { name: "Alice", age: 20 },
            { name: "Bob", age: 25 },
            { name: "Charlie", age: 30 },
            { name: "Angles", age: 35 },
        ])


    const totalAge = users.reduce((acc, curr ) =>  acc + curr.age, 0);
    console.log(totalAge);

    const average = totalAge/users.length;

        return (
            <div>{users.map((curr, index) => 
                <div key={index}>
                    <p>Name: {curr.name}, Age: {curr.age}</p>
                    <p>Count: {index}</p> 
                    <p>Average age: {average}</p>
                    
                </div>

            )}</div>
        )
    }

