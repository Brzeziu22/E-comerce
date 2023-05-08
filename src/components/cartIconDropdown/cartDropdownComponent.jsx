import { useContext } from 'react';
import {Link} from 'react-router-dom'



import {CartDropdownContainer,CartItems,EmptyMessage} from './cartDropdownStyles';
import { selectCartItems } from '../../store/dropdown/dropdownSelector';
import { setIsCartOpen } from '../../store/dropdown/dropdownActions';
import Button from "../Button/buttonComponent";
import CartItem from '../cartItem/cartItemComponent';
import { useSelector,useDispatch } from 'react-redux';


const CartDropdown = () => {
    const products=useSelector(selectCartItems);
    const dispatch=useDispatch();
  
    return ( 
        <CartDropdownContainer>
            <CartItems>
                {products.length ? (products.map(item=><CartItem key={item.id} cartItem={item}/>)):(<EmptyMessage>Your cart is empty</EmptyMessage>)}
            </CartItems>
            <Link  to='/checkout'><Button onClick={()=>{dispatch(setIsCartOpen(false));}}>
            go to checkout
             </Button></Link>
        </CartDropdownContainer>
     );
}
 
export default CartDropdown;