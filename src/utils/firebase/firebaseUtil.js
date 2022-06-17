import {initializeApp} from 'firebase/app';
import {signInWithEmailAndPassword,
    getAuth,
    signInWithRedirect, 
    signInWithPopup,GoogleAuthProvider,
    createUserWithEmailAndPassword,
signOut
} from 'firebase/auth'
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

  const googleProvider= new GoogleAuthProvider();
  googleProvider.setCustomParameters({
      prompt:"select_account",
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,googleProvider)
  export const signInWithGoogleRedirect=()=> signInWithRedirect(auth,googleProvider);
  
  export const db =getFirestore();

  export const createUserDocumentFromAuth=async (userAuth,additionalInformation={})=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapshot= await getDoc(userDocRef);


    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createdAt =new Date();
        try{
            await setDoc(userDocRef,{
                displayName,email,createdAt,...additionalInformation,
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

  export const createAuthUserWithEmailAndPassword= async (email,password)=>{
      if(!email|| !password) return;
    
    
      return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInAuthUserWithEmailAndPassword= async (email,password)=>{
    if(!email|| !password) return;
  
  
    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser=()=>{
    signOut(auth)
}