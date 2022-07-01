import { CartItemContainer,ProductImg,ItemDetails,Name} from  './cartItemStyles.jsx'

const CartItem = ({cartItem}) => {
   const {name,quantity,imageUrl,price} =cartItem;
    return (    
    <CartItemContainer>
            
            <ProductImg src={imageUrl} alt={name}/>
            <ItemDetails>

            <Name>{name}</Name>
            <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
            
    </CartItemContainer> 
     );
}
 
export default CartItem;