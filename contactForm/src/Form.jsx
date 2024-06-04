import { useState } from "react";

function Form(){
    const [user, setUser] = useState({fname : "rajesh", lname : "G", age : 21});
    function changeHandler(e){
        setUser({...user, [e.target.name] : e.target.value})
        //setUser(old data, key : value)
    }

    return(
        <>
        <h2>Name : {user.fname}</h2>
        <h2>Last Name : {user.lname}</h2>
        <h2>Age : {user.age}</h2>
        
        <form action="">
            
            <input type="text" name="fname" id="" onChange={changeHandler} value={user.fname} />
            <input type="text" name="lname" id="" onChange={changeHandler} value={user.lname} />
            <input type="number" name="age" id="" onChange={changeHandler} value={user.age} />
        </form>
        </>
    );
}
export default Form;