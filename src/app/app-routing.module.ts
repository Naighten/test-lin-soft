import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoeditComponent } from './components/todoedit/todoedit.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
	{ path: 'todolist', component: TodolistComponent },
	{ path: 'todoedit/:id', component: TodoeditComponent },
	{ path: '', redirectTo: 'todolist', pathMatch: 'full' },
	{ path: '**', redirectTo: 'todolist', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
