import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from './contact.entities';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  urlBase: string;
  httpOptions: any;
  constructor(private http: HttpClient) {
    this.urlBase = "https://londrajuan-feedback.com/Comment"
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      }),
      responseType: 'json', 
    };
  }

  sendComment(comment: Comment) {
    const rawComment = `Nombre: ${comment.name}\nEmail: ${comment.email}\nMensaje: ${comment.message}`;
    const payload = JSON.stringify(rawComment);
   
    return this.http.post(this.urlBase, payload, this.httpOptions);
  }
}