import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h4>Help me show the logo inside the square:</h4>
      <div className='logo-wrapper'>
        <svg className="logo-one ">
          <use xlinkHref="sprite.svg#icon-ua-logo"/>
        </svg>
        <svg className="logo-two ">
          <use xlinkHref="./ua-logo.svg"/>
        </svg>
      </div>
      <div 
        className='logo-wrapper'
        style={{marginTop: '3rem'}}>
        <svg className="logo-one ">
          <use xlinkHref="sprite.svg#icon-ua-logo"/>
        </svg>
        <svg className="logo-two ">
          <use xlinkHref="./ua-logo.svg"/>
        </svg>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
