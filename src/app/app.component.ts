import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StudentListDemoComponent } from './student-list-demo/student-list-demo.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponent } from './login/login.component';
import { HighlightDirective } from './highlight.directive';
import { MyMathPipe } from './my-math.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,EmployeeListComponent,StudentListDemoComponent,EmployeeComponent,RegisterComponentComponent,LoginComponent,
    HighlightDirective,MyMathPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeListDemo';

  info:string="Hi, from parent";

  isDisplay:boolean=false;

  color:string="green";

  text:string='Hello to All';
  currentDate=new Date();

  childMsg:string='';
  readMessage(msg:string)
  {
    this.childMsg=msg;
  }

  info1:string="Hi, from student parent";

  childstudmsg:string='';
  readmsg(msg1:string)
  {
    this.childstudmsg=msg1;
  }


  applyColor(){

    let colors={
      'background-color':'blue',
      'color':'white',
      'font-size':'22px'
    };
    return colors;
  }

  message:string='';
  isSuccess:boolean=false;
  isError:boolean=false;
  isWarning:boolean=false;

  Success(){
    this.isSuccess=true;
    this.isError=false;
    this.isWarning=false;
    this.message='Success Clicked';
  }

  Error(){
    this.isSuccess=false;
    this.isError=true;
    this.isWarning=false;
    this.message='Danger Clicked';
  }

  Warning(){
    this.isSuccess=false;
    this.isError=false;
    this.isWarning=true;
    this.message='Warning Clicked';
  }
}

