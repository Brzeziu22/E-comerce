import './cartIconStyles.scss'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdownContext';

const CartIcon = ({click}) => {
    const{setIsCartOpenValue,isCartOpen}=useContext(DropdownContext)
    const toggleIsCartOpen=()=>{
        setIsCartOpenValue(!isCartOpen);
    }
    return ( 
    <div className='cartIconContainer' onClick={toggleIsCartOpen}>
        <ShoppingBag className='shoppingIcon' onClick={click}/>
        <span className='itemCount'>0</span>
    </div>
     );
}
 
export default CartIcon;