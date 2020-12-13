import React, { Component } from 'react';
import {MainDashboard} from './containers/MainDashboard'

//google news api test
var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=a0031dc43da443b4b59015dc0fd285ac';
var req = new Request(url);
var news;

fetch(req)
    .then(function(response) {
        news = response.json()
        console.log(news);
    })





//weather api 
var API_key = '24d935cd21f75fb2c6d74e913dd257cf';
var city_name = 'New York City, US';
var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=24d935cd21f75fb2c6d74e913dd257cf';//'api.openweathermap.org/data/2.5/weather?q='+ {city_name} + '&appid='+ {API_key};
var wReq = new Request(weatherUrl);
var weather;


fetch(wReq)
    .then(function(response) {
      weather = response.json();
    })

console.log(weather);

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
