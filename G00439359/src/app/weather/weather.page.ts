import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage implements OnInit {
selectedUnit: string=""
Latitude:string=""
Longitude:string=""
weatherinfo!:any;
options:HttpOptions={
  url:""
}
  constructor(private ds:DataService,private mhs:MyHttpService) { }

  ngOnInit() {
    this.getWeatherFromStorage();
  }
  async getWeatherFromStorage(){
    this.selectedUnit = await this.ds.get('unit') || 'Metric'; // Default to 'Metric' if nothing is saved
    console.log('Selected Unit:', this.selectedUnit);
    this.Latitude=await this.ds.get('latitude')
    this.Longitude=await this.ds.get('longitude')
    console.log(this.Latitude)
    console.log(this.Longitude)
    this.options.url="https://api.openweathermap.org/data/2.5/weather?lat=" + this.Latitude +"&lon="+this.Longitude+"&units="+this.selectedUnit+"&appid=43339f2e8ec0ef0ace39731fe0a1650f"
    console.log(this.options.url)
    let result=await this.mhs.get(this.options)
    this.weatherinfo=result.data
   console.log(this.weatherinfo)
  }

}