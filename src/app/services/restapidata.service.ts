import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestapidataService {
  url: string = "https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts";
  list:any 

  constructor(private http: HttpClient) { 
  }
  getData(){
    return this.http.get(this.url)   
  }
  getDataWithKey(url: string){
    return this.http.get(url)   
  }
}
