import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewsPage implements OnInit {
code:any;
c_name:any;
news: { country: string } = { country: '' }; 
newsinfo!:any;
options:HttpOptions={
  url:"https://newsdata.io/api/1/latest?apikey=pub_64175fa167dbc5da6ed88504bc76c5b803f9a&country="
}
  constructor(private ds:DataService,private mhs:MyHttpService,private router:Router) { }

  ngOnInit() {
    this.getNewsFromStorage();
  }
  async getNewsFromStorage(){
    this.code =await this.ds.get("code")
    this.c_name=await this.ds.get("name");
    this.options.url=this.options.url.concat(this.code)
    let result=await this.mhs.get(this.options)
    this.newsinfo=result.data.results
    const countryArray= this.newsinfo[0].country; // Extract country from the first news item
      this.news.country = Array.isArray(countryArray) && countryArray.length > 0
      ? countryArray[0].toUpperCase() // Take the first element and convert to uppercase
      : 'UNKNOWN COUNTRY'; 
    console.log(this.newsinfo)
    //console.log(this.code)
  }
  goToHome() {
    this.router.navigate(['/all-countries']);
  }
}
