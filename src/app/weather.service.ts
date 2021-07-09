import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { error } from "console";
import { WeatherItem } from './weather-item';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private _http: HttpClient) { }
  getWeatherItems(){
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem:WeatherItem){
    WEATHER_ITEMS.push(weatherItem)
  }

  clearWeatherItems(){
    WEATHER_ITEMS.splice(0);
  }


  searchWeatherData(cityName:string): Observable<any>{
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid={fde9c7af959670357dc9d2161d99d3fc}')
.map(response=> response.json())
  .catch.error(error);
  return Observable.throw(error.json())
});
  }
}
