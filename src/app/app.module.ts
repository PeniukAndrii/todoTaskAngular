import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import { TodoComponent } from './module/todo/components/todo/todo.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'todo', loadChildren: () => import('./module/todo/components/todo/todo.module').then(m => m.TodoModule)
      },
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
