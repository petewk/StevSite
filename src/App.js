import React from 'react';
import './App.css';
import Title from './components/title.js';
import Banner1 from './components/contactDetails.js';
import Blurb from './components/blurb.js';
import SocialLink from './components/socialLink.js';
import ContactForm from './components/contactForm.js';
import Video from './components/video.js';
import NavBar from './components/navBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <SocialLink />
      <Video />
      <Blurb />
      <Banner1 />
      <ContactForm />
    </div>
  );
}

export default App;
