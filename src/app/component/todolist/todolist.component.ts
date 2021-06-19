import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  name!: string;
  description!: string;
  constructor() { }

  ngOnInit(): void {
    this.todos=[
     { 
      name: 'ตื่นนอน',
      description: 'ตื่นนอนตอน 6 โมงเช้า',
      completed: false
      },
     { 
      name: 'อาบน้ำ',
      description: 'อาบน้ำด้วยความสบายใจ',
      completed: false
      }
    ]
  }
  deleteTodo (id:number){
    this.todos = this.todos.filter((Todo, i) => i !==id);
  }

  addTodo (){
    this.todos.push({
      name: this.name,
      description: this.description,
      completed: false
    });
    this.name = "";
    this.description = "";
  }
  
}
