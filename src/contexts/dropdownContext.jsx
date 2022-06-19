import { createContext,useState } from "react";


export const DropdownContext = createContext({
    products:[],
    isCartOpen:false,
    setIsCartOpenValue:()=>null,
   });


   export const DropdownProvider=({children})=>{
    const [products,setProducts]=useState([]);
    const [isCartOpen,setIsCartOpenValue]=useState(false);
    const value={isCartOpen,setIsCartOpenValue}
return(
    <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
)
}