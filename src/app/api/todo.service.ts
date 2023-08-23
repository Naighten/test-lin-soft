import { Injectable } from '@angular/core';
import { ITodoItem } from '../components/todoitem/todoitem.component';

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	todolist: ITodoItem[] = [
		{
			id: 1,
			title: 'Написать заголовок первой задачи',
			body: 'Написать тело первой задачи',
			isCompleted: false,
		},
	];

	constructor() {}

	getTodoList(): ITodoItem[] {
		return this.todolist;
	}

	getTodo(id: number) {
		let res = this.todolist.filter((e) => e.id == id);
		return res[0];
	}

	loadTodoList(todolist: ITodoItem[]): void {
		this.todolist = todolist;
	}

	addTodo(todo: ITodoItem): void {
		this.todolist.push(todo);
	}

	editTodo(todo: ITodoItem): void {
		this.todolist = this.todolist.filter((e) => e.id != todo.id);
		this.todolist.push(todo);
	}

	removeTodo(todo: ITodoItem): void {
		this.todolist = this.todolist.filter((e) => e.id != todo.id);
	}
}
