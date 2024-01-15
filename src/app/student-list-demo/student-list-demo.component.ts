import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-list-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list-demo.component.html',
  styleUrl: './student-list-demo.component.css'
})
export class StudentListDemoComponent {
  @Input() msg:string='';
  @Output() passValue=new EventEmitter<string>();
     studentList:IStudent[]=[
      {sid:1,name:"Radha",city:"Hyderabad"},
      {sid:2,name:"Ashu",city:"Nanded"},
      {sid:3,name:"Neha",city:"Pune"},
     ];

     sendMessage()
     {
       this.passValue.emit("Hi, from student child");
     }
}

export interface IStudent{
    sid:number;
    name:string;
    city:string;
}
