import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { DataService } from '../data.service';

@Component({
  selector: 'app-feature1page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './feature1page.component.html',
  styleUrl: './feature1page.component.css'
})
export class Feature1pageComponent implements OnInit{
  name: string;
  email: string;
  password:string; 
  data: any[];

  constructor(private dataService: DataService){
    this.name =  "";
    this.email = "";
    this.password = ""; 
    this.data = []; 
  }
  ngOnInit(): void {
    this.data = this.dataService.getData();
  }
  buttonPressed(): void {
    this.dataService.addData(this.name,this.email,this.password);
  }
  removeButton(id:number):void{
    this.dataService.removeData(id);
  }
}
