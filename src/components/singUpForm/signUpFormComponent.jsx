import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebaseUtil";
import FormInput from "../formInput/formInputComponent";
import { SignUpContainer } from "./signUpFormStyles";


import Button from "../Button/buttonComponent";
const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUpForm = () => {
   const [formFields,setFormFields]= useState(defaultFormFields);
   const {displayName,email,password,confirmPassword}=formFields;

    
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert("passwords do not match")
            return;
        };
        try{
            const {user}=await createAuthUserWithEmailAndPassword(email,password);
           
            await createUserDocumentFromAuth(user,{displayName})
            setFormFields(defaultFormFields)

        } catch(error){
            if(error.code=="auth/email-already-in-use"){
                alert("email already used!")
            }
            console.log('error on user creation:',error)

        }
        createAuthUserWithEmailAndPassword(email,password)
        
    }

    return (
    <SignUpContainer>
        <h2>Dont have an account?</h2>
        <span>Sign up with your email and passowrd</span>
        <form onSubmit={handleSubmit}>
            
            <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName} />
           
            <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email}/>
            
            <FormInput label="Password" type='password'required onChange={handleChange} name='password' value={password}/>
           
            <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <Button  type='submit' >Sign Up</Button>
        </form>
    </SignUpContainer> );
}
 
export default SignUpForm;