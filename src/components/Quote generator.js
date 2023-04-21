import React, { useState} from "react";
import Quote from "./Quote";
import quotes from "./quotes";

const QuoteGenerator = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  
  const handleClick = () => {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));

  };
  
  return (
    <center><div id = "bag">
      <Quote quote={quotes[quoteIndex].quote} author={quotes[quoteIndex].author} />
      <button  id='n5'onClick={handleClick}>Generate Quote</button>
      <a target="_blank" rel="noopener noreferrer" 
    href= {"https://twitter.com/intent/tweet?hashtags=RandomQuotesProject&hashtags=quotes&text=" +
     encodeURI(quotes[quoteIndex].quote+ " -- " +quotes[quoteIndex].author)
    }
    id='tweet-quote' >TWITTER</a>
    </div></center>
    
  );
};

export default QuoteGenerator;