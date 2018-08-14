import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { task: 'Sample Task 3' },
    { task: 'Sample Task 2' },
    { task: 'Sample Task 1' },
  ];
 
  getTodoList() {
    return this._todoList;
  }
}
