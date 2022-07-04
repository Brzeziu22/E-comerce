
import { useNavigate } from "react-router-dom"
import { BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer, } from "./categoryItemStyle"


const CategoryItem=({title,imageUrl,route})=>{
  const navigation=useNavigate();

  const NavigateHandler=()=>navigation(route);
    return (
    <CategoryContainer onClick={()=>{NavigateHandler()}}>
      
    <BackgroundImage 
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}/>
    <CategoryBodyContainer> 
      <h2>{title}</h2>
      <p>Shop Now</p>
    </CategoryBodyContainer>
  </CategoryContainer>
  )
}

export default CategoryItem