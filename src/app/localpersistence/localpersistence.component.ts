import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { LocaldataService } from '../services/localdata.service';


@Component({
  selector: 'app-localpersistence',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './localpersistence.component.html',
  styleUrl: './localpersistence.component.css'
})
export class LocalpersistenceComponent implements OnInit{
  name: string;
  email: string;
  password:string; 
  data: any[]; 

  constructor(private localdataService: LocaldataService){
    this.name =  "";
    this.email = "";
    this.password = ""; 
    this.data = []; 
  }
  ngOnInit(): void {
    this.data = this.localdataService.getData();
    
  }
  buttonPressed(): void {
    this.localdataService.addData(this.name,this.email,this.password);
  }
  removeButton(id:number):void{
    this.localdataService.removeData(id);
  }
}
