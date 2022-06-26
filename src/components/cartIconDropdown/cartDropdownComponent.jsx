import { useContext } from 'react';
import {Link} from 'react-router-dom'


import './cartDropdownStyles.scss';

import Button from "../Button/buttonComponent";
import CartItem from '../cartItem/cartItemComponent';
import { DropdownContext } from '../../contexts/dropdownContext';

const CartDropdown = () => {
    const {products,setIsCartOpenValue}=useContext(DropdownContext)
    return ( 
        <div className='cartDropdownContainer'>
            <div className='cartItems'>
                {products.map(item=><CartItem key={item.id} cartItem={item}/>)}
                
            </div>
            <Link  to='/checkout'><Button onClick={()=>{setIsCartOpenValue(false)}}>
            go to checkout
             </Button></Link>
        </div>
     );
}
 
export default CartDropdown;