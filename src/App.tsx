import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './pennywise.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>October Horror Binge</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
        <div>
            <p>
                It's time to watch some fucking horror movies.
            </p>
        </div>


    </div>
  );
}

export default App;
