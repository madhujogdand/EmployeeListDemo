import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent {

  email:string="";
  userName:string="";
  password:string="";
  confirmPassword:string="";

  addUser()
{
  console.log("Email id: "+this.email+"\nUser name: "+this.userName+"\nPassword "+this.password+"\nConfirm Password "+this.confirmPassword)
}
}

