import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const quotes = [	"Be the change you wish to see in the world. - Mahatma Gandhi",	"In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
	"The only way to do great work is to love what you do. - Steve Jobs",	
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    	"You miss 100% of the shots you don't take. - Wayne Gretzky",	
        "Believe you can and you're halfway there. - Theodore Roosevelt"];

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
