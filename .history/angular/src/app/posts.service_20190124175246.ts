import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private  http:Http) { }
  allPosts(){
    //return {1 : 'linkedin', 2 : "fb", 3 :"instagram"}
    return this.http.get('http://localhost:3005/notes')   .header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  }
}

