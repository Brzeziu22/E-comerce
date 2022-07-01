import { CategoriesContainer}from'./categoriesListStyle.jsx'
import CategoryItem from '../categoryItem/categoryItemComponent'
const CategoriesList = ({categories}) => {
    
      
    return ( 
    <CategoriesContainer>
        {categories.map(( {id,title,imageUrl}) =>(
        <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
      ))}

    </CategoriesContainer> );
}
 
export default CategoriesList;