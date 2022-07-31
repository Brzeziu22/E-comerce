import {CategoryStyles} from './categoryStyles'
import ProductCard from '../../components/productCard/productCardComponent';
import { useContext,useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';
import { CategoriesContext } from '../../contexts/categoriesContext';
import { useSelector } from 'react-redux';


const Category = () => {
    const {category}=useParams();
    const categoriesMap=useSelector(selectCategoriesMap)
    console.log(categoriesMap);
    const [products,setProducts]=useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category])
        
    },[categoriesMap,category])
    return ( <CategoryStyles>
        {products && products.map((product)=>{return(<ProductCard key={product.id} product={product}/>)})}
    </CategoryStyles> );
}
 
export default Category;