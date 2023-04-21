import React from "react";

import Quote from "./Quote";
import quotes from "./quotes";
import "./App.css";
import QuoteGenerator from "./Quote generator";

function App() {
  return (
    <div class='n2'>
    <div id="bag"></div>
    <h1  id='n3'>RANDOM QUOTE GENERATOR</h1>
    <div class='n1'>
    <QuoteGenerator/>
      <Quote/>
     
      </div>
     
    </div>
    

  );

}

export default App;