import * as firebase from 'firebase';

export class AuthService {
  token: string;

  signupUser(email: string, pwd: string) {
    firebase.auth().createUserWithEmailAndPassword(email, pwd)
      .then(
        () => alert('Logged In Successfully!')
        //() => console.log('signup done !')
      )
      .catch(
        error => {
          console.error('Error signing up:' + JSON.stringify(error));
          alert('Register Failed!');
        }
      );
  }

  signinUser(email: string, psw: string) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, psw)
      .then(
        response => {
          //console.log(response)
          alert('Logged In Successfully!');

          //dknote 255: get token and save
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => {
          console.error('Error signining in:' + JSON.stringify(error));
          alert('Sign In Failed!');
        }
      );
  }

  // dknote 254: config firebase rules to use 'auth'
  /* step1:
    "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
   */

  // step2: save token for future calls when sign in
  getToken() {
    return this.token;
  }

  // dknote 256: show/hide some buttons based on authentication
  isAuthenicated() {
    return this.token != null;
  }
}
