import {CartIconContainer, BagIcon, ItemCount} from'./cartIconStyles.jsx'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdownContext';

const CartIcon = ({click}) => {
    const{setIsCartOpenValue,isCartOpen,cartCount}=useContext(DropdownContext)
    const toggleIsCartOpen=()=>{
        setIsCartOpenValue(!isCartOpen);
    }
    return ( 
    <CartIconContainer onClick={toggleIsCartOpen}>
        <BagIcon onClick={click}/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
     );
}
 
export default CartIcon;