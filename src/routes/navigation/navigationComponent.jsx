import {Outlet,Link} from 'react-router-dom'
import { Fragment,useContext } from 'react'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigationStyles'
import { UserContext } from '../../contexts/userContext'
import { DropdownContext } from '../../contexts/dropdownContext'

import CartIcon from '../../components/cartIcon/cartIconComponent'
import CartDropdown from '../../components/cartIconDropdown/cartDropdownComponent'

import { signOutUser } from '../../utils/firebase/firebaseUtil'

const Navigation=()=>{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen}=useContext(DropdownContext);

  
  
    return(
    <Fragment>
       
      <NavigationContainer>
          <LogoContainer to='/'>
        <CrwnLogo />
        </LogoContainer>
        <NavLinks>
            <NavLink to='/shop'>
                shop
            </NavLink>
            {
              currentUser?(<NavLink as='span' onClick={signOutUser}>sign out</NavLink>):(<NavLink to='/auth'>
              sign in
          </NavLink>)
            }
           <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet/>
    </Fragment>)
  }

  export default Navigation