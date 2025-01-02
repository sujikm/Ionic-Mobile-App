import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.page.html',
  styleUrls: ['./all-countries.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AllCountriesPage implements OnInit {
united:string= "";
countryinfo!:any;
options:HttpOptions={
  url:"https://restcountries.com/v3.1/name/"
}
  constructor(private ds:DataService,private mhs:MyHttpService) { }

  ngOnInit() {
    this.getUN();
  }
  async getUN(){
    this.united=await this.ds.get('UN');
    this.options.url=this.options.url.concat(this.united)
   this.countryinfo=await this.mhs.get(this.options)
   console.log(JSON.stringify(this.countryinfo.data))
  }

}
