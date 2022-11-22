import { CATEGORIES_ACTION_TYPES } from "./categoriesTypes";


export const setCategories=(categoriesArray)=>{
return{type:CATEGORIES_ACTION_TYPES.SET_CATEGORIES,payload:categoriesArray};

}