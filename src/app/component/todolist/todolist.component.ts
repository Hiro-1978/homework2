import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  inputTodo:String = "";
  constructor() { }

  ngOnInit(): void {
    this.todos=[
     { 
      content: 'ตื่นนอน',
      completed: false
      },
     { 
      content: 'อาบน้ำ',
      completed: false
      }
    ]
  }
  deleteTodo (id:number){
    this.todos = this.todos.filter((v, i) => i !==id);
  }

  addTodo (){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = ""
  }
  
}
