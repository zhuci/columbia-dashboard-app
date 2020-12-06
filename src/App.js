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
    <MainDashboard />
  );
}

export default App;

