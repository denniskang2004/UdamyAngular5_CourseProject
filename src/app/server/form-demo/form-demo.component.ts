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
  myAnswer: string;
  genders = ['male', 'female'];
  user= {
    username:'',
    email:''
  };

  constructor() {
  }

  ngOnInit() {
  }

  //<!--dknote 184: use the form data-->
  onSubmit(form: NgForm) { // dknote : access form by local reference
    console.log(form);
    this.user.username = this.myForm.value.userGroup.username;
    this.user.email= this.myForm.value.userGroup.email;
  }

  onClick() { //dknote: another way to access form by @ViewChild
    console.log(this.myForm);
  }

  // dknote 183: setValue will override all values for all controls
  onSuggestUserName() {
    this.myForm.setValue(
      {
        userGroup: {
          email: 'default@gmail.com',
          username: 'superUser'
        },
        secret: 'pet',
        answer: '',
        gender: 'male'
      }
    );
  }

  // dknote 183: patch value can set value for one control!
  onPatchUserName() {
    this.myForm.form.patchValue(
      {
        userGroup: {
          email: 'default@gmail.com'
        }
      }
    );
  }
}
