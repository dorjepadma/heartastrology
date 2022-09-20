import React from 'react';
import ephemeris from 'ephemeris'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
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

const MercuryHoroscope = () => {
 
const today = new Date(); 
  
const result = ephemeris.getPlanet('mercury',today, 51.1789, 1.8260, 331);

const mercury = Object.entries(result.observed).map(mercury => {

    return {
      name: mercury[0],
      apparentLongitudeDd:(mercury[1].apparentLongitudeDd),
    };
  })

const mercuryHoroscope = mercury.map(({ apparentLongitudeDd }) => {

    // Aries
    if (apparentLongitudeDd > 0 && apparentLongitudeDd <= 30) return { name: ['Mercury is in Aries'], Horoscope: ['Be bold with communication and self expression when Mercury is in Aries. It is the perfect time to put out new proposals, start new projects, initiate action, and  push boundaries. Aries is an energetic fire sign, so while Mercury is here be careful of blunt and shocking speech as well as communicating with anger. Aries resonates the note of C.'], image: Aries };
    // Taurus
    if (apparentLongitudeDd > 30 && apparentLongitudeDd <= 60) return { name: ['Mercury is in Taurus'], Horoscope: [' Communicate with love and nurturing, and watch out for stubborn words when Mercury is in Taurus. Take care as to what you put in your mouth during this time, as you may seek to over indulge. Nourish yourself and the world with comfort. Taurus is a gentle earth sign and communication and ideas are more about enjoyment that problem solving during this time. Taurus resonates the note of C Sharp.'], image: Taurus };
    // Gemini
    if (apparentLongitudeDd > 60 && apparentLongitudeDd <= 90) return { name: ['Mercury is in Gemini'], Horoscope: ['Communication and mental innovation is highlighted while Mercury is in Gemini. The words can come too fast so be careful not say superficial words that you may have to live up to in the future.  It is a good time for reconciling different opinions. Gemini is the Air element and it is always a good time for contemplation with intentional thinking of challenging subjects. Gemini resonates the note of D.'], image: Gemini };
    // Cancer
    if (apparentLongitudeDd > 90 && apparentLongitudeDd <= 120) return { name: ['Mercury is in Cancer'], Horoscope: ['During this time stay open and receptive to emotions and feelings of yourself and others. Mercury in Cancer is very empathetic but challenged in opening up and sharing its emotional feelings. With good communication hard shells give away to deep understanding as this is a water sign. Beneath the hard shell are thoughts of concern for how to nurture others. Cancer resonates with the note of D sharp.'], image: Cancer };
    // Leo
    if (apparentLongitudeDd > 120 && apparentLongitudeDd <= 150) return { name: ['Moon is in Leo'], Horoscope: ['Mercury in Leo is a gifted singer or a golden voice that speaks with authority. Bold words and self expression are rewarding during this time.  Express yourself clearly and practice radical creativity, now is the time to share your truth with the world. Be sure to lend an ear of appreciation to others you know who are trying to do the same thing. Leo is a fire sign expanding with energy. Leo resonates with the note of E.'], image: Leo };
    // Virgo
    if (apparentLongitudeDd > 150 && apparentLongitudeDd <= 180) return { name: ['Mercury is in Virgo'], Horoscope: ['Mercury is agile and exhibits discriminative powers in Virgo, this is an excellent time for writing, negotiating, clearing away mental clutter. Virgo likes to nurture and care for others and this comes across in conversation during this time. A shadow of Mercury in Virgo is speech that is overly critical, so one must put effort into being gentle in communication. Virgo is an earth sign so practice stability. Virgo resonates with the note of F.'], image: Virgo };
    // Libra
    if (apparentLongitudeDd > 180 && apparentLongitudeDd <= 210) return { name: ['Mercury is in Libra'], Horoscope: ['Mercury in Libra is the gift of the poet, during this time communication can bring understanding of others perspectives. This is a great time to undertake a writing project or engage in negotiations. It is a good time for reconciling different opinions through diplomatic conversations. The key here is understanding the other becomes easy. Libra resonates with the note of F sharp.'], image: Libra };
    // Scorpio
    if (apparentLongitudeDd > 210 && apparentLongitudeDd <= 240) return { name: ['Mercury is in Scorpio'], Horoscope: ['Emotional tensions fill ones communication and the unspoken secrets are revealed when Mercury is in Scorpio. Focusing on communication that transforms and builds understanding during this time. Mercury in Scorpio can also cause words to sting, hitting deep emotional sore points, patience is required communicating during this time.  Scorpio is a water sign which always stirs the emotions. Scorpio resonates with the note of G.'], image: Scorpio };
    // Sagittarius
    if (apparentLongitudeDd > 240 && apparentLongitudeDd <= 270) return { name: ['Mercury is in Sagittarius'], Horoscope: ['This is a time for philosophy, exploration, and creative thinking. Mercury in Sagittarius loves social activities, food, and good company. Conversations can be exciting and full of speculation. Mercury in Sagittarius can be prone to exaggeration so be cautious not to over promise or take everything another says to be written in stone. Sagittarius resonates with the note of G flat'], image: Sagittarius };
    // Capricorn
    if (apparentLongitudeDd > 270 && apparentLongitudeDd <= 300) return { name: ['Mercury is in Capricorn'], Horoscope: ['When Mercury is in Capricorn communication can be difficult and slow. Words tend to have lasting meaning and hit heavy. Do not become to rigid, but seek deep meaningful conversation when Mercury is in Capricorn. Contracts signed during this time can have lasting effects. Capricorn resonates with the note of A.'], image: Capricorn };
    // Aquarius
    if (apparentLongitudeDd > 300 && apparentLongitudeDd <= 330) return { name: ['Mercury is in Aquarius'], Horoscope: [' Aquarius is electric and eclectic air, novel thoughts and insights can be had while Mercury is in Aquarius.  Rigid definitions and a lack of flexibility can make communication challenging while Mercury is in this sign. Being an air sign, Aquarius experiences plenty of mental stimulation in this sign. Aquarius resonates with the note of A sharp.'], image: Aquarius };
    // Pisces
    return { name: ['Mercury is in Pisces'], Horoscope: ['Patience in communication, acceptance and working with others is highlighted while Mercury is in this sign. Pisces is a water sign and promotes mysticism as well as intuition. This is a time to go with the flow. One has to be mindful of communicating with clarity while Mercury is in this sign. Pisces resonates with the note of B'], image: Pisces };   
});
return (

<MDBCard container sm className="horoscope-card">
<div  col='2' justify="center" alignItems="center" direction="column" >
  <MDBCardText
  variant='h2'
  className='horoscope-title'
  >The {mercuryHoroscope[0].name}</MDBCardText>
    <MDBCardImage className='horoscope-image' src={mercuryHoroscope[0].image} alt='mercury'/>
</div>
    <MDBCardText 
    className='horoscope-text'
    >{mercuryHoroscope[0].Horoscope}</MDBCardText>
</MDBCard> 

)
}; 
export default MercuryHoroscope;
