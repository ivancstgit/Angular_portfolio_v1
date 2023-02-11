import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

//  url = "https://springboot-portfolio.onrender.com/api/auth/login"

//url2="/api/persona/get";

  //url2 = "https://springboot-portfolio.onrender.com/api/personas/get";
  //url2="https://reqres.in/api/users/2"
  constructor(private http: HttpClient) {}

  onLogin(obj2:any) : Observable<any> {
    const obj = JSON.stringify({
      "email": "admin@gmail.com",
      "password": "admin123"
    });
    return this.http.post("https://springboot-portfolio.onrender.com/api/auth/login", obj);
  }

  getPersonas(): Observable<any[]> {
    return this.http.get<any[]>("https://springboot-portfolio.onrender.com/api/personas/get");
  }


  getAll():Observable<any>{
  
    return this.http.get<any[]>("/api"/*, {headers: cabezera}*/)
  }


onLogin2(obj:any){
  
}


getPersonas2(){
  const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  console.log('addEventListener');
  if (this.readyState === this.DONE) {
    console.log('readystatechange');
    console.log(this.responseText);

    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log('NO DIO ERROR: Response');
      console.log(xhr.responseXML);
    } else {
      // Oh no! There has been an error with the request!
    }
  }
});
xhr.open("GET", "localhost:8080/api/persona/get");
xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("User-Agent", "Thunder Client (https://www.thunderclient.com)");
xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2NzYwNzc1NzMsImV4cCI6MTY3NjA3OTAxM30.LbrldubrkbHNVf-AzG2wFGM1XWGW6hfE43cVSgEVeVE");

console.log(xhr.send(data));
}


}