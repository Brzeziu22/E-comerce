import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect, signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCcTZNllPDNxe4vgwJLctyMBJ4sN_2Ec1g",
    authDomain: "eshopdb-54f11.firebaseapp.com",
    projectId: "eshopdb-54f11",
    storageBucket: "eshopdb-54f11.appspot.com",
    messagingSenderId: "1098891930322",
    appId: "1:1098891930322:web:f655432cdb5cca14bedb0b"
  };


  const firebaseApp = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:"select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)