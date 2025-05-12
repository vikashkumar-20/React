import React, { useEffect, useState } from 'react'


export const SubscriberCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => prev + 1 );
        },1000)

        return () => clearInterval(intervalId);
    },[])

    


  return (
    <div>
        <h1>Subscriber Count</h1>
        <h3>Subscriber: {count}</h3>
    </div>
  )
}

