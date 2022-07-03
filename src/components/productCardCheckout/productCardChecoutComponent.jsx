import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdownContext";

import {ImageContainer,CheckoutItemContainer,Name,Quantity,Price,Value,Arrow,RemoveButton} from './productCardCheckoutStyles'

const ProductCard = ({product}) => {
    const {name,quantity,price,imageUrl}=product;
const {changeItemQuantity}=useContext(DropdownContext)

    const changeQuantity=(e)=>{
        changeItemQuantity(product,e)
    }
    return ( 
    <CheckoutItemContainer>
        <ImageContainer><img src={imageUrl} alt={name} /></ImageContainer>
        <Name>{name}</Name>
        <Quantity> <Arrow name='sub' onClick={(e)=>changeQuantity(e)}>&#10094;</Arrow> <Value> {quantity} </Value><Arrow name='add' onClick={(e)=>changeQuantity(e)}>&#10095;</Arrow></Quantity>
        <Price>{price}</Price>
        <RemoveButton><span name='remove' onClick={(e)=>changeQuantity(e)}>&#10005;</span></RemoveButton>
    </CheckoutItemContainer> );
}
 
export default ProductCard;