
import CategoryItem from '../categoryItem/categoryItemComponent'

import { CategoriesContainer } from './categoriesListStyle';

const CategoriesList = ({categories}) => {
    
      
    return ( 
    <CategoriesContainer>
        {categories.map(( {id,title,imageUrl}) =>(
        <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
      ))}

    </CategoriesContainer> );
}
 
export default CategoriesList;