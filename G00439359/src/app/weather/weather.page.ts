import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage implements OnInit {
selectedUnit: string=""
Latitude:string=""
Longitude:string=""
weatherinfo!:any;
capital:string=""
desc:string=""
temp:number=0;
icon:string=""
options1:HttpOptions={
  url:""
}
options2:HttpOptions={
  url:""
}
  constructor(private ds:DataService,private mhs:MyHttpService,private router:Router) { }

  ngOnInit() {
    this.getWeatherFromStorage();
  }
  async getWeatherFromStorage(){
    this.selectedUnit = await this.ds.get('unit') || 'Metric'; // Default to 'Metric' if nothing is saved
    this.capital=await this.ds.get("capital");
    this.Latitude=await this.ds.get('latitude')
    this.Longitude=await this.ds.get('longitude')
    //console.log(this.Latitude)
    //console.log(this.Longitude)
    this.options1.url="https://api.openweathermap.org/data/2.5/weather?lat=" + this.Latitude +"&lon="+this.Longitude+"&units="+this.selectedUnit+"&appid=43339f2e8ec0ef0ace39731fe0a1650f"
    //console.log(this.options1.url)
    let result=await this.mhs.get(this.options1)
    this.weatherinfo=result.data
    this.desc=this.weatherinfo.weather[0].description 
    this.icon=this.weatherinfo.weather[0].icon 
    //console.log(this.icon)
    this.options2.url="https://openweathermap.org/img/wn/" + this.icon+ "@2x.png"
    //console.log(this.options2.url)
    this.temp = this.weatherinfo.main.temp;
   //console.log(this.weatherinfo)
  }
  goToHome() {
    this.router.navigate(['/all-countries']);
  }
}
