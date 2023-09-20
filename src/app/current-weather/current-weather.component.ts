import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Dhaka',
      country: 'Bangladesh',
      date: new Date(),
      image: 'assets/sun.svg',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit() {}
}
