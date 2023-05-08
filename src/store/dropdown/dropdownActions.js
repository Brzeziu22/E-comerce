import { DROPDOWN_ACTION_TYPES } from "./dropdownTypes";


export const setIsCartOpen=(payload)=>{
    return{type:DROPDOWN_ACTION_TYPES.CHANGE_CART_OPEN,payload:payload};
    
    } 
    
    const addCartItem=(products,productToAdd)=>{
        const exisitingCartItem=products.find(
            (cartItem)=>cartItem.id===productToAdd.id
        );
        if(exisitingCartItem){
            
            return products.map(cartItem=>cartItem.id===productToAdd.id ?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
            }
            console.log(productToAdd)
        return [...products,{...productToAdd,quantity:1}]    
        }
    
        const changeCartItemQuantity=(products,productToChange, e )=>{
            const exisitingCartItem=products.find(
                (cartItem)=>cartItem.id===productToChange.id
            );
          
                const type=e.target.getAttribute('name');
                
                switch(type){
                    case 'add':
                        console.log('dodawanie')
                        
                            return products.map(cartItem=>cartItem.id===productToChange.id ?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
                    case 'sub':
                        
                            if(exisitingCartItem.quantity>1){
                                return products.map(cartItem=>cartItem.id===productToChange.id ?{...cartItem,quantity:cartItem.quantity-1}:cartItem)
                            }else if(exisitingCartItem.quantity===1){
                                return products.filter(product=>product.id !== exisitingCartItem.id);
                            }
                        
                        break;
                    case 'remove':
                        return products.filter(product=>product.id !== exisitingCartItem.id);
    
                    default: 
                    break;
                }
        }





   export const addItemToCard=(products,productToAdd)=>{
     
        const newCartItems=addCartItem(products,productToAdd);
        return{type:DROPDOWN_ACTION_TYPES.ADD_ITEM_TO_CART,payload:newCartItems};
    }
   export const changeItemQuantity=(products,productToChange,name)=>{
        const newCartItemsQuantity=changeCartItemQuantity(products,productToChange,name);
        return{type:DROPDOWN_ACTION_TYPES.CHANGE_CART_ITEM_QUANTITY,payload:newCartItemsQuantity};
    }