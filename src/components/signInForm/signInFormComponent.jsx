import { useState } from "react";
import { signInAuthUserWithEmailAndPassword,signInWithGooglePopup } from "../../utils/firebase/firebaseUtil";
import FormInput from "../formInput/formInputComponent";

import Button from "../Button/buttonComponent";
import { ButtonsContainer,SignInFormContainer } from "./signInFormStyle";
const defaultFormFields={
    email:'',
    password:'',

}
const SignInForm = () => {
   const [formFields,setFormFields]= useState(defaultFormFields);
   const {email,password}=formFields;
   
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
    
        try{
            const {user}=await signInAuthUserWithEmailAndPassword(email,password);
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
        await signInWithGooglePopup();
        
    };
    return (
    <SignInFormContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and passowrd</span>
        <form onSubmit={handleSubmit}>

            <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email}/>
            
            <FormInput label="Password" type='password'required onChange={handleChange} name='password' value={password}/>
           <ButtonsContainer>
           <Button  type='submit' >Sign In</Button>
           <Button type='button'  onClick={SignInWithGoogle} buttonType='google'>Google sign in</Button>
           </ButtonsContainer>
        </form>
    </SignInFormContainer> );
}
 
export default SignInForm;