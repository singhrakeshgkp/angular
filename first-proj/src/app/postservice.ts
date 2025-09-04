import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Postservice {
  FULL_URI="https://jsonplaceholder.typicode.com/posts";
  constructor(private httpClient: HttpClient) {

   }
   getPosts(){
    return this.httpClient.get(this.FULL_URI);
   }
}
