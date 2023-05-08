import { DROPDOWN_ACTION_TYPES } from "./dropdownTypes";

const DROPDOWN_INITIAL_STATE={
    products:[],
    isCartOpen:false,
   
   }

   export const dropdownReducer=(state =DROPDOWN_INITIAL_STATE,action={})=>{
    const {type,payload}= action;
    
    switch(type){
        case DROPDOWN_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                cartItems:payload,
            }
            case DROPDOWN_ACTION_TYPES.CHANGE_CART_OPEN:
                return{
                    ...state,
                    isCartOpen:payload,
                }
                case DROPDOWN_ACTION_TYPES.ADD_ITEM_TO_CART:
                return{
                    ...state,
                    products:payload,
                }
                case DROPDOWN_ACTION_TYPES.CHANGE_CART_ITEM_QUANTITY:
                return{
                    ...state,
                    products:payload,
                }
      default:
            return state;
    }

}