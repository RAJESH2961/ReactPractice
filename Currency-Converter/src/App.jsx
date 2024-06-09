import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const[amount, setAmount] = useState(0);
  const[fromCurrency, setFromCurrency] = useState("USD");
  const[toCurrency, setToCurrency] = useState("INR");

  const[ConvertedAmount, setConvertedAmount] = useState(null);
  const[exchangeRate, setExchangeRate] = useState(null);
  useEffect(() => {
    const getExchangeRate = async () =>{
      try{
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        const response = await axios.get(url);
        console.log(response);
        setExchangeRate(response.data.rates[toCurrency])

      }catch(error){
        console.log("Error while fetching exchange rate ",error);
    }
  };
  getExchangeRate();
  },[fromCurrency, toCurrency ]);

  useEffect(() => {
    if(exchangeRate !== null){
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }

  },[amount, exchangeRate]);

  const handleAmountChange = (e) =>{
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  }
  const handleFromCurrencyRate = (e) =>{
    setFromCurrency(e.target.value);
  }
  const handleTOCurrencyRate = (e) =>{
    setToCurrency(e.target.value);
  }
  return (
    <>
      <div className='currency-converter'>
        <div className="box"></div>
        <div className="data">
          <h1>Currency Converter</h1>
          <div className="input-container">
            <label htmlFor="amount">Enter Amount</label>
            <input type="number" name="" id="amount" value={amount} onChange={handleAmountChange} />
          </div>
          <div className="input-container">
            <label htmlFor="from-currency">From Currency</label>
            <select name="" id="from-currency" value={fromCurrency} onChange={handleFromCurrencyRate} >
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
          <label htmlFor="to-currency">To Currency</label>
          <select name="" id="to-currency" value={toCurrency} onChange={handleTOCurrencyRate}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
          <div className="result">
            <p> {amount} {fromCurrency} is equal to {ConvertedAmount} {toCurrency}</p>
          </div>


          </div>
        </div>
      </div>
     
    </>
  )
}

export default App
