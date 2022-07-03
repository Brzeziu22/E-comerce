import {CategoryStyles} from './categoryStyles'
import ProductCard from '../../components/productCard/productCardComponent';
import { useContext,useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'

import { CategoriesContext } from '../../contexts/categoriesContext';


const Category = () => {
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
    const [products,setProducts]=useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category])
        
    },[categoriesMap,category])
    return ( <CategoryStyles>
        {products && products.map((product)=>{return(<ProductCard key={product.id} product={product}/>)})}
    </CategoryStyles> );
}
 
export default Category;