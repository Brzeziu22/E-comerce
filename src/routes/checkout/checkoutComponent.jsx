
import CheckoutProductList from "../../components/checkoutProductList/checkoutProductListComponent";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdownContext";

import {CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total} from './checkoutStyles'


const Checkout = () => {
    const {total}=useContext(DropdownContext)
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