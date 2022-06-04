import {Routes,Route} from 'react-router-dom';

import './categoriesStyle.scss';

import Navigation from './routes/navigation/navigationComponent';
import Home from './routes/home/homeComponent';

const App = ()=> {

  

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
      </Route>
     
    </Routes>
  );
}

export default App;
