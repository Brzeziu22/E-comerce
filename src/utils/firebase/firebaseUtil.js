import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect, signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

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

  export const db =getFirestore();

  export const createUserDocumentFromAuth=async (userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapshot= await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createdAt =new Date();
        try{
            await setDoc(userDocRef,{
                displayName,email,createdAt
            });
        }catch (error){
            console.log('error creating the user', error.massage);
        }
    }
    return userDocRef;
    //if user data exist 
    //if user data do not exist{setDoc with user data }
    //if user data exist return userdoc
  }