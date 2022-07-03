import { useContext } from 'react';


import { ProductCardContainer,Name,Price,Footer } from './productCardStyles';
import Button from '../Button/buttonComponent'
import { DropdownContext } from '../../contexts/dropdownContext';

const ProductCard = ({product}) => {
    const {id,name,price,imageUrl}= product;
    const {addItemToCard}=useContext(DropdownContext)

    const addItem=()=>{
        addItemToCard(product)
    }

    return ( 
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name>{name}</Name>
            <Price>${price}</Price>
        </Footer>
        <Button buttonType='inverted' onClick={addItem}> Add to card</Button>
    </ProductCardContainer> );
}
 
export default ProductCard;