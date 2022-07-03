import {Group,FormInputStyle,Label} from './formInputStyles.jsx'
const FormInput = ({label, ...otherProps }) => {
    return ( 
        <Group>
        <FormInputStyle {...otherProps} />
        {label && (
          <Label shrink={otherProps.value.length}>
            {label}
          </Label>
        )}
      </Group>
     );
}
 
export default FormInput;