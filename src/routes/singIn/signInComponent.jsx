import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebaseUtil'

const SignIn = () => {
    const logGoogleUser = async ()=>{
        const {user} =await signInWithGooglePopup();
        const userDocRef=await createUserDocumentFromAuth(user)
    }

    return ( 
    
        <div>
            Logowanie
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
     );
}
 
export default SignIn;