import { useState } from 'react';
import './AdviceGenerator.css'
function AdviceGenerator(){
    const [advice, setAdvice] = useState("Click the below button to get advice")
    const [count, setCount] = useState(0)

    async function getAdvice(){//here we ued async because we are fetching data from api it might gets slow so we use it as an sync function
        const res = await fetch("https://api.adviceslip.com/advice");
        // console.log(res);//returns Readable stream formal which we cannot place then directly in our website
        const data = await res.json();//here we ae converting the Readable stream format into json so that we can display it in our web page
        // console.log(data);
        setAdvice(data.slip.advice);//Note in some API,s theyll set the limit to get data line 40 times...
        // setCount(count+1);or
        setCount((count) => count+1)

    }
    return (
        <>
        <div>
            <h1> {advice} </h1>
            <button className="generate" onClick={getAdvice}>Generate</button>
            <h5>You have read {count} piece of Advice</h5>
        </div>

        </>
    );
}

export default AdviceGenerator;