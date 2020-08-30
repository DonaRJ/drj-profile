import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiUrl: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Save contact message
  saveMessage(data): Observable<any> {
    const API_URL = `${this.apiUrl}/create-task`;
    return this.http.post(API_URL, data).pipe(catchError(this.error));
  }

  // Retrieve saved contact details
  getSavedMessages() {
    const API_URL = `${this.apiUrl}/contact`;
    return this.http.get(API_URL);
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
