import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor(private http:HttpClient) { }
  //News Api
   Url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
  //  Url ="https://saurav.tech/NewsAPI/everything/cnn.json";
  //topHeading()
  topHeading():Observable<any>
  {
    return this.http.get(this.Url);
  }

}
