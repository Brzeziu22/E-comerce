import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdownContext";
import ProductCard from "../productCardCheckout/productCardChecoutComponent";



const CheckoutProductList = () => {
    const {products}=useContext(DropdownContext)
    return ( 
        <>
             {products.map(product=>{
            return(<ProductCard key={product.id} product={product}/>)
        })}
    </>
     );
}
 
export default CheckoutProductList;