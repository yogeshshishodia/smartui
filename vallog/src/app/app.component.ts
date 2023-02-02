import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Form Validables 
registerForm:any = FormGroup;
submitted = false;
constructor( private formBuilder: FormBuilder){}
//Add user form actions
get f() { return this.registerForm.controls; }
onSubmit() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {
    console.log(this.registerForm)
    alert("Great!!");
  }
 
}
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,this.checkUpperLowerCase]]
    });
  }
  checkUpperLowerCase(control:FormControl){
    const hasUpper =/[A-Z]/.test(control.value);
    const hasLower =/[a-z]/.test(control.value);
    const isValid = hasUpper && hasLower;
    if (!isValid){
      return {checkUpperLowerCase:true};

    }else{
      return null;
    }
  }

}