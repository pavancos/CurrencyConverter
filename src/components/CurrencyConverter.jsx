import React, { useState } from "react";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState("");

  const convertCurrency = async () => {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/5ca2955b4275354dfbe0004b/pair/${fromCurrency}/${toCurrency}/${amount}`
      );
      const data = await response.json();
      if (data.result === "success") {
        setResult(
          `${amount} ${fromCurrency} = ${data.conversion_result.toFixed(
            2
          )} ${toCurrency}`
        );
      } else {
        setResult("Error fetching data. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Error fetching data. Please try again later.");
    }
  };

  const reverseCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    convertCurrency();
  };

  return (
    <div className="container">
      <h1>INR to USD</h1>
      <div className="input-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>
        <button onClick={reverseCurrencies}>&#8596;</button>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
        <button onClick={convertCurrency}>Convert</button>
      </div>
      <div id="result">{result}</div>
    </div>
  );
};

export default CurrencyConverter;
