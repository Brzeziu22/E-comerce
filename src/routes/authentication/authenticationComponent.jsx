import SignUpForm from '../../components/singUpForm/signUpFormComponent';
import SignInForm from '../../components/signInForm/signInFormComponent';
import {AuthenticationContainer} from './authenticationStyle'
const Authentication = () => {
   

    return (
        <AuthenticationContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>
     );
}
 
export default Authentication;