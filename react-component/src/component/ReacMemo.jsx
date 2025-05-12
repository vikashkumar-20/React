import React from 'react'
import { useState, useRef, memo } from 'react';

const ChildComponent = memo(() => { 
    const renderCount = useRef(0);
    console.log(renderCount);
    return(
        <div>
            <p>Nothing is Changed in Child Component but it is render:{renderCount.current++} times. </p>
        </div>
    );

});


const ReacMemo = () => {
    const [count, setCount] = useState(0);
    
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick = {(e) => setCount(count + 1)}>Increment</button>
        <ChildComponent />
    </div>
  )
}

export default ReacMemo