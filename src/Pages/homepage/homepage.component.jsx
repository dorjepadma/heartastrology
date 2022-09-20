
import React from 'react';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

import medievalAstrologer from '../../assets/images/homepageImages/medieval-astrologer.jpeg';
import MercuryHoroscope from '../../Components/DailyHoroscope/MercuryHoroscope.component';
import MoonHoroscope from '../../Components/DailyHoroscope/MoonHoroscope.component';
import SunHoroscope from '../../Components/DailyHoroscope/SunHoroscope.component';

import './homepage.styles.scss';


const Homepage = () => {
  return (
    <div container className='homepage'>
      <div  className='Title'>
          <h1>Heart Astrology</h1>
      </div>
        <div className='subTitle'> Astrology, Iching, and Feng Shui Readings
      </div>
      <div >
      <img className='img-fluid shadow-4' src={medievalAstrologer} alt='Perfection of Man'/>
      </div>
      {/* <div>
        <MoonHoroscope/> 
      </div> */}
    </div>
  );
}
export default Homepage;
