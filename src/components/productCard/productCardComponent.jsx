import { useContext } from 'react';

import './productCardStyles.scss'
import Button from '../Button/buttonComponent'
import { DropdownContext } from '../../contexts/dropdownContext';

const ProductCard = ({product}) => {
    const {id,name,price,imageUrl}= product;
    const {addItemToCard}=useContext(DropdownContext)

    const addItem=()=>{
        addItemToCard(product)
    }

    return ( 
    <div className='productCardContainer'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span classNam='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addItem}> Add to card</Button>
    </div> );
}
 
export default ProductCard;