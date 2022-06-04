import './categoriesListStyle.scss'
import CategoryItem from '../categoryItem/categoryItemComponent'
const CategoriesList = ({categories}) => {
    
      
    return ( 
    <div  className="categoriesContainer">
        {categories.map(( {id,title,imageUrl}) =>(
        <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
      ))}

    </div> );
}
 
export default CategoriesList;