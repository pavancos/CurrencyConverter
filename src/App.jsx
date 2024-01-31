import React from "react";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <div className="App">
      <CurrencyConverter />
      <Analytics/>
    </div>
  );
}

export default App;
