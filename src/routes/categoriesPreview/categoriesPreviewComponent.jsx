import { useContext,Fragment } from "react";


import CategoryPreview from "../../components/categoryPreview/categoryPreviewComponent";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categoriesSelector";


const CategoriesPreview = () => {

   const categoriesMap=useSelector(selectCategoriesMap)
   console.log(categoriesMap)
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