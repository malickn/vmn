import React from 'react';
import ContentBody from './contentBody';
import Footer from './footer';
import Header from './header';
//import TopContainer from './topContainer';

function Home() {
  return (
    <div>
      <Header page="home" />
      <ContentBody page="home" />
      <Footer />
    </div>
  );
}

export default Home;
