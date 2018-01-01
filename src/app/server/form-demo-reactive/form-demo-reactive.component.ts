import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-form-demo-reactive',
  templateUrl: './form-demo-reactive.component.html',
  styleUrls: ['./form-demo-reactive.component.css']
})
export class FormDemoReactiveComponent implements OnInit {

  // dknote 187: set up reactive form
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['Yuan', 'Dennis'];

  constructor() {
  }

  ngOnInit() {
    // dknote 188: create / add controls to reactive forms
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(
          null,
          [Validators.required,// dknote: add validation
            this.validateForbiddenName.bind(this)]  //dknote 195: custom validator
        ),
        'email': new FormControl(
          null,
          [Validators.required, Validators.email],//dknote: add validation
          this.validateForbiddenEmail // dknote 197: add Async validator as 3rd parameter
        )
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]) //dknote: add form array as container for dynamically created form controls

    });

    // dknote 198: react to form's Status changes, Value changes
    // 2 observable we can watch!
    this.signupForm.statusChanges.subscribe(
      (status)=>{
        console.log('status changed to: '+status);
      }
    );
    this.signupForm.valueChanges.subscribe(
      (value)=>{
        console.log('value changed to: '+JSON.stringify(value));
      }
    );


  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  // dknote 195: custom validator
  validateForbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return {
        'nameIsForbidden': true
      };
    }
    else {
      return null; // important: return null, not false
    }
  }

  // dknote 197: Async validator
  validateForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({'emailIsFobidden': true});
          } else {
            resolve(null);
          }
        }, 2000);
      }
    );
    return promise;
  }
}
