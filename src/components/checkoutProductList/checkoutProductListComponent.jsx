import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdownContext";
import ProductCard from "../productCardCheckout/productCardChecoutComponent";



const CheckoutProductList = () => {
    const {products,total}=useContext(DropdownContext)
    return ( 
    <table>
        {products.map(product=>{
            return <tr><ProductCard product={product}/></tr>
        })}
    <tr><td>{total}$</td></tr>
    </table> );
}
 
export default CheckoutProductList;