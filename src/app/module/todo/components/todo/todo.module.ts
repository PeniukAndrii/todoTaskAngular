import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {TodoComponent} from './todo.component';
import {RoutingModule} from './routing/routing.module';
import {TodoResolveService} from './service/resolve/todo-resolve.service';
import { TodoSoloComponent } from './components/todo-solo/todo-solo.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [TodoComponent, TodoSoloComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RoutingModule, TodoResolveService],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
