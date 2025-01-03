import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.page.html',
  styleUrls: ['./all-countries.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardTitle, IonCardHeader,  IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AllCountriesPage implements OnInit {
united:string= "";
countryinfo!:any;
options:HttpOptions={
  url:"https://restcountries.com/v3.1/name/"
}
  constructor(private router: Router,private ds:DataService,private mhs:MyHttpService) { }

  ngOnInit() {
    this.getUN();
  }
  async getUN(){
    this.united=await this.ds.get('UN');
    this.options.url=this.options.url.concat(this.united)
   let result=await this.mhs.get(this.options)
   this.countryinfo=result.data
   //console.log(JSON.stringify(this.countryinfo))
  }

 async openCountry(c:any){
    await this.ds.set("code",c.cca2)
    await this.ds.set("name",c.name.official)
    this.router.navigate(['/news'])
  }
}
