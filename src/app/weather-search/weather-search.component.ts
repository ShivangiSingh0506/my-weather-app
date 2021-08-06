// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormControlName,FormGroup} from '@angular/forms';
// import { Subject } from 'rxjs/internal/Subject';
// import { WeatherItem } from '../weather-item';
// import { WeatherService } from '../weather.service';

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/Operators';
import { WeatherItem } from '../weather-item';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
})
export class WeatherSearchComponent implements OnInit {
  private searchStream = new Subject<string>();
  data: any = {};
  constructor(private _weatherService: WeatherService) {}
  ngOnInit() {
    this.searchStream
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((input: string) =>
          this._weatherService.searchWeatherData(input)
        )
      )
      .subscribe((data) => (this.data = data));
  }
  onSubmit() {
    console.log(this.data);
    const weatherItem = new WeatherItem(
      this.data.name,
      this.data.weather[0].description,
      this.data.main.temp
    );

    this._weatherService.addWeatherItem(weatherItem);
  }
  onSearchLocation(cityName: string) {
    this.searchStream.next(cityName);
  }
}
