import React, { useState } from 'react'



// export const State = () => {
//     let value = 0;
//     const incrementCount = () => {

//         value++;
//         console.log(value)

//     }
//     return (
//         <div>
//             <p>Value: {value} </p>
//             <button onClick={() => incrementCount(value)}>Increment</button>
//         </div>
//     )
// };

export const State = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick = {() => setCount(count + 1)}>Click Me</button>
        </div>
    );

}