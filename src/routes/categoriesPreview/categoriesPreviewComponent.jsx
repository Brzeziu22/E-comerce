import { useContext,Fragment } from "react";

import { CategoriesContext } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/categoryPreview/categoryPreviewComponent";


const CategoriesPreview = () => {
   const {categoriesMap}=useContext(CategoriesContext);

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