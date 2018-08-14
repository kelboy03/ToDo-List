import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public taskField: string = '';
  public taskList: Array<any>

  constructor(
    private _todoService: TodoService
  ){
    this.taskList = this._todoService.getTodoList();
  }

  addTodo(){
    if(this.taskField){
      this.taskList.unshift({
        task: this.taskField, 
        isCheck: false
      });
    }
    this.taskField = '';
  }

}
