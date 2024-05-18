import React from 'react';
import MyComponent from './components/MyComponent';
import logo from './logo.svg';
import './App.css';
import ReactDomServer from 'react-dom/server';

var counter = 1000;
function Fnnuctiondotjs() {
  if (counter == 0)
    return 'coutner == 0!!!';
  counter--;
  return (
    `<div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MyComponent name={'anem'} />
      <MyComponent name="World" />
    </div>`+ReactDomServer.renderToStaticMarkup(<MyComponent name={Fnnuctiondotjs()} />)
    
  );
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;