import { useContext,Fragment } from "react";

import { CategoriesContext } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/categoryPreview/categoryPreviewComponent";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categoriesSelector";


const CategoriesPreview = () => {
   //const {categoriesMap}=useContext(CategoriesContext);
   const categoriesMap=useSelector(selectCategoriesMap)
    return (
            <>
                     {Object.keys(categoriesMap).map((title)=>{
                        const products=categoriesMap[title];    
                        return (<CategoryPreview title={title} products={products}/>)
                     })}
            </>
                )
     ;
}
 
export default CategoriesPreview;