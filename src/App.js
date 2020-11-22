import React, { Component } from 'react';
import {MainDashboard} from './containers/MainDashboard'

//google news api test
var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=a0031dc43da443b4b59015dc0fd285ac';

var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn React


        </a>
      </header>
    </div>
  );
}

export default App;
