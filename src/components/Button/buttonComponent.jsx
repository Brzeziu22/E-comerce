
import './buttonStyle.scss'
import { BaseButton,GoogleSignInButton,InvertedButton } from './buttonStyle';
const buttonTypeClasses={
    base:`base`,
    google:"google",
    inverted:"inverted"
}


const getButton = (buttonType = buttonTypeClasses.base) =>
  ({
    [buttonTypeClasses.base]: BaseButton,
    [buttonTypeClasses.google]: GoogleSignInButton,
    [buttonTypeClasses.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({children,buttonType, ...otherprops}) => {
    const CurrentButton=getButton(buttonType)
    return ( <CurrentButton{...otherprops}>{children}</CurrentButton> );
}
 
export default Button; 
