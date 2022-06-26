import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdownContext";

import './productCardCheckoutStyles.scss'

const ProductCard = ({product}) => {
    const {name,quantity,price,imageUrl}=product;
const {changeItemQuantity}=useContext(DropdownContext)

    const changeQuantity=(e)=>{
        changeItemQuantity(product,e)
    }
    return ( 
    <div className='checkoutItemContainer'>
        <div className="imageContainer"><img src={imageUrl} alt={name} /></div>
        <span className="name">{name}</span>
        <span className="quantity"> <span className="arrow" name='sub' onClick={(e)=>changeQuantity(e)}>&#10094;</span> <span className="value"> {quantity} </span><span className="arrow" name='add' onClick={(e)=>changeQuantity(e)}>&#10095;</span></span>
        <span className="price">{price}</span>
        <div className="removeButton"><span name='remove' onClick={(e)=>changeQuantity(e)}>&#10005;</span></div>
    </div> );
}
 
export default ProductCard;