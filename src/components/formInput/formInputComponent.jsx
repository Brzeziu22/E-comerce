import './formInputStyles.scss'
const FormInput = ({label, ...otherProps }) => {
    return ( 
        <div className="group">
            <input {...otherProps} className='formInput'/>
            {label?
        <label className={`${otherProps.value.length ? 'shrink': ''} formInputLabel`}>{label}</label>
        :''}
        
        </div>
     );
}
 
export default FormInput;