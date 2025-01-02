import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.page.html',
  styleUrls: ['./all-countries.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AllCountriesPage implements OnInit {
united:string= "";
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.getUN();
  }
  async getUN(){
    this.united=await this.ds.get('UN');
  }

}
