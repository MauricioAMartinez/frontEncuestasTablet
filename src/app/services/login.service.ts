import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  url = environment.localUrl
  getUser(document:String):Observable<any[]>{
    return this.http.post<any[]>(this.url+'/login',{'document':document})
  
  }

  
}
function catchError(arg0: (error: any) => Observable<never>): import("rxjs").OperatorFunction<any[], any[]> {
  throw new Error('Function not implemented.');
}

