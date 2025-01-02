import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonInput} from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton,RouterLink,IonInput,FormsModule],
})
export class HomePage {
  united:string=""
  constructor(private router:Router, private ds:DataService) {}

  async openCountries(){
await this.ds.set("UN",this.united);
this.router.navigate(['/all-countries'])
  }
}
