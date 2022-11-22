import { useState,useEffect } from "react";
import { createContext} from "react";
import SHOP_DATA from '../shopData.js'

import { getCategoriesAndDocuments } from "../utils/firebase/firebaseUtil.js";
export const CategoriesContext = createContext({
 categoriesMap:{},
});

export const CategoriesProvider=({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({});
    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoriesArray=await getCategoriesAndDocuments();
            
            setCategoriesMap(categoriesArray)
        }
        getCategoriesMap();
    },[])
    
    const value={categoriesMap}
return(
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
)
}