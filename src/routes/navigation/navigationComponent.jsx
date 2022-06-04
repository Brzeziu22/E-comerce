import {Outlet,Link} from 'react-router-dom'
import { Fragment } from 'react'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigationStyles.scss'
const Navigation=()=>{
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
            <Link className='navLink' to='/signIn'>
                sign in
            </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>)
  }

  export default Navigation