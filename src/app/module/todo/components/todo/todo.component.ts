import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo = {id: null, title: '', body: '', finalDate: '', list: {id: null, title: '', createdAt: '', updatedAt: '', todo: ''}};
  todos = [{id: null, title: '', body: '', finalDate: '', list: {id: null, title: '', createdAt: '', updatedAt: '', todo: ''}}];

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
     this.activatedRoute.params.subscribe(() => {
       console.log(this.router.getCurrentNavigation().extras.queryParams);
       this.todo.list = this.router.getCurrentNavigation().extras.queryParams as any;
     });
      this.http.get<any>('http://localhost:8080/todolist/' + this.todo.list.id).subscribe((value1) => this.todos = value1);
  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/todolist/' + this.todo.list.id).subscribe((value1) => this.todos = value1);
  }

  saveTodo(myForm: any): void {
    this.activatedRoute.params.subscribe(() => {
      this.http.post<any>('http://localhost:8080/todosave/' + this.todo.list.id, this.todo )
        .subscribe(() => {
          this.http.get<any[]>('http://localhost:8080/todolist/' + this.todo.list.id).subscribe((value1) => this.todos = value1);
        });
    });
    myForm.reset();
  }

  saveChange(myTodoForm: NgForm, todo: any): void {
    if (myTodoForm.value.body !== undefined &&
      myTodoForm.value.body !== null ||
      myTodoForm.value.title !== undefined &&
      myTodoForm.value.title){
      todo.title = myTodoForm.value.title;
      todo.body = myTodoForm.value.body;
      this.http.post<any>('http://localhost:8080/todochange/' + todo.id, todo).subscribe(() => {
        this.http.get<any[]>('http://localhost:8080/todolist/' + this.todo.list.id).subscribe(value => this.todos = value);
      });
      myTodoForm.reset();
    }
  }

  delete(id: number): void {
    this.http.delete<any>('http://localhost:8080/tododelte/' + this.todo.list.id + '/todo/' + id).subscribe(() => {
      console.log('delete');
      this.http.get<any[]>('http://localhost:8080/todolist/' + this.todo.list.id).subscribe(value => this.todos = value);
    });
  }
}
