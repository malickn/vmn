import React from 'react';
import ContentBody from './contentBody';
import Footer from './footer';
import Header from './header';

function About() {
  return (
    <div>
		<Header  page="about" />
		<ContentBody page="about" />
		<Footer  page="about" />
    </div>
  );
}

export default About;
