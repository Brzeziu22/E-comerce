import { useSelector } from "react-redux";

import ProductCard from "../productCardCheckout/productCardChecoutComponent";
import { selectCartItems } from '../../store/dropdown/dropdownSelector';



const CheckoutProductList = () => {
    const products=useSelector(selectCartItems);
    return ( 
        <>
             {products.map(product=>{
            return(<ProductCard key={product.id} product={product}/>)
        })}
    </>
     );
}
 
export default CheckoutProductList;