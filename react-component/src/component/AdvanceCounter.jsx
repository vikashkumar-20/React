import React from 'react'
import { useState } from 'react'

export const AdvanceCounter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleIncrement = () => {
        if(count < 100)
        {
            setCount(prevCount => prevCount + step);
        }
    }

    const handleDecrement = () => {
        if(count > 0)
        {
            setCount(prevCount => prevCount - step);
        }
    }

    const handleReset = () => {
        setCount(0);
    }

    const handleValueChange = (e) => {
        const value = parseInt(e.target.value);
        setStep(isNaN(value) ? 1 : value);
    }


    return (
        <div>
            <p>Count: {count}</p>
            Step: <input 
            type="number" 
            name="" id=""
            onChange={handleValueChange} 
            value={step}
            style={{ marginLeft: '5px' }}
            />
            <br />
            <br />
            <button style={{ backgroundColor: "red", marginRight:"10px"}} onClick={handleIncrement} disabled={count >=100 }>Incement</button>
            <button style={{ backgroundColor: "red", marginRight:"10px"}} onClick={handleDecrement} disabled={count <= 0 }>Decrement</button>
            <button style={{ backgroundColor: "red" }} onClick={handleReset}>Reset</button>
        </div>
    )
}
