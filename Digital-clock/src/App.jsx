import { useEffect, useState } from 'react'

import './App.css'
function App(){
  const [currenttime, setCurrentTime] = useState(new Date());

//Use Effect accept two parameters (callback ,[dependency array])
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date());
    },1000);//These call back function executes every one second.
    return() => clearInterval(timer);//clean Up code it clears the data when it is unmounted
  },[]);//Empty dependency array.. it is executed only once at the time of Mounting

  //adding zero
  const formatTimeWithLeadingZero = (num) =>{
    return num <10 ? `0${num}` : num;
  };
  //Checking AM Or PM
  const formatHour = (hour) =>{
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  //Format data from time
  // const formatDate = (date) =>{
    
  //   return date.toLocaleDateString();
  // };

  const formatDate = (date) =>{
    const options = { weekday : "long", year : "numeric", month : "long", day : "numeric" };
    return date.toLocaleDateString(undefined,options)
  };


  return (
    <>
    <div className="digital-clock">
      <h1>Digital Clock</h1>
      <div className="time">{formatTimeWithLeadingZero(formatHour(currenttime.getHours()))}
        : {formatTimeWithLeadingZero(currenttime.getMinutes())}
        : {formatTimeWithLeadingZero(currenttime.getSeconds())}
         {currenttime.getHours() >=12 ? " AM" : " PM"}
      </div>
      {/* <div className="date">{formatDate(currenttime)}</div> */}
      <div className="date">{formatDate(currenttime)}</div>
    </div>
      
    </>
  )
}

export default App
