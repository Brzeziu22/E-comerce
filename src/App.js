import {Routes,Route} from 'react-router-dom';

import './categoriesStyle.scss';

import Navigation from './routes/navigation/navigationComponent';
import Home from './routes/home/homeComponent';
import Authentication from './routes/authentication/authenticationComponent';
import Shop from './routes/shop/shopComponent';
const App = ()=> {

  

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
     
    </Routes>
  );
}

export default App;
