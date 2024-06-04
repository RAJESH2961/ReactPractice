import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increament = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }
    const reset = () =>{
        setCount(0);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increament}>Increament</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;