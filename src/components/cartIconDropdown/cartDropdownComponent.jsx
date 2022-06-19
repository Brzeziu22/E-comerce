import './cartDropdownStyles.scss';

import Button from "../Button/buttonComponent";

const CartDropdown = () => {
    return ( 
        <div className='cartDropdownContainer'>
            <div className='cartItems' />
            <Button> go to checkout</Button>
        </div>
     );
}
 
export default CartDropdown;