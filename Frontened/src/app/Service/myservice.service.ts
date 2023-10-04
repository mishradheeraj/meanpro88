import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
url="http://localhost:9000"
  constructor(private http: HttpClient,public routs:ActivatedRoute) { }

    //================ get service function=================//
  users(){
    return this.http.get(this.url+"/fetchdata");
  }


  //=================== post service function==================//
// insertrecord(data:any):Observable<any>
// {
//   return this.http.post(this.url+"create",data);

// }
}
