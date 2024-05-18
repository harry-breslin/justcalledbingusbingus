import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InstallerHomepage from './components/InstallerHomepage';
import FeedbackForm from './components/FeedbackForm';
import MyComponent from './components/MyComponent';
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
    <Router>
      <Routes>
        <Route path="/installer-homepage" element={
          <InstallerHomepage />
        } />
        <Route path="/feedback-form" element={
          <FeedbackForm />
        } />
        <Route path="/" element={
          <Navigate to="/installer-homepage" /> /* navigate immediately to /installer-homepage on pageload */
        } />
      </Routes>
    </Router>
  );
}

export default App;