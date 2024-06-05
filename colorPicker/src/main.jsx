import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.j÷sx'
// import ColorPickerApp from './ColorPickerApp/ColorPickerApp.jsx'
import RgbColor from './RGBColor/RgbColor.jsx'
// import './index.css'
// import './ColorPickerApp/ColorPickerApp.css'
import './RGBColor/RgbColor.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ColorPickerApp /> */}
    <RgbColor />
  </React.StrictMode>,
)
