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
        SET_CART_COUNT:'SET_CART_COUNT'
        

    }

    const CartReducer=(state,action)=>{
        const {type,payload}= action;
        const {products}=payload;
        const {isCartOpen}=state;
        switch(type){
            case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
                const {productToAdd}=payload;
                const exisitingCartItem=products.find(
                    (cartItem)=>cartItem.id===productToAdd.id
                );
                if(exisitingCartItem){
                    return {...state,products:products.map(cartItem=>cartItem.id===productToAdd.id ?{...cartItem,quantity:cartItem.quantity+1}:cartItem)}
                    }
                return{...state,products:[...products,{...productToAdd,quantity:1}]}    
            case CART_ACTION_TYPES.CHANGE_CART_ITEM_QUANTITY:  
                    const {productToChange, e}=payload;
                    const exisitingCartItem2=products.find(
                        (cartItem)=>cartItem.id===productToChange.id
                    );
                const eventTargetName=e.target.getAttribute('name');
                switch(eventTargetName){
                    case 'add':
                            return {...state,products:products.map(cartItem=>cartItem.id===productToChange.id ?{...cartItem,quantity:cartItem.quantity+1}:cartItem)}
                    case 'sub':
                        
                            if(exisitingCartItem2.quantity>1){
                                return {...state,products:products.map(cartItem=>cartItem.id===productToChange.id ?{...cartItem,quantity:cartItem.quantity-1}:cartItem)}
                            }else if(exisitingCartItem2.quantity===1){
                                return {...state,products:products.filter(product=>product.id !== exisitingCartItem2.id)};
                            }
                        
                        break;
                    case 'remove':
                        return {...state,products:products.filter(product=>product.id !== exisitingCartItem2.id)};
                    default:
                    throw new Error('Error in change item Quantity')    
                        }
                    case 'CHANGE_CART_OPEN':

                        return {...state,isCartOpen:!isCartOpen};
                    case 'SET_TOTAL':
                        console.log(products)
                        const newTotal=products.reduce((total,product)=>{return(total+(product.quantity * product.price))},0)
                        return{...state,total:newTotal}
                    case 'SET_CART_COUNT':
                        const newCartCount=products.reduce((total,product)=>{return (total + product.quantity)},0)
                        return{...state,cartCount:newCartCount}
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
        products && dispatch({type:'SET_CART_COUNT',payload:{products:products}});
       // setCartCount(newCartCount)
    },[products])

    useEffect(()=>{
        products && dispatch({type:'SET_TOTAL',payload:{products:products}});
       // setTotal(newTotal)
    },[products])

    const setIsCartOpenValue=(value)=>{
        dispatch({type:'CHANGE_CART_OPEN',payload:{products:products,valueToSet:value}});
    }
    const addItemToCard=(productToAdd)=>{
        dispatch({type:'ADD_ITEM_TO_CART',payload:{products:products,productToAdd:productToAdd}})
      //  setProducts(addCartItem(products,productToAdd));
    }
    const changeItemQuantity=(productToChange,e)=>{
        dispatch({type:'CHANGE_CART_ITEM_QUANTITY',payload:{products:products,productToChange:productToChange,e:e}})
        //setProducts(changeCartItemQuantity(products,productToChange,e))
    }
    const value={isCartOpen,setIsCartOpenValue,products,addItemToCard,cartCount,changeItemQuantity,total}
return(
    <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
)
}