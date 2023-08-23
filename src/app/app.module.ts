import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoeditComponent } from './components/todoedit/todoedit.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
	declarations: [
		AppComponent,
		TodolistComponent,
		TodoitemComponent,
		TodoeditComponent,
	],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
