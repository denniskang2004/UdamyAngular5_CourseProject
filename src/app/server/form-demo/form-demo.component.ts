import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {
  @ViewChild('f') myForm: NgForm;
  defaultSecret = 'teacher';
  myAnswer:string;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) { // dknote : access form by local reference
    console.log(form);
  }

  onClick() { //dknote: another way to access form by @ViewChild
    console.log(this.myForm);
  }
}
