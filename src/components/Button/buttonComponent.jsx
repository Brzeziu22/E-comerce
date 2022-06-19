import './buttonStyle.scss'

const buttonTypeClasses={
    google:"googleSignIn",
    inverted:"inverted"
}

const Button = ({children,buttonType, ...otherprops}) => {

    return ( <button className={`buttonContainer ${buttonTypeClasses[buttonType]}`} {...otherprops}>{children}</button> );
}
 
export default Button;