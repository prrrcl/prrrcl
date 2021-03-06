import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBcuXtWQgbDfGUfYRruGngTQhtA1x6gQPU',
  authDomain: 'prrrcl-e1ede.firebaseapp.com',
  projectId: 'prrrcl-e1ede',
  storageBucket: 'prrrcl-e1ede.appspot.com',
  messagingSenderId: '480496342326',
  appId: '1:480496342326:web:4ddb45e9c10eac1b1a8f97',
  measurementId: 'G-J23DZDS3FR'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const autoLogin = () => {
  firebase.auth().signInAnonymously()
    .then(() => {

    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('ERROR', error)
    })
}
