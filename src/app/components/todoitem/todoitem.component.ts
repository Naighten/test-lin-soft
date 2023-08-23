import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ITodoItem {
  id: number;
  title: string;
  body: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
})
export class TodoitemComponent implements OnInit {
  @Input()
  todo: ITodoItem;

  @Output()
  emitEditTodo = new EventEmitter();

  @Output()
  emitRemoveTodo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  editTodo(todo: ITodoItem) {
    this.emitEditTodo.emit(todo);
  }

  removeTodo(todo: ITodoItem) {
    this.emitRemoveTodo.emit(todo);
  }
}
