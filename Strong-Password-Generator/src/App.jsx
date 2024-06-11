import { useState } from 'react'
// import './assets/App.css'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  // Including Upper case Characters
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  // Including Lower Case Characters
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  // Including Numbers
  const [includeNumbers, setIncludeNumbers] = useState(true);
  // Including Special Characters
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  //password
  const [password, setPassword] = useState("");
  //Copy to Clip Board
  const copyToClipBoard =()=>{
    navigator.clipboard.writeText(password);
    if(password){
      alert("Password Copied.");
    }else{
      confirm("Nothing to Copy");
    }
  };
  const generatePassword = () => {
    let charset = "";
    if(includeUpperCase) charset+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(includeLowerCase) charset+='abcdefghijklmnopqrstuvwxyz';
    if(includeNumbers) charset+='0123456789';
    if(includeSpecialChars) charset +='!@#$%^&*()?';
    //Random password Generation
    let generatePassword = "";
    for(let i=0 ; i<length ; i++){
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatePassword += charset[randomIndex];
    }
    setPassword(generatePassword);
  }
 
  return (
    <>
      <div className="passwordGenerator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
          <label htmlFor="length">Enter the Password length</label>
          <input type="number" name="" id="length" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
        </div>
        {/* //Including Upper case Characters */}
        <div className="checkbox-group">
          <input type="checkbox" name="" id="upper" checked={includeUpperCase}
          onChange={(e) => setIncludeUpperCase(e.target.checked)}/>
          <label htmlFor="upper">Include Upper Case</label>
        </div>
        {/* Including Lower Case Characters */}
        <div className="checkbox-group">
          <input type="checkbox" name="" id="lower" checked={includeLowerCase}
          onChange={(e) => setIncludeLowerCase(e.target.checked)} />
          <label htmlFor="lower">Include Lower Case</label>
        </div>
        {/* including Numbers */}
        <div className="checkbox-group">
          <input type="checkbox" name="" id="numbers" checked={includeNumbers} 
          onChange={(e) => setIncludeNumbers(e.target.checked)}/>
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        {/* include Special Characters */}
        <div className="checkbox-group">
          <input type="checkbox" name="" id="special" checked={includeSpecialChars} 
          onChange={(e) => setIncludeSpecialChars(e.target.checked)}/>
          <label htmlFor="special">Include Special Characters</label>
        </div>
        {/* Password Generation Button */}
        <button className='generate-button' onClick={generatePassword}>Genertate Password</button>
        <div className="generated-password">
          <input type="text" readOnly value={password} />
          <button className='copy-button' onClick={copyToClipBoard}>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
