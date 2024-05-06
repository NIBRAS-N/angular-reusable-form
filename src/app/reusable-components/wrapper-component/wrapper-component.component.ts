import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReusableFormComponent } from '../reusable-form/reusable-form.component';
@Component({
  selector: 'app-wrapper-component',
  standalone: true,
  imports: [CommonModule,CommonModule,ReusableFormComponent],
  templateUrl: './wrapper-component.component.html',
  styleUrl: './wrapper-component.component.css'
})
export class WrapperComponentComponent {
  @Input() label:string="";
  @Input() toolkit:string="";
  @Input() validation:any="";
  
  getValidationMessage(){
    const objKeys =  Object.keys(this.validation);
    console.log(this.validation)
    debugger;
    if(objKeys.length !== 0) {
      if(objKeys[0] == "required") {
        return "This Is Required Field"
      } else if (objKeys[0] == "minlength") {
        const msg =  "Min Charactors Required is " + this.validation[objKeys[0]].requiredLength;
        return msg;
      } else if (objKeys[0] == "pattern") {
        return "email is not valid";
      } 
    } else {
      return '';
    }
    return ;
  }


}
