
import CheckoutProductList from "../../components/checkoutProductList/checkoutProductListComponent";

import { useSelector } from "react-redux";
import {CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total} from './checkoutStyles'
import { selectCartTotal } from "../../store/dropdown/dropdownSelector";


const Checkout = () => {
    const total=useSelector(selectCartTotal)
   
    return ( 
    <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock><span>Product</span></HeaderBlock>
            <HeaderBlock><span>Description</span></HeaderBlock>
            <HeaderBlock><span>Quantity</span></HeaderBlock>
            <HeaderBlock><span>Price</span></HeaderBlock>
            <HeaderBlock><span>Remove</span></HeaderBlock>
        </CheckoutHeader>
       <CheckoutProductList/>
       <Total>Total:{total}$</Total>
    </CheckoutContainer> );
}
 
export default Checkout;