import { Component } from '@angular/core';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Directives:[WeatherListComponent,WeatherSearchComponent,SidebarComponent];
export class AppComponent {
  title = 'my-weather-app';
}
