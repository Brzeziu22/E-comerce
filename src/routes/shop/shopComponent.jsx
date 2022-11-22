import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Route,Routes} from 'react-router-dom';
import {setCategories} from '../../store/categories/categoriesAction'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebaseUtil';
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';
import CategoriesPreview from '../categoriesPreview/categoriesPreviewComponent';
import Category from '../category/categoryComponent';
const Shop = () => {
   const dispatch = useDispatch();

   useEffect(()=>{
    const getCategoriesMap= async ()=>{
        const categoriesArray = await getCategoriesAndDocuments('categories');
       
       dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();
},[])

    return (
            <Routes>
                <Route index element={<CategoriesPreview/>} />
                <Route path=":category" element={<Category/>} />
            </Routes>
                )
     ;
}
 
export default Shop;