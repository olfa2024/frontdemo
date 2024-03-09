import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Ajout de throwError
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  private apiUrl = 'http://localhost:8086/api/v1'; 

  constructor(private http: HttpClient) { }

  getMeals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> { 
        console.error('An error occurred:', error);
    return throwError(error); 
  }
}
