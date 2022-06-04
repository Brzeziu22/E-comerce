import {signInWithGooglePopup} from '../../utils/firebase/firebaseUtil'

const SignIn = () => {
    const logGoogleUser = async ()=>{
        const response =await signInWithGooglePopup();
        console.log(response);
    }

    return ( 
    
        <div>
            Logowanie
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
     );
}
 
export default SignIn;