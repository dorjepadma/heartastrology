import React, { useState, } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  MDBIcon,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
// import { useSelector } from 'react-redux';


// import CartIcon from '../../Components/CartIcon/CartIcon.component';
// import CartDropdown from '../../Components/CartDropdown/CartDropdown.component';

// import { selectIsCartOpen } from '../../Store/Cart/Cart.selector';
// import { selectCurrentUser } from '../../Store/User/User.selector';
// import { signOutUser }  from '../../utils/Firebase/firebase.utils';
// import { connect } from 'react-redux';

import PerfectedMan from '../../assets/images/VitruvianMan.png';

import './navigation.styles.scss';

const Navigation = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);
  return (
<div >
    <div className='navigation'>
    <MDBNavbar expand='lg' light bgColor='primary'>
      <MDBContainer fluid>

        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink href='Readings'>READINGS</MDBNavbarLink>
            <MDBNavbarLink href='social'>SOCIAL</MDBNavbarLink>
            <MDBNavbarLink href='cinema'>CINEMA</MDBNavbarLink>
            <MDBNavbarLink href='contact'>CONTACT</MDBNavbarLink>
            <MDBNavbarLink href='Bio'>BIO</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBNavbarBrand href='HOME'>
          <div>

          HEARTASTROLOGY
          </div>
          <div >

        <img className='Logo'
              src={PerfectedMan}
              height='60'
              alt='Buddha Eyes'
              loading='lazy'
            />
          </div>
          </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
    </div>
<Outlet/>
      
</div>



)}


export default Navigation
