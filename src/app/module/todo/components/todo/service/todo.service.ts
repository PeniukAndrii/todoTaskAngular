import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient: HttpClient) {
  }

  getTodo(s: string): Observable<any[]>{
    return this.httpClient.get<any[]>('http://localhost:8080/todolist/' + s);
  }
}
