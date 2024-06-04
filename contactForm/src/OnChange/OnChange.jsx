import { useState } from "react";

function OnChange(){
    const [payment, setPaymentMethod] = useState("Visa");

    function handlePayment(event){
        setPaymentMethod(event.target.value);

    }
    return(
        <div>
            <h1>Payment :{payment}</h1>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an Option</option>
                <option value="visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Rupay">Rupay</option>
                <option value="Credit Card">Credit Card</option>
            </select>
        </div>
    );
}

export default OnChange;