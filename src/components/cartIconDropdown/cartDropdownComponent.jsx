import { useContext } from 'react';
import {Link} from 'react-router-dom'


import {CartDropdownContainer,CartItems,EmptyMessage} from './cartDropdownStyles';

import Button from "../Button/buttonComponent";
import CartItem from '../cartItem/cartItemComponent';
import { DropdownContext } from '../../contexts/dropdownContext';

const CartDropdown = () => {
    const {products,setIsCartOpenValue}=useContext(DropdownContext)
    return ( 
        <CartDropdownContainer>
            <CartItems>
                {products.length ? (products.map(item=><CartItem key={item.id} cartItem={item}/>)):(<EmptyMessage>Your cart is empty</EmptyMessage>)}
                
            </CartItems>
            <Link  to='/checkout'><Button onClick={()=>{setIsCartOpenValue(false)}}>
            go to checkout
             </Button></Link>
        </CartDropdownContainer>
     );
}
 
export default CartDropdown;