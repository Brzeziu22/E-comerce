import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdownContext";

const Checkout = () => {
    const {products}=useContext(DropdownContext)
    return ( 
    <div>
        {products.map(product=>{
            return(<div>{product.name}x {product.quantity}</div>)
        })}
    </div> );
}
 
export default Checkout;