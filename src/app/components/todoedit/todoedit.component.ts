import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/api/todo.service';
import { ITodoItem } from '../todoitem/todoitem.component';

@Component({
	selector: 'app-todoedit',
	templateUrl: './todoedit.component.html',
	styleUrls: ['./todoedit.component.scss'],
})
export class TodoeditComponent implements OnInit {
	todo: FormGroup = new FormGroup({
		id: new FormControl(Number(location.pathname.slice(-1))),
		title: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
		]),
		body: new FormControl('', [Validators.required, Validators.minLength(3)]),
		isCompleted: new FormControl(false),
	});
	todoTMP: ITodoItem;

	constructor(private router: Router, private todoService: TodoService) {}
	isEdit: boolean = false;

	ngOnInit(): void {
		this.todoTMP = this.todoService.getTodo(this.todo.get('id')?.value);
		if (this.todoTMP) {
			this.todo.setValue(this.todoTMP);
			this.isEdit = true;
		}
	}

	saveTodo() {
		this.isEdit
			? this.todoService.editTodo(this.todo.value)
			: this.todoService.addTodo(this.todo.value);
		this.router.navigate(['todolist']);
	}
}
