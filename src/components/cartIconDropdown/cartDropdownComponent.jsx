import { useContext } from 'react';
import {Link} from 'react-router-dom'


import {CartDropdownContainer,CartItems} from './cartDropdownStyles.jsx';

import Button from "../Button/buttonComponent";
import CartItem from '../cartItem/cartItemComponent';
import { DropdownContext } from '../../contexts/dropdownContext';

const CartDropdown = () => {
    const {products,setIsCartOpenValue}=useContext(DropdownContext)
    return ( 
        <CartDropdownContainer>
            <CartItems>
                {products.map(item=><CartItem key={item.id} cartItem={item}/>)}
            </CartItems>
            <Link  to='/checkout'><Button onClick={()=>{setIsCartOpenValue(false)}}>
            go to checkout
             </Button></Link>
        </CartDropdownContainer>
     );
}
 
export default CartDropdown;