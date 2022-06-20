import { useContext } from 'react';

import './cartDropdownStyles.scss';

import Button from "../Button/buttonComponent";
import CartItem from '../cartItem/cartItemComponent';
import { DropdownContext } from '../../contexts/dropdownContext';

const CartDropdown = () => {
    const {products}=useContext(DropdownContext)
    return ( 
        <div className='cartDropdownContainer'>
            <div className='cartItems'>
                {products.map(item=><CartItem key={item.id} cartItem={item}/>)}
                
            </div>
            <Button> go to checkout</Button>
        </div>
     );
}
 
export default CartDropdown;