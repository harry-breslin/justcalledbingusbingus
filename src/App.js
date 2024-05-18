import React from 'react';
import MyComponent from './components/MyComponent';
import InstallerHomepage from './components/InstallerHomepage';
import './App.css';
import ReactDomServer from 'react-dom/server';
import PopupTest from './components/alert';

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
      <header className="bingus-class">
        <h1 aria-setsize={2}>binguss bungsu bingus bnigus bnigus bingus</h1>
      </header>
      <InstallerHomepage />
    </div>
  );
}

export default App;