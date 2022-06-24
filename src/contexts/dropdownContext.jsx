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

export const DropdownContext = createContext({
    isCartOpen:false,
    setIsCartOpenValue:()=>null,
    products:[],
    addItemToCard:()=>{},
    cartCount:0
   });
   

   export const DropdownProvider=({children})=>{
    const [products,setProducts]=useState([]);
    const [isCartOpen,setIsCartOpenValue]=useState(false);
    const [cartCount,setCartCount]=useState(0);

    useEffect(()=>{
        const newCartCount=products.reduce((total,product)=>{return (total + product.quantity)},0)
        setCartCount(newCartCount)
    },[products])
    const addItemToCard=(productToAdd)=>{
        setProducts(addCartItem(products,productToAdd));
    }
    const value={isCartOpen,setIsCartOpenValue,products,addItemToCard,cartCount}
return(
    <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
)
}