import ProductCard from "../productCard/productCardComponent";
import {Link} from 'react-router-dom'
import './categoryPreviewStyles.scss'

const CategoryPreview = ({title,products}) => {
    return ( 
    <div className="categoryPreviewContainer">
        <h2>
            <Link to={`${title}`}>
            <span className="title">{title.toUpperCase()}</span>
            </Link>
        </h2>
        <div className="preview">
            {
            products.filter((_, idx)=>idx <4).map(product=>{
                return(<ProductCard key={product.id} product={product}/>)
            }) 
            }
        </div>
    </div> );
}
 
export default CategoryPreview;