import {signInWithGooglePopup,createUserDocumentFromAuth,auth} from '../../utils/firebase/firebaseUtil'
import SignUpForm from '../../components/singUpForm/signUpFormComponent';

const SignIn = () => {
    const logGoogleUser = async ()=>{
        const {user} =await signInWithGooglePopup();
        const userDocRef=await createUserDocumentFromAuth(user)
    };
   

    return (
        <div>
            Logowanie
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm/>
        </div>
     );
}
 
export default SignIn;