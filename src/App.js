import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Homepage from './Pages/homepage/homepage.component';
// import Readings from './pages/andrea/Readings.component';
// import Social from './pages/social/social.component';
// import AstrologyWritings from './pages/collections/astrologywritings.component';
// import Contemplations from './pages/contemplations/contemplations.component';
import Cinema from './Pages/cinema/cinema.component';
// import Contact from './pages/contact/contact.component';
// import DorjeBio from './pages/meditations/dorjebio.component';

import Navigation from './Components/navigation/navigation.component';
import './App.css';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Homepage />} />
            <Route path='home' index element={<Homepage />} />
            <Route path='/cinema' index element={<Cinema />} />
            {/* <Route path='/bio' index element={<BIO />} />
            <Route path='/Readings' index element={<Readings />} />
            <Route path='/contemplations' index element={<Contemplations />} />
            <Route path='/meditations' index element={<Meditations />} />
            <Route path='/social' index element={<Social />} />
            <Route path='/contact' index element={<Contact />} /> */}
          </Route>
        </Routes>

    </div>
  );
}

export default App;
