import SignUpForm from '../../components/singUpForm/signUpFormComponent';
import SignInForm from '../../components/signInForm/signInFormComponent';
import './authenticationStyle.scss'
const Authentication = () => {
   

    return (
        <div className='authenticationContainer'>
            <SignInForm/>
            <SignUpForm/>
        </div>
     );
}
 
export default Authentication;