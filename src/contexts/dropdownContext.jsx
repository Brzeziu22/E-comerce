import { useEffect } from "react";
import { createContext,useState } from "react";


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

export const DropdownContext = createContext({
    isCartOpen:false,
    setIsCartOpenValue:()=>null,
    products:[],
    addItemToCard:()=>{},
    cartCount:0,
    changeItemQuantity:()=>{},
    total:0
   });
   

   export const DropdownProvider=({children})=>{
    const [products,setProducts]=useState([]);
    const [isCartOpen,setIsCartOpenValue]=useState(false);
    const [cartCount,setCartCount]=useState(0);
    const [total,setTotal]=useState(0);

    useEffect(()=>{
        const newCartCount=products.reduce((total,product)=>{return (total + product.quantity)},0)
        setCartCount(newCartCount)
    },[products])

    useEffect(()=>{
        const newTotal=products.reduce((total,product)=>{return(total+(product.quantity * product.price))},0)
        setTotal(newTotal)
    },[products])

    const addItemToCard=(productToAdd)=>{
        setProducts(addCartItem(products,productToAdd));
    }
    const changeItemQuantity=(productToChange,e)=>{
        setProducts(changeCartItemQuantity(products,productToChange,e))
    }
    const value={isCartOpen,setIsCartOpenValue,products,addItemToCard,cartCount,changeItemQuantity,total}
return(
    <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
)
}