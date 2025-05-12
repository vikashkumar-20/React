import React, { useState } from 'react'

const InputComponent = (props) => {
    const { inputValue, setInputValue } = props;
    return (
        <div>
            <input
                type="text" value = {inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
}

const DisplayComponent = (props) => { 
    const {inputValue} = props;
    return (
        <div>
            <p>The input value is: {inputValue} </p>
        </div>
    );
}


const StateLifting = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <InputComponent  inputValue = {inputValue} setInputValue = {setInputValue}/>
            <DisplayComponent inputValue = {inputValue}/>
        </div>
    )
}

// const StateLifting = () => {
        
//         return (
//             <div>
//                 <InputComponent/>
//                 <DisplayComponent/>
//             </div>
//         )
//     }
    

export default StateLifting




