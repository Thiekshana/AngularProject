import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Users } from "../_helpers/interfaces/userDetails";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm : FormGroup;
  submitted:boolean;
  usersData:Users;
  @Output() postUsersData = new EventEmitter<Users>();

  constructor(private formBuilder:FormBuilder, private router:Router) { 
    this.submitted = false;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      country:['',Validators.required],
      address:['',Validators.required]

    })

  }

  get f(){
    return this.registerForm.controls;
  }

  handleSubmit(){
    this.submitted = true;
    //console.log(this.registerForm);
    //console.log(this.registerForm.value);
    this.usersData = this.registerForm.value;
    console.log(this.usersData);
    this.postUsersData.emit(this.usersData);
    /* if(this.registerForm.status!=="INVALID"){
      confirm("Form Submitted");
      this.router.navigate(['/']);
      }

    else{
      return confirm("Please Fill up the form");
    } */
  }

}
