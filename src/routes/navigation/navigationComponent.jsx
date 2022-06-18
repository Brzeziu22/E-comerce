import {Outlet,Link} from 'react-router-dom'
import { Fragment,useContext } from 'react'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigationStyles.scss'
import { UserContext } from '../../contexts/userContext'

import { signOutUser } from '../../utils/firebase/firebaseUtil'
const Navigation=()=>{
  const {currentUser} = useContext(UserContext);

  
  
    return(
    <Fragment>
      <div className='navigation'>
          <Link className='logoContainer' to='/'>
        <CrwnLogo />
        </Link>
        <div className='navLinksContainer'>
            <Link className='navLink' to='/shop'>
                shop
            </Link>
            {
              currentUser?(<span className='navLink' onClick={signOutUser}>sign out</span>):(<Link className='navLink' to='/auth'>
              sign in
          </Link>)
            }
            
        </div>
      </div>
      <Outlet/>
    </Fragment>)
  }

  export default Navigation