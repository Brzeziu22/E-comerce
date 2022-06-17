import {Routes,Route} from 'react-router-dom';

import './categoriesStyle.scss';

import Navigation from './routes/navigation/navigationComponent';
import Home from './routes/home/homeComponent';
import Authentication from './routes/authentication/authenticationComponent';
const App = ()=> {

  

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
     
    </Routes>
  );
}

export default App;
