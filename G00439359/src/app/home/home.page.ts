import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonInput} from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonInput,FormsModule,CommonModule],
})
export class HomePage {
  united:string=""
  errorMessage: string = '';
  constructor(private router:Router, private ds:DataService) {}

  async openCountries(){
    if (!this.united || this.united.trim() === '') {
      this.errorMessage = 'Please enter a country name to search.';
    } else {
      this.errorMessage = '';
await this.ds.set("UN",this.united);
this.router.navigate(['/all-countries'])
  }

  }
  goToSettings() {
    this.router.navigate(['/settings']);
    console.log("image clicked")
  }
  }
