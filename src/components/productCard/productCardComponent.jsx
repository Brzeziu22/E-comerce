import { useContext } from 'react';
import { useDispatch,useSelector } from 'react-redux';
//components
import Button from '../Button/buttonComponent'
//contexts 

import { selectCartItems } from '../../store/dropdown/dropdownSelector';
import {addItemToCard} from '../../store/dropdown/dropdownActions'
//styles
import { Price,Name,Footer,ProductCardContainer } from './productCardStyle';

const ProductCard = ({product}) => {
    const {id,name,price,imageUrl}= product;
    const products=useSelector(selectCartItems);
    const dispatch=useDispatch();
 
    const addItem=(product)=>{
        dispatch(addItemToCard(products,product))
    }

    
    return ( 
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name>{name}</Name>
            <Price>${price}</Price>
        </Footer>
        <Button buttonType='inverted' onClick={()=>addItem(product)}> Add to card</Button>
    </ProductCardContainer> );
}
 
export default ProductCard;