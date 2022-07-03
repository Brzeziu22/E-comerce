
import { BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer, } from "./categoryItemStyle"
const CategoryItem=({title,imageUrl})=>{
    return (
    <CategoryContainer>
    <BackgroundImage 
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}/>
    <CategoryBodyContainer> 
      <h2>{title}</h2>
      <p>Shop Now</p>
    </CategoryBodyContainer>
  </CategoryContainer>)
}

export default CategoryItem