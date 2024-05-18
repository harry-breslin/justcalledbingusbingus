import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstallerHomepage from './components/InstallerHomepage';
import FeedbackForm from './components/FeedbackForm';
import Homepage from './components/Homepage';
import MyComponent from './components/MyComponent';
import './App.css';
import ReactDomServer from 'react-dom/server';
import PopupTest from './components/alert'; /* what is this bro */


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
    <Router>
      <Routes>
        <Route path="/" element={
          <Homepage />
        } />
        <Route path="/installer-homepage" element={
          <InstallerHomepage />
        } />
        <Route path="/feedback-form" element={
          <FeedbackForm />
        } />
      </Routes>
    </Router>
  );
}

export default App;