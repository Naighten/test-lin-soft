import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/api/todo.service';
import { ITodoItem } from '../todoitem/todoitem.component';

@Component({
	selector: 'app-todolist',
	templateUrl: './todolist.component.html',
	styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit, OnDestroy {
	todolist: ITodoItem[];
	sortedtodolist: ITodoItem[];

	constructor(private router: Router, private todoService: TodoService) {}

	ngOnInit(): void {
		this.getTodoList();
	}

	getTodoList() {
		this.todolist = this.todoService.getTodoList();
		this.sortedtodolist = [...this.todolist];
		console.log(1, this.todolist);
		console.log(2, this.sortedtodolist);
	}

	addTodo() {
		this.router.navigate(['todoedit', new Date().getTime()]);
	}

	editTodo(todo: ITodoItem) {
		this.router.navigate(['todoedit', todo.id]);
	}

	removeTodo(todo: ITodoItem) {
		this.todoService.removeTodo(todo);
		this.getTodoList();
	}

	ngOnDestroy(): void {
		this.todoService.loadTodoList(this.todolist);
	}

	sort(idx: number) {
		switch (idx) {
			case 0:
				this.sortedtodolist = [...this.todolist];
				break;
			case 1:
				this.sortedtodolist = [...this.todolist].filter(
					(e) => e.isCompleted == false
				);
				break;
			case 2:
				this.sortedtodolist = [...this.todolist].filter(
					(e) => e.isCompleted == true
				);
				break;
			default:
				this.sortedtodolist = [...this.todolist];
				break;
		}
	}
}
