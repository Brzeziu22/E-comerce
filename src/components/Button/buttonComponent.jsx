import {BaseButton,GoogleSignInButton,InvertedButton} from './buttonStyle.jsx'

const buttonTypeClasses={
    base:"base",
    google:"google",
    inverted:"inverted"
}

const getButton = (buttonType = buttonTypeClasses.base) => {
  return({[buttonTypeClasses.base]: BaseButton,
    [buttonTypeClasses.google]: GoogleSignInButton,
    [buttonTypeClasses.inverted]: InvertedButton,
  }[buttonType]);
}
  const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (<CustomButton {...otherProps}>{children}</CustomButton>);
  };

export default Button;