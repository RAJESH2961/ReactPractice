import { useState } from "react";

function ColorPickerApp(){

    const [color, setColor] = useState("#FFFFF");
    function handleColorChanger(event){
        setColor(event.target.value)

    }
  

    return(
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor : color}}>
            </div>
            <p>Selected Color : {color}</p>

            <label htmlFor="color">Select a color</label>
            <input type="color"  value={color} id="color" onChange={handleColorChanger} />
        </div>

        </>
    );
}

export default ColorPickerApp;