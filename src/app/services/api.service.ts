import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.url;
  serviceUrl: {};
  constructor(
    private http: HttpClient
  ) {
    this.serviceUrl = {
      topHeadlines: this.url + 'top-headlines',
    }
   }

  //  getService for all get api
   getService(params, url): Observable<any> {
     return this.http.get(`${this.serviceUrl[url]}?${params}`).pipe(
       tap(res => {

       }),
       catchError(this.handleError('getService', []))
     )
   }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
