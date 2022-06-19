import './productCardStyles.scss'
import Button from '../Button/buttonComponent'

const ProductCard = ({product}) => {
    const {id,name,price,imageUrl}= product;
    return ( 
    <div className='productCardContainer'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span classNam='price'>{price}</span>
        </div>
        <Button buttonType='inverted'> Add to card</Button>
    </div> );
}
 
export default ProductCard;