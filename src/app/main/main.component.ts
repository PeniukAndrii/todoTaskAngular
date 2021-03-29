import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  lists = [{id: null, title: '', createdAt: '', updatedAt: '', todo: ''}];
  list = {title: '', createdAt: '', updatedAt: '', todo: null};
  todos = [{id: null, title: '', body: '', finalDate: '', list: {id: null, title: '', createdAt: '', updatedAt: '', todo: ''}}];

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/get').subscribe(value => this.lists = value);
  }

  save(myForm: NgForm): void{
    this.http.post<any>('http://localhost:8080/save', this.list).subscribe(() => {
      this.http.get<any[]>('http://localhost:8080/get').subscribe(value => this.lists = value);
    });
    myForm.reset();
  }

  delete(id: number): void {
    this.http.delete<any>('http://localhost:8080/delete/' + id).subscribe(() => {
      this.http.get<any[]>('http://localhost:8080/get').subscribe(value => this.lists = value);
    });
  }

  changeNameList(myFormTwo: NgForm, listOne: any): void {
    if (myFormTwo.value.change !== undefined && myFormTwo.value.change !== null){
      listOne.title = myFormTwo.value.change;
      this.http.post<any>('http://localhost:8080/edit', listOne).subscribe(() => {
        this.http.get<any[]>('http://localhost:8080/get').subscribe(value => this.lists = value);
      });
      myFormTwo.resetForm();
    }
  }

  find(myForm: NgForm): void {
    this.http.get<any[]>('http://localhost:8080/find?text=' + myForm.value.find).subscribe(value => this.lists = value);
    myForm.reset();
  }

  oneTodo(listOne: any): void {
    this.http.get<any[]>('http://localhost:8080/todolist/' + listOne.id).subscribe(value => {
      this.todos = value;
    });
    this.router.navigate(['/todo/' + listOne.id], {
      relativeTo: this.activatedRoute,
      state: this.todos,
      queryParams: listOne
    });
  }
}
