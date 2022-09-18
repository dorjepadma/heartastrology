
import React from 'react';

import medievalAstrologer from '../../assets/images/homepageImages/medieval-astrologer.jpeg';

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
    </div>
  );
}
export default Homepage;
