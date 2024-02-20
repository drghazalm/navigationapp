import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

class account{
  name: string;
  email: string;
  password: string 

  constructor(name: string, email: string, password: string){
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

@Component({
  selector: 'app-feature1page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './feature1page.component.html',
  styleUrl: './feature1page.component.css'
})
export class Feature1pageComponent {
  name: string;
  email: string;
  password:string; 

  list: account[];

  constructor(){
    this.name =  "";
    this.email = "";
    this.password = "";  
    this.list = JSON.parse(localStorage.getItem('list') || '[{}]');
  }

  buttonPressed(){
    this.list.push(new account(this.name,this.email,this.password));
    localStorage.setItem("list", JSON.stringify(this.list));
  }
}
