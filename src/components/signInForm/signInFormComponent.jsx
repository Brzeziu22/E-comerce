import { useState, useContext } from "react";
import { signInAuthUserWithEmailAndPassword,createUserDocumentFromAuth,signInWithGooglePopup } from "../../utils/firebase/firebaseUtil";
import FormInput from "../formInput/formInputComponent";
import './signInFormStyle.scss';
import Button from "../Button/buttonComponent";
import { UserContext } from "../../contexts/userContext";
const defaultFormFields={
    
    email:'',
    password:'',

}
const SignInForm = () => {
   const [formFields,setFormFields]= useState(defaultFormFields);
   const {email,password}=formFields;
   const {setCurrentUser}=useContext(UserContext)
   
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
    
        try{
            const {user}=await signInAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user)
         } catch(error){
             switch(error.code){
                 case 'auth/wrong-password':
                     alert('wrong password')
                     break
                case 'auth/user-not-Found':
                    alert('User Not Found')
                    break
                default:
                    console.log(error)
             }
             if(error.code === 'auth/wrong-password'){
                 alert('Wrong Password')
             }
             else if(error.code === 'auth/user-not-found'){
                alert('Wrong Password')
            }
             console.log(error)
            
        }
    }
    const SignInWithGoogle = async ()=>{
        const {user} =await signInWithGooglePopup();
        const userDocRef=await createUserDocumentFromAuth(user)
    };
    return (
    <div className="signUpContainer">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and passowrd</span>
        <form onSubmit={handleSubmit}>
            
           
            <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email}/>
            
            <FormInput label="Password" type='password'required onChange={handleChange} name='password' value={password}/>
           <div className="buttonsContainer">
           <Button  type='submit' >Sign In</Button>
           <Button type='button'  onClick={SignInWithGoogle} buttonType='google'>Google sign in</Button>
           </div>
        </form>
    </div> );
}
 
export default SignInForm;