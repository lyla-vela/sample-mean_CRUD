import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  tasks = [];
  constructor(private _http: HttpClient) {
   // this.getTasks();
   }
  getTasks() {
    return this._http.get('/tasks');
   }
  addTask(newTask){

     return this._http.post('/task', newTask);
   }
  editTasks(newTask){

    return this._http.put('/tasks/:id',newTask);
  }
  deleteTasks(newTask){

    return this._http.delete('/tasks/:id',newTask);
  }
}
