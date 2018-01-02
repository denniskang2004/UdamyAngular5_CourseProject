import * as firebase from 'firebase';

export class AuthService {

  signupUser(email: string, pwd: string) {
    firebase.auth().createUserWithEmailAndPassword(email, pwd)
      .then(
        () => console.log('signup done !')
      )
      .catch(
        error => console.error('Error signing up:'+ JSON.stringify(error))
      );
  }

  signinUser(email: string, psw: string) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, psw)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.error('Error signining in:'+ JSON.stringify(error))
      );
  }
}
