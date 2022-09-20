import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import ephemeris from 'ephemeris';
import './DailyHoroscope.styles.scss';

import Aries from '../../assets/images/ZodiacCards/BeigeAries.png';
import Taurus from '../../assets/images/ZodiacCards/BeigeTaurus.png';
import Gemini from '../../assets/images/ZodiacCards/BeigeGemini.png';
import Cancer from '../../assets/images/ZodiacCards/BeigeCancer.png';
import Leo from '../../assets/images/ZodiacCards/BeigeLeo.png';
import Virgo from '../../assets/images/ZodiacCards/BeigeVirgo.png';
import Libra from '../../assets/images/ZodiacCards/BeigeLibra.png';
import Scorpio from '../../assets/images/ZodiacCards/BeigeScorpio.png';
import Sagittarius from '../../assets/images/ZodiacCards/BeigeSagittarius.png';
import Capricorn from '../../assets/images/ZodiacCards/BeigeCapricorn.png';
import Aquarius from '../../assets/images/ZodiacCards/BeigeAquarius.png';
import Pisces from '../../assets/images/ZodiacCards/BeigePisces.png';

// const ephemeris = require('ephemeris');

const MoonHoroscope = () => {
    
// const today = new Date(); 
  
const result = ephemeris.getPlanet('moon',new Date (), 51.1780, 1.8260, 331);

const moon = Object.entries(result.observed).map(moon => {

    return {
      name: moon[0],
      apparentLongitudeDd:(moon[1].apparentLongitudeDd),
    };
  })

const moonHoroscope = moon.map(({ apparentLongitudeDd }) => {

    // Aries
    if (apparentLongitudeDd > 0 && apparentLongitudeDd <= 30) return { name: ['Moon is in Aries'], Horoscope: ['Today the moon is in Aries. Be bold, start new projects, initiate action, push boundaries. Aries is an energetic fire sign. Aries resonates the note of C.'], image: Aries };
    // Taurus
    if (apparentLongitudeDd > 30 && apparentLongitudeDd <= 60) return { name: ['Moon is in Taurus'], Horoscope: ['Today the moon is in Taurus. Be stable and build on foundations. Take time to enjoy life and enjoy food. Nourish yourself and the world with comfort. Taurus is a gentle earth sign. Taurus resonates the note of C Sharp.'], image: Taurus };
    // Gemini
    if (apparentLongitudeDd > 60 && apparentLongitudeDd <= 90) return { name: ['Moon is in Gemini'], Horoscope: ['Today the moon is in Gemini. Communication and mental innovation is highlighted. Be careful not say superficial words that you may have to live up to in the future.  It is a good time for reconciling different opinions. Gemini is the Air element and it is always a good time for contemplation with intentional thinking. Gemini resonates the note of D.'], image: Gemini };
    // Cancer
    if (apparentLongitudeDd > 90 && apparentLongitudeDd <= 120) return { name: ['Moon is in Cancer'], Horoscope: ['Today the moon is in Cancer. Stay open and receptive to the emotions and feelings of yourself and others. Hard shells give away to deep understanding as this is a water sign. Cancer resonates with the note of D sharp.'], image: Cancer };
    // Leo
    if (apparentLongitudeDd > 120 && apparentLongitudeDd <= 150) return { name: ['Moon is in Leo'], Horoscope: ['Today the moon is in Leo. Bold action and inculcating experiences of self authority are rewarding.  Express yourself clearly and practice radical creativity. Leo is a fire sign expanding with energy. Leo resonates with the note of E.'], image: Leo };
    // Virgo
    if (apparentLongitudeDd > 150 && apparentLongitudeDd <= 180) return { name: ['Moon is in Virgo'], Horoscope: ['Today the moon is in Virgo. Clearing away clutter and reconciling your books are classic activities during this time. Virgo likes to nurture and care for others but criticism can run high at this time. Virgo is an earth sign so practice stability. Virgo resonates with the note of F.'], image: Virgo };
    // Libra
    if (apparentLongitudeDd > 180 && apparentLongitudeDd <= 210) return { name: ['Moon is in Libra'], Horoscope: ['Today the moon is in Libra. One should seek balance in ones actions and pursue creative and esthetic experiences. It is a good time for reconciling different opinions. Libra resonates with the note of F sharp.'], image: Libra };
    // Scorpio
    if (apparentLongitudeDd > 210 && apparentLongitudeDd <= 240) return { name: ['Moon is in Scorpio'], Horoscope: ['Today the moon is in Scorpio. Emotional tension fills the atmosphere, this can be sexy or disturbing. Focusing on images of transformation and burning down that which no longer works for you is called for.  Scorpio is a water sign which always stirs the emotions. Scorpio resonates with the note of G.'], image: Scorpio };
    // Sagittarius
    if (apparentLongitudeDd > 240 && apparentLongitudeDd <= 270) return { name: ['Moon is in Sagittarius'], Horoscope: ['Today the moon is in Sagittarius. It is a time for philosophy and exploration. Boundaries are to be overcome and mirth, food, and good company always go well during a Sagittarius moon. Sagittarius resonates with the note of G flat'], image: Sagittarius };
    // Capricorn
    if (apparentLongitudeDd > 270 && apparentLongitudeDd <= 300) return { name: ['Moon is in Capricorn'], Horoscope: ['Today the moon is in Capricorn. This time is traditionally said to be good for laying down stone foundations. That can be said metaphorically about ones life to. Do not become to rigid, or try to break other peoples rigidity while the Moon is in Earthy Capricorn. Capricorn resonates with the note of A. '], image: Capricorn };
    // Aquarius
    if (apparentLongitudeDd > 300 && apparentLongitudeDd <= 330) return { name: ['Moon is in Aquarius'], Horoscope: ['Today the moon is in Aquarius. Aquarius is electric and eclectic air, novel thoughts along with rigid definitions of self make communication both easy and challenging while the moon is in this sign. Being an air sign, Aquarius is a time of mental stimulation. Aquarius resonates with the note of A sharp.'], image: Aquarius };
    // Pisces
    return { name: ['Moon is in Pisces'], Horoscope: ['Today the moon is in Pisces. Acceptance and working with others is highlighted while the Moon is in this sign. Pisces is a water sign and promotes mysticism as well as intuition. it is truly a day to go with the flow. Pisces resonates with the note of B'], image: Pisces };   
});
return (

<MDBCard container sm className="horoscope-card">
<div  col='2' justify="center" alignItems="center" direction="column" >
  <MDBCardText
  variant='h2'
  className='horoscope-title'
  >The {moonHoroscope[0].name}</MDBCardText>
    <MDBCardImage className='horoscope-image' src={moonHoroscope[0].image} alt='moon'/>
</div>
    <MDBCardText 
    className='horoscope-text'
    >{moonHoroscope[0].Horoscope}</MDBCardText>
</MDBCard> 

)
}; 
export default MoonHoroscope;
