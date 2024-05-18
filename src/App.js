import React from 'react';
import MyComponent from './components/MyComponent';
import logo from './logo.svg';
import './App.css';

function Fnnuctionjs() {
  return (
    `<div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MyComponent name={'anem'} />
      <MyComponent name="World" />
    </div>`
  );
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MyComponent name={Fnnuctionjs()} />
      <MyComponent name="World" />
    </div>
  );
}

export default App;