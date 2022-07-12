import { useEffect } from "react";
import { createContext,useState, useReducer} from "react";


const addCartItem=(products,productToAdd)=>{
    const exisitingCartItem=products.find(
        (cartItem)=>cartItem.id===productToAdd.id
    );
    if(exisitingCartItem){
        return products.map(cartItem=>cartItem.id===productToAdd.id ?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
        }

    return [...products,{...productToAdd,quantity:1}]    
    }

    const changeCartItemQuantity=(products,productToChange, e )=>{
        const exisitingCartItem=products.find(
            (cartItem)=>cartItem.id===productToChange.id
        );
            const type=e.target.getAttribute('name');
            switch(type){
                case 'add':
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

    const CART_ACTION_TYPES={
        ADD_ITEM_TO_CART:'ADD_ITEM_TO_CART',
        CHANGE_CART_ITEM_QUANTITY:'CHANGE_CART_ITEM_QUANTITY',
        CHANGE_CART_OPEN:'CHANGE_CART_OPEN',
        SET_TOTAL:'SET_TOTAL',
        SET_CART_COUNT:'SET_CART_COUNT',
        SET_CART_ITEMS:'SET_CART_ITEMS'
        

    }

    const CartReducer=(state,action)=>{
        const {type,payload}= action;
        
        switch(type){
            case CART_ACTION_TYPES.SET_CART_ITEMS:
                return{
                    ...state,
                    ...payload,
                }
                    case 'CHANGE_CART_OPEN':
                        return {...state,isCartOpen:!state.isCartOpen};
                        
          default:
                throw new Error('Unhandled type in CartReducer:'+type);
        }

    }


export const DropdownContext = createContext({
    isCartOpen:false,
    setIsCartOpenValue:()=>null,
    products:[],
    addItemToCard:()=>{},
    cartCount:0,
    changeItemQuantity:()=>{},
    total:0
   });
   
   const INITIAL_STATE={
    products:[],
    isCartOpen:false,
    cartCount:0,
    total:0
   }

   export const DropdownProvider=({children})=>{
    //const [products,setProducts]=useState([]);
    //const [isCartOpen,setIsCartOpenValue]=useState(false);
    //const [cartCount,setCartCount]=useState(0);
    //const [total,setTotal]=useState(0);


       const [{products,isCartOpen,cartCount,total},dispatch]=useReducer(CartReducer,INITIAL_STATE); 
    useEffect(()=>{
        products && products && updateCartItemsReducer(products);
       // setCartCount(newCartCount)
    },[products])

    useEffect(()=>{
        products && updateCartItemsReducer(products);
       // setTotal(newTotal)
    },[products])

    const updateCartItemsReducer = (products) => {
        const newCartCount = products.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
    
        const newCartTotal = products.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        );
    
        const payload = {
          products,
          cartCount: newCartCount,
          cartTotal: newCartTotal,
        };
    
        dispatch({type:'SET_CART_ITEMS', payload:payload});
      };

    const setIsCartOpenValue=(value)=>{
        dispatch({type:'CHANGE_CART_OPEN',payload:{products:products,valueToSet:value}});
    }
    const addItemToCard=(productToAdd)=>{
        const newCartItems=addCartItem(products,productToAdd)
        updateCartItemsReducer(newCartItems)
    }
    const changeItemQuantity=(productToChange,e)=>{
        const newCartItemsQuantity=changeCartItemQuantity(products,productToChange,e);
        updateCartItemsReducer(newCartItemsQuantity)
    }
    const value={isCartOpen,setIsCartOpenValue,products,addItemToCard,cartCount,changeItemQuantity,total}
return(
    <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
)
}