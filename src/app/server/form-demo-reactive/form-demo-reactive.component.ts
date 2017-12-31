import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-demo-reactive',
  templateUrl: './form-demo-reactive.component.html',
  styleUrls: ['./form-demo-reactive.component.css']
})
export class FormDemoReactiveComponent implements OnInit {

  // dknote 187: set up reactive form
  genders = ['male', 'female'];
  signupForm:FormGroup;

  constructor() { }

  ngOnInit() {
    // dknote 188: create / add controls to reactive forms
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email' : new FormControl(null),
      'gender' : new FormControl('male')
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }

}
