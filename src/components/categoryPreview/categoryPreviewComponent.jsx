import ProductCard from "../productCard/productCardComponent";
import {Link} from 'react-router-dom'
import {CategoryPreviewContainer,Title,Preview}from './categoryPreviewStyles.jsx'

const CategoryPreview = ({title,products}) => {
    return ( 
    <CategoryPreviewContainer>
        <h2>
            <Link to={`${title}`}>
            <Title>{title.toUpperCase()}</Title>
            </Link>
        </h2>
        <Preview>
            {
            products.filter((_, idx)=>idx <4).map(product=>{
                return(<ProductCard key={product.id} product={product}/>)
            }) 
            }
        </Preview>
    </CategoryPreviewContainer> );
}
 
export default CategoryPreview;