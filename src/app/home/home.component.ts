import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  weatherData: any;

  courses = [
    {
      id: 1,
      name: 'js',
      details: 'study this course',

      img: '../../assets/js.png',
    },
    {
      id: 2,
      name: 'angular',
      details: 'study this course',
      img: '../../assets/angular.png',
    },
    {
      id: 3,
      name: 'HTML',
      details: 'study this course',
      img: '../../assets/html.png',
    },
    {
      id: 4,
      name: 'js',
      details: 'study this course',

      img: '../../assets/js.png',
    },
    {
      id: 5,
      name: 'angular',
      details: 'study this course',
      img: '../../assets/angular.png',
    },
    {
      id: 6,
      name: 'HTML',
      details: 'study this course',
      img: '../../assets/html.png',
    },
  ];

  social = [
    {
      id: 1,
      name: 'Facebook',
      img: '../../assets/facebook.jpg',
      link: 'https://www.facebook.com/almentornet/',
    },
    {
      id: 2,
      name: 'twitter',
      img: '../../assets/Twitter.png',
      link: 'https://twitter.com/almentornet',
    },
    { id: 3, name: 'LinkedIn', img: '../../assets/Instagram.png', link: '#' },
  ];

  getWeatherData() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=54ea0a537ce81be946639f972d879384'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
        console.log('data', data);
      });
  }

  setWeatherData(data: any) {
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.weatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.weatherData.temp_celcius = (
      this.weatherData.main.temp - 273.15
    ).toFixed(0);
    this.weatherData.temp_min = (
      this.weatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.weatherData.temp_max = (
      this.weatherData.main.temp_max - 273.15
    ).toFixed(0);
    this.weatherData.temp_feels_like = (
      this.weatherData.main.feels_like - 273.15
    ).toFixed(0);
  }

  constructor() {}

  ngOnInit(): void {
    this.getWeatherData();
  }
}
