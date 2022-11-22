import {initializeApp} from 'firebase/app';
import {signInWithEmailAndPassword,
    getAuth,
    signInWithRedirect, 
    signInWithPopup,GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs, DocumentSnapshot} from 'firebase/firestore'



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

  export const addCollectionAndDocuments=async (collectionKey,objectsToAdd)=>{
    const collectionRef=collection(db,collectionKey);
    const batch= writeBatch(db);

    objectsToAdd.forEach((object)=>{
        const docRef= doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    });

    await batch.commit()
    console.log('done')
  }


  export const getCategoriesAndDocuments=async()=>{
    const collectionRef=collection(db,'categories');
    const q= query(collectionRef);

    const querySnapshot= await getDocs(q);
    return querySnapshot.docs.map((docSnapshot)=>docSnapshot.data());
    // .reduce((acc,docSnapshot)=>{
    //     const {title,items}=docSnapshot.data();
    //     acc[title.toLowerCase()]=items;
    //     return acc;
    // },{})

    // return categoryMap;
  }


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

export const onAuthStateChangedListener=(callback)=>{
    onAuthStateChanged(auth, callback);
}