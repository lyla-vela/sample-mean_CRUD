import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
// import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent implements OnInit {
  title = 'app';
  tasks: any = [];
  selectedTask = null;
  newTask: any = {title:"",description:""};
  constructor(private _taskService: MyserviceService) {

  }
  ngOnInit() {
    this.newTask = {title:"", description:""}
    this.getTasksFromService()
    this.showTasks()
  }
  onSubmit() {
    let observable = this._taskService.addTask(this.newTask)
    observable.subscribe(
      (data) => {
        console.log(data);
        this.tasks = data['data'];
      }
    )
    this.newTask = {title: "", description:""}
  }
  onButtonClick(): void {
    let observable = this._taskService.getTasks()
    observable.subscribe(
      (data) => {
        this.tasks = data['data'];
      }
    )
    console.log('Click event is working');
    this.showTasks();
  }
  showTasks(): void {
    console.log("component.ts.showTasks");
    let observable = this._taskService.getTasks()
    observable.subscribe(
      (data) => {
        this.tasks = data['data'];
      }
    )
  }
  selectTask(data): void {
    console.log("component.ts.selectTask");
    console.log(data);
    console.log(data['data']);
    this.selectedTask = data;
  }
  editTask(data): void{
    console.log("component.ts.editTask");
    console.log("Editing data",data);
    console.log("Editing data",id);
    let newTask={
      _id:id,
      title:data.title,
      description:data.description
    }
    this.selectedTask = data;
    let observable = this._taskService.editTasks(newTask)
    observable.subscribe(
      (data) => {
        console.log("Got your tasks!", data);
        this.newTask = data['data'];
      },
      (error) =>{
        console.log("Error");
      }
    )
  }
  deleteTask(id): void{
    console.log("component.ts.deleteTask");
    let observable = this._taskService.deleteTasks(id)
    observable.subscribe(
      (data) => {
        console.log("Got your tasks deleted!", data);
        this.newTask = data['data'];
      },
      (error) =>{
        console.log("Error");
      }
    )

  }
  getTasksFromService() {
    let observable = this._taskService.getTasks()
    observable.subscribe( 
      (data) => {
        console.log("Got your tasks!", data);
        this.tasks = data['data'];
      },
      (error) =>{
        console.log("Error");
      }
    )
  }
}
