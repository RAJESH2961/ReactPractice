// import styles from "./Greeting.modules.css";

function Greeting(props){
        // Method -1
        // if(props.isloggedIn){
        //     return <h2>Welcome {props.name}</h2>
        // }
        // else{
        //     return <h2>Please Login to Continue</h2>
        // }
        // method-2
        // return(props.isloggedIn ? <h2 className="welcomeMsg">Welcome {props.name}</h2> : 
        //                             <h2 className="errorMsg">Please Login to continue</h2>);
        // Method-3
        const welcomeMsg = <h2 className="welcomeMsg">Welcome {props.name}</h2> ;
        const errorMsg = <h2 className="errorMsg">Please Login to continue</h2> ;

        return( props.isloggedIn ? welcomeMsg :  errorMsg);
    }


export default Greeting