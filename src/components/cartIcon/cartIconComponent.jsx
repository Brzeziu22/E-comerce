import {CartIconContainer, BagIcon, ItemCount} from'./cartIconStyles.jsx'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'

import { useDispatch,useSelector } from 'react-redux'

import {setIsCartOpen} from '../../store/dropdown/dropdownActions'
import {selectIsCartOpen,selectCartCount} from '../../store/dropdown/dropdownSelector'
const CartIcon = ({click}) => {

    const dispatch =useDispatch();
    const cartCount= useSelector(selectCartCount);
    const isCartOpen=useSelector(selectIsCartOpen);

    console.log('isCartOpen:'+isCartOpen)

    const toggleIsCartOpen=()=>{
        console.log('toggle is cartOpen'+ !isCartOpen);
        dispatch(setIsCartOpen(!isCartOpen));
    }
    return ( 
    <CartIconContainer onClick={toggleIsCartOpen}>
        <BagIcon onClick={click}/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
     );
}
 
export default CartIcon;