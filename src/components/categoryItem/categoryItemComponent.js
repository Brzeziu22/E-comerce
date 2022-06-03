import "./categotyItemStyle.scss"

const CategoryItem=({title,imageUrl})=>{
    return (
    <div className="categoryContainer">
    <div className="backgroundImage" 
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}/>
    <div className="categoryBodyContainer"> 
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>)
}

export default CategoryItem