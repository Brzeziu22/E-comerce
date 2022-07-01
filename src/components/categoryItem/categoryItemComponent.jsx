import {CategoryContainer,BackgroundImage,CategoryBodyContainer,Title,Text} from "./categotyItemStyle.jsx"

const CategoryItem=({title,imageUrl})=>{
    return (
    <CategoryContainer>
    <BackgroundImage 
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}/>
    <CategoryBodyContainer> 
      <Title>{title}</Title>
      <Text>Shop Now</Text>
    </CategoryBodyContainer>
  </CategoryContainer>)
}

export default CategoryItem