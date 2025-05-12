import React from 'react'
import { useReducer, useState } from 'react'

const UseReducer = () => {
    const step = 2;
    const initialState = {
        count: 0,
    }

    // const [count, setCount] = useState(0);

    const reducer = (state, action) => {
        //    if(action.type === 'INCREMENT' ) 
        //    {
        //      return state + 1;
        //    }

        //    if(action.type === 'DECREMENT' ) 
        //     {
        //       return state - 1;
        //     }

        //     return state;




        switch (action.type) {
            case "INCREMENT":
                return { ...state, count: state.count + step};
                

            case "DECREMENT":
                return {...state, count: state.count - step };
                

            // default:
            //     return {...state, count: 0 };
        }



    }

    // console.log(reducer);
    // console.log(state, action);

    const [state, dispatch] = useReducer(reducer, initialState)

    // console.log(count, dispatch)

    return (
        <div>
            <p>Count: {state.count} </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })} >Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
        </div>
    )
}

export default UseReducer