import {Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../src/utils/firebase/firebaseUtil";
import { getCategoriesAndDocuments } from '../src/utils/firebase/firebaseUtil';

import './categoriesStyle.scss';

import Navigation from './routes/navigation/navigationComponent';
import Home from './routes/home/homeComponent';
import Authentication from './routes/authentication/authenticationComponent';
import Shop from './routes/shop/shopComponent';
import Checkout from './routes/checkout/checkoutComponent';
import { setCurrentUser } from './store/user/userAction';
import { selectCategoriesMap } from './store/categories/categoriesSelector';
import { setCategoriesMap } from './store/categories/categoriesAction';
const App = ()=> {
  const dispatch=useDispatch();
  useEffect(()=>{ 
    const unsubscribe = onAuthStateChangedListener((user)=>{
     if(user){
         createUserDocumentFromAuth(user);
     }
     dispatch(setCurrentUser(user));
    })
    
    return unsubscribe;
 },[])
 useEffect(()=>{
  const getCategoriesMap=async()=>{
      const categoryMap=await getCategoriesAndDocuments();
      
      dispatch(setCategoriesMap(categoryMap))
  }
  console.log('witam')
  getCategoriesMap();
},[])
  

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
     
    </Routes>
  );
}

export default App;
