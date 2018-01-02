
import * as firebase from 'firebase';

export class  AuthService{

  // dknote 251: set up firebase SDK and account
  // turn on the authentication method "email/pwd"
  signupUser(email:string, pwd:string){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBLCqzzvvTlzg2i9maRyQCZ86O0re2-BXU",
        authDomain: "recipes-8f81a.firebaseapp.com"
      }
    )
  }
}
