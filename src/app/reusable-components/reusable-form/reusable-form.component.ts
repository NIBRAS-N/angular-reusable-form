import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { WrapperComponentComponent } from '../wrapper-component/wrapper-component.component';
@Component({
  selector: 'app-reusable-form',
  standalone: true,
  imports: [FormsModule,CommonModule,WrapperComponentComponent],
  templateUrl: './reusable-form.component.html',
  styleUrl: './reusable-form.component.css'
})
export class ReusableFormComponent {

  isFormSubmitted:boolean = false;
  userObj:any= {
    yourEmail:"",
    yourPassword:""
  }
  onSubmit(form:NgForm){
    // debugger;
    this.isFormSubmitted= true;
    const isFormValid = form.form.valid;
    if(!isFormValid) alert("enter all field")
    console.log(this.userObj.yourEmail);
  }
}
