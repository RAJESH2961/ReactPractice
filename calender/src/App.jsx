import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LeftArrow from "./assets/arrow-left-circle.svg"
import RightArrow from "./assets/arrow-right-circle.svg"
import './App.css'

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function App() {

  const [selectdDate, setSelectedDate] = useState(new Date());
  const daysInMonth = () =>{
    const dayArray = [];
    const firstDay = new Date(selectdDate.getFullYear(), selectdDate.getMonth(), 1);
    const lastDay = new Date(selectdDate.getFullYear(), selectdDate.getMonth()+1, 0);

    for(let i=0; i<firstDay.getDay(); i++){
      dayArray.push(null)
    }
    for(let i=1; i<=lastDay.getDate(); i++){
      dayArray.push(new Date(selectdDate.getFullYear(), selectdDate.getMonth(), i))
    }
    return dayArray;
  }
  const handleChangeMonth = (e) =>{
    const newMonth = parseInt(e.target.value, 10)
    setSelectedDate(new Date(selectdDate.getFullYear(), newMonth ,1))
  }
  const handleChangeYear = (e) =>{
    const newYear = parseInt(e.target.value, 10)
    setSelectedDate(new Date(newYear, selectdDate.getMonth() ,1))
  }
  return (
    <>
    <div className="calender">
      <div className="header">
        <button onClick={() => {setSelectedDate(new Date(selectdDate.getFullYear(), selectdDate.getMonth()-1, 1))}}><img src={LeftArrow} alt="" /></button>
        <select value={selectdDate.getMonth()} onChange={handleChangeMonth}>
          {months.map((month,index) => (<option key={index} value={index}>{month}</option>))}
        </select>
        <select value={selectdDate.getFullYear()} onChange={handleChangeYear}>
          {
            Array.from({length : 10 }, (_,i) => selectdDate.getFullYear() -5 +i ).map((year) => (<option key={year} value={year}>{year}</option>))
          }
        </select>
        <button onClick={() => {setSelectedDate(new Date(selectdDate.getFullYear(), selectdDate.getMonth() +1, 1))}}><img src={RightArrow} alt="" /></button>
      </div>
      <div className="daysOfWeek">
        {weekdays.map((day) =>(<div key={day}>{day}</div>))}
      </div>
      <div className="days">
        {daysInMonth().map((day, index) => (<div key={index} className={day? "day" : "empty"}>{day ? day.getDate() : ""}</div>))}
      </div>
    </div>
    </>
  )
}

export default App
