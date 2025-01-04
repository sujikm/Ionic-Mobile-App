import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadioGroup, IonRadio, IonButton } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonButton, IonRadio, IonRadioGroup, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {
  selectedUnit: string = 'Metric'; 
 constructor(private ds:DataService,private router:Router) {}
  ngOnInit() {
    this.getMetricFromStorage();
  }
  async getMetricFromStorage(){
    const savedUnit = await this.ds.get('unit');
    this.selectedUnit = savedUnit || 'Metric'; // Default to "Metric" if nothing is saved
  }
  async saveUnit() {
    // Save the selected unit to the storage
    await this.ds.set('unit', this.selectedUnit);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
