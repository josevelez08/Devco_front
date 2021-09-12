import React from 'react';
import { useState } from "react"

export const Questions2 = () => {
    const [num, setNum] = useState(0);

    const inputQuestions = [{
        num,
        
    }];

    const incrementHandler = () =>{
        setNum(num + 1);
    };

    const decrementHandler = () =>{
        setNum(num - 1);
    };

    return <div>
        <div className="counter-buttom">
        <h1>{num}</h1>
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
        </div>
        return (
        <ul className='expenses-list'>
        {inputQuestions.items.map((expense) => (
    
      ))}
    </ul>
  );
};
   </div>
};