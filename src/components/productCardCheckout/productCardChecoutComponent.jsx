import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdownContext";

//styles
import { Quantity,Arrow,RemoveButton,Value,BaseSpan,ImageContainer,CheckoutItemContainer } from "./productCardCheckoutStyle";


const ProductCard = ({product}) => {
    const {name,quantity,price,imageUrl}=product;
const {changeItemQuantity}=useContext(DropdownContext)

    const changeQuantity=(e)=>{
        changeItemQuantity(product,e)
    }
    return ( 
    <CheckoutItemContainer>
        <ImageContainer><img src={imageUrl} alt={name} /></ImageContainer>
        <BaseSpan>{name}</BaseSpan>
        <Quantity> <Arrow name='sub' onClick={(e)=>changeQuantity(e)}>&#10094;</Arrow> <Value> {quantity} </Value><Arrow name='add' onClick={(e)=>changeQuantity(e)}>&#10095;</Arrow></Quantity>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton><span name='remove' onClick={(e)=>changeQuantity(e)}>&#10005;</span></RemoveButton>
    </CheckoutItemContainer> );
}
 
export default ProductCard;