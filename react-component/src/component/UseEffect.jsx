import React, { useEffect } from 'react'
import { useState } from 'react';

export const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [intputValue, setInputValue] = useState('');

    const handleIncrement = () => { 
        setCount(count + 1);
    }

    const handleInput = (e) => {
        setInputValue(e.target.value);
        // console.log(`Name: ${e.target.value}`);
    }

    useEffect(() => {
        console.log(`Input value changed: ${intputValue}`);
    }, [intputValue]);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
  return (
    <div>
        <h1>useEffect Challenge !!</h1>
        <p>Count : {count}</p>
        <button onClick = {handleIncrement}>Increment</button>
        <p>{intputValue}</p>
        <input 
        type="text" 
        name="inputField" 
        value={intputValue}
        onChange={handleInput}/>
    </div>
  )
}
