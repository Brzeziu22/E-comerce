import './cartItemStyles.scss'
import { CartItemContainer,ItemDetails,Name } from './cartItemsStyles';
const CartItem = ({cartItem}) => {
   const {name,quantity,imageUrl,price} =cartItem;
    return (    
    <CartItemContainer>
            
            <img src={imageUrl} alt={name}/>
            <ItemDetails>

            <Name>{name}</Name>
            <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
            
    </CartItemContainer> 
     );
}
 
export default CartItem;