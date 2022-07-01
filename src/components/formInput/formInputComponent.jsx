import {Group,FormInputStyle,Label} from './formInputStyles.jsx'
const FormInput = ({label, ...otherProps }) => {
    return ( 
        <Group>
            <FormInputStyle {...otherProps} />
            {label?
        <Label srink={otherProps.value.length} className={`${otherProps.value.length ? 'shrink': ''} formInputLabel`}>{label}</Label>
        :''}
        
        </Group>
     );
}
 
export default FormInput;