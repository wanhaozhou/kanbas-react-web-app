import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button
                className='btn btn-success'
                onClick={() => { setCount(c => c + 1) }}>
                Up
            </button>
            <button
                className='btn btn-danger'
                onClick={() => { setCount(c => c - 1) }}>
                Down
            </button>
        </div>
    );
}

export default Counter;

