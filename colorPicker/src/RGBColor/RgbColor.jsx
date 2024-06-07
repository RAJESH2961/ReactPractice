import { useState } from "react";

function RgbColor(){
    const [color, setColor] = useState({r :0, g : 0, b: 0, text : ""});

    function handleEvent(event){
        setColor({...color, [event.target.name] : [event.target.value]})

    }
    return(
        <>
        <div className="color-container">
            <h1>Enter R G B Values</h1>
            <h2  style={{color: `rgb(${color.r}, ${color.g}, ${color.b})`}} >This is the sample text :{color.text} </h2>
            <div 
                className="color-display" 
                style={{
                backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
                boxShadow: `rgba(${color.r}, ${color.g}, ${color.b}, 0.99) 10px 22px 70px 4px`
                }}
>
             </div>
            <h4>Selected Values R : {color.r} G : {color.g} B : {color.b}</h4>
            <div className="color-input">

            <label htmlFor="r">Enter R Value</label>
            <input type="number" name="r" id="r" value={color.r} onChange={handleEvent} placeholder="Enter The Number" />
            <label htmlFor="g">Enter G Value</label>
            <input type="number" name="g" id="g" value={color.g} onChange={handleEvent} placeholder="Enter The Number" />
            <label htmlFor="b">Enter B Value</label>
            <input type="number" name="b" id="b" value={color.b} onChange={handleEvent} placeholder="Enter The Number" />
            <div className="input-data">
            <label htmlFor="text">Type the Text : </label>
            <input type="text" name="text" id="text" value={color.text} onChange={handleEvent} placeholder="Type Some Text here"/>
            </div>
            


            </div>
        </div>
        </>
    );

}

export default RgbColor;