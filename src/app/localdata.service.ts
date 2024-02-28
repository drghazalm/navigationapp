import { Injectable } from '@angular/core';
class account{
  id: number;
  name: string;
  email: string;
  password: string;
  constructor(id:number, name: string, email: string, password: string){
    this.id = id; 
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {
  list: account[];
  private nextId: number;
  constructor() { 
    this.nextId = parseInt(localStorage.getItem('nextId') || '1', 10);
    this.list = JSON.parse(localStorage.getItem('list') || '[{}]');
  }
  size(): number{
    return this.list.length;
  }
  getData(){
    return this.list;
  }
  addData(name: string, email: string, password: string){
    this.list.push(new account(this.nextId++,name,email,password));
    this.updateLocalStroage();
  }
  removeData(id: number): void {
    const index = this.list.findIndex(item => item.id === id);
    if (index !== -1) 
      this.list.splice(index, 1);
    this.updateLocalStroage();
  }
  updateLocalStroage():void{
    localStorage.setItem("list", JSON.stringify(this.list));
    localStorage.setItem("nextId", ""+this.nextId);
  }
}
