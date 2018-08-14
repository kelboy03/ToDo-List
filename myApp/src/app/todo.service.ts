import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { task: 'Check 1' },
    { task: 'Check 2' },
    { task: 'Check 3' },
  ];
 
  getTodoList() {
    return this._todoList;
  }
}
