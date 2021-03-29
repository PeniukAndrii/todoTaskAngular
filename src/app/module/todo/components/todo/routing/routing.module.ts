import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from '../todo.component';
import {TodoSoloComponent} from '../components/todo-solo/todo-solo.component';
import {TodoResolveService} from '../service/resolve/todo-resolve.service';

const routes: Routes = [
  {
    path: '', component: TodoComponent, resolve: {todos: TodoResolveService},
  },
  {
      path: ':id', component: TodoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
