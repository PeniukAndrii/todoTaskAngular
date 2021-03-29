import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TodoService} from '../todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoResolveService implements Resolve<any>{

  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.todoService.getTodo(state.root.queryParams.id);
  }
}
