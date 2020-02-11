import React, { useState } from 'react';
import { weatherIcons } from '../weatherIcons';

export function Service() {
  // Hooks
  const [number, newNumber] = useState(Number);

  // openWeatherMapから東京の天気情報をjsonで取得
  const requestURL =
    'https://api.openweathermap.org/data/2.5/group?id=1850147&units=metric&appid=e648c6b8d561cd5edff8385c3da2d721';
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  // リクエストが完了した際の処理
  request.onload = function() {
    const tokyoWeather = request.response;
    const weather = tokyoWeather['list'][0]['weather'][0];
    conditionId(weather.main);
    console.log(weather.main);
  };

  function conditionId(jsonObj) {
    switch (jsonObj) {
      case 'Clouds':
        newNumber(0);
        break;
      case 'drizzle':
        newNumber(1);
        break;
      case 'rain':
        newNumber(2);
        break;
      case 'snow':
        newNumber(3);
        break;
      case 'Clear':
        newNumber(4);
        break;
      case 'thunderstorm':
        newNumber(5);
        break;
      default:
        console.log('error');
    }
  }

  return (
    <div className="wrapper">
      <div className="content">
        <h2>東京の天気</h2>
        <img src={weatherIcons[number]} alt="icon" />
      </div>
    </div>
  );
}
