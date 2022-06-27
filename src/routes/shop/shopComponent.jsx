import { useContext,Fragment } from "react";

import { CategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../../components/productCard/productCardComponent";

import './shopStyles.scss'

const Shop = () => {
   const {categoriesMap}=useContext(CategoriesContext);

    return ( 
        <Fragment >
        {Object.keys(categoriesMap).map((title)=>{
            return(
            <Fragment key={title}>
                   <h2>{title}</h2>
                   <div className="productsContainer">
                        {categoriesMap[title].map((product)=>{
                            return(<ProductCard key={product.id} product={product}/>)
            })}
        </div>
                   </Fragment> 
                )})
            }
        </Fragment>
     );
}
 
export default Shop;