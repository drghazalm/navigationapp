import { Component } from '@angular/core';
import { RestapidataService } from '../services/restapidata.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restapi',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './restapi.component.html',
  styleUrl: './restapi.component.css'
})
export class RestapiComponent {
  list:any;
  baseurl: string; 
  apikey: string; 
  constructor(private restapidataService:RestapidataService){
    this.list = [];
    this.baseurl = "";
    this.apikey = "";
    this.restapidataService.getData().subscribe((data)=> this.list =  data);
  }

  get(){
    this.restapidataService.getDataWithKey(this.baseurl+this.apikey).subscribe((data)=> {
      this.list =  data;
    });
  }
  getObjectKeys(obj: any): string[] {
    if (!obj) {
      return []; 
    }
    return Object.keys(obj);
  }
}
