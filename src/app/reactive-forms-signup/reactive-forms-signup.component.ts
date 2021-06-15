import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-signup',
  templateUrl: './reactive-forms-signup.component.html',
  styleUrls: ['./reactive-forms-signup.component.css']
})
export class ReactiveFormsSignupComponent implements OnInit {


  myForm:FormGroup
  constructor() { 

    this.myForm = new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required]),
      confirmPassword : new FormControl('',[Validators.required]),

    })

  }

  ngOnInit(): void {
  }

  saveUser(){
    console.log("save user Called....") 
    console.log(this.myForm.value)
    console.log("valid?? ",this.myForm.valid)

  }
}
