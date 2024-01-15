import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
@Input() msg:string='';
@Output() passValue=new EventEmitter<string>();

  employeeList:IEmployee[]=[
    {empid:101,name:"Madhu",city:"pune"},
    {empid:102,name:"Shihvansh",city:"Nanded"}
  ];

  sendMessage(){

     this.passValue.emit("Hi, from child");   
  }
}

export interface IEmployee{
empid:number;
name:string;
city:string;
}