import React, { useCallback, memo} from 'react'
import { useState } from 'react'

const Button = memo(({onClick, children}) => { 
    console.log(`Rendering Button: ${children}`)

    return <button onClick={onClick}>{children}</button>
});

const UseCallback = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prev) => prev + 1)
        console.log("Inside Increment");
    },[])
   
    const decrement = useCallback(() => {
        setCount((prev) => prev - 1)
        console.log("Inside Decrement");
    },[])

  return (
    <div>
        <p>Count: {count}</p>
        <Button onClick = {increment}>Increment</Button>
        <Button onClick = {decrement}>Decrement</Button>
    </div>
  )
}

export default UseCallback