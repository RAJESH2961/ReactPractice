import { useState } from 'react';
import './App.css';

function App() {
  // State to store user input for height (in cm) and weight (in kg)
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  
  // State to store the calculated BMI and its corresponding status message
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  
  // State to handle error messages for invalid input
  const [errorMessage, setErrorMessage] = useState("");

  // Function to calculate the BMI based on height and weight
  const calculateBmi = () => {
    // Regular expressions to validate that height and weight are numbers
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      // Convert height from cm to meters for the BMI calculation
      const heightInMtrs = height / 100;
      
      // Calculate BMI: weight (kg) / (height (m) ^ 2)
      const bmiValue = weight / (heightInMtrs * heightInMtrs);
      
      // Update the BMI state with the calculated value (rounded to 2 decimal places)
      setBmi(bmiValue.toFixed(2));
      
      // Determine the BMI status message based on the calculated BMI value
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Over Weight");
      } else {
        setBmiStatus("Obese");
      }

      // Clear any previous error messages
      setErrorMessage("");
    } else {
      // If the input is invalid, reset BMI and status, and show an error message
      setBmiStatus("");
      setBmi(null);
      setErrorMessage("Please enter valid height and weight in numbers.");
    }
  };

  // Function to clear all input fields and reset the state
  const clearData = () => {
    setHeight("");
    setWeight("");
    setBmiStatus("");
    setBmi(null);
    setErrorMessage("");
  };

  return (
    <>
      <div className="bmi-calculator">
        <div className="image-box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {/* Display error message if any */}
          <p className='error'>{errorMessage}</p>
          
          {/* Input field for height */}
          <div className="input-container">
            <label htmlFor="height">Enter Your Height in (Cm):</label>
            <input
              type="text"
              id="height"
              placeholder='Enter Your Height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          
          {/* Input field for weight */}
          <div className="input-container">
            <label htmlFor="weight">Enter Your Weight in (Kg):</label>
            <input
              type="text"
              id="weight"
              placeholder='Enter Your Weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          
          {/* Buttons for clearing data and calculating BMI */}
          <div className="button-div">
            <button id='clear' onClick={clearData}>Clear</button>
            <button id='calculate' onClick={calculateBmi}>Calculate BMI</button>
          </div>
          
          {/* Display the calculated BMI and status if BMI is available */}
          {bmi !== null && (
            <div className='result'>
              <p>Your BMI is {bmi}</p>
              <p>Status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
