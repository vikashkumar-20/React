import React, { useMemo } from 'react'
import { useState } from 'react';

const ChildComponent = () => { 

    const sum = () => {
        let i=0;
        for(i=0; i<10000000; i++)
        {
           i = i + 1;
        }
        return i;
    }
    
    const total = useMemo(() => {
        return sum();
    }, [])

    



    return <h1>Total is: {total}</h1>

};


const UseMemo = () => {
    const [count, setCount] = useState(0);
    
  return (
    <div>
        <ChildComponent />
        <p>Count: {count}</p>
        <button onClick = {(e) => setCount(count + 1)}>Increment</button>
        
    </div>
  )
}

export default UseMemo