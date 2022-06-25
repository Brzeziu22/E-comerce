import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdownContext";
const ProductCard = ({product}) => {
const {changeItemQuantity}=useContext(DropdownContext)

    const changeQuantity=(e)=>{
        console.log(e.target.getAttribute('name'))
        changeItemQuantity(product,e)
    }
    return ( <>
        <td><img src={product.imageUrl} alt={product.name}/></td><td>{product.name}</td><td><button name='sub' onClick={(e)=>changeQuantity(e)}>-</button>{product.quantity}<button name='add' onClick={(e)=>changeQuantity(e)}>+</button></td><td>{product.price}$</td><td><button name='remove' onClick={(e)=>changeQuantity(e)}>X</button></td>
    </> );
}
 
export default ProductCard;