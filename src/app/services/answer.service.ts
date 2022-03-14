import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }
  url = environment.localUrl

  putAnswers(answers:any):Observable<any[]>{
    return this.http.put<any>(this.url+'/saveAnswers',{answers:answers})
  }
}
