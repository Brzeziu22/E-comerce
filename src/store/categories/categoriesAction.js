import { CATEGORIES_ACTION_TYPES } from "./categoriesTypes";


const setCategoriesMap=(categoriesMap)=>{
return{type:CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,payload:categoriesMap};

}