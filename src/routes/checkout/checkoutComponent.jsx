
import CheckoutProductList from "../../components/checkoutProductList/checkoutProductListComponent";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdownContext";
import './checkoutStyles.scss'
const Checkout = () => {
    const {total}=useContext(DropdownContext)
    return ( 
    <div className="checkoutContainer">
        <div className="checkoutHeader">
            <div className="headerBlock"><span>Product</span></div>
            <div className="headerBlock"><span>Description</span></div>
            <div className="headerBlock"><span>Quantity</span></div>
            <div className="headerBlock"><span>Price</span></div>
            <div className="headerBlock"><span>Remove</span></div>
        </div>
       <CheckoutProductList/>
       <span className="total">Total:{total}$</span>
    </div> );
}
 
export default Checkout;