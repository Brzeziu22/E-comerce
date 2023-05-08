import { useDispatch,useSelector } from "react-redux";
import { selectCartItems } from '../../store/dropdown/dropdownSelector';
import { changeItemQuantity } from "../../store/dropdown/dropdownActions";
//styles
import { Quantity,Arrow,RemoveButton,Value,BaseSpan,ImageContainer,CheckoutItemContainer } from "./productCardCheckoutStyle";


const ProductCard = ({product}) => {
    const {name,quantity,price,imageUrl}=product;
    const dispatch=useDispatch();
    const products=useSelector(selectCartItems)

    const changeQuantity=(e)=>{
       
        dispatch(changeItemQuantity(products,product,e))
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