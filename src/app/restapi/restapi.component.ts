import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-restapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restapi.component.html',
  styleUrl: './restapi.component.css'
})
export class RestapiComponent {
  list:any 
  constructor(private http: HttpClient){
    this.list = null;
  }

  ngOnInit(): void {
    this.http.get("https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts").subscribe(
      (data)=>{
        this.list =  data;
      }); 
  }
}
