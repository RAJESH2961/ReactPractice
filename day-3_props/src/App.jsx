import Student from "./Student.jsx";
import Children from "./Children.jsx"
import Greeting from "./Greeting.jsx";



function App(){
  return(
    <>
        {/* <Student name ="Rajesh" age = {21} isStudent = {true}/>
        <Student name ="Balaji" age = {24} isStudent = {true}/>
        <Student name ="Balaji" age = {24} isStudent = {true}/>
        <Student name ="Balaji" age = {24} isStudent = {true}/>
        <Student />
        <Children>
          <p>Parent -1</p>
          <p>Parent -2</p>
          <p>This is printed using child concept</p>
        </Children> */}
        <Greeting isloggedIn = {true} name = "Rajesh"></Greeting>
    </>
  );
}

export default App