import React from 'react';
import Banner from '../src/components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../src/components/NavBar/NavBar';
import Footer from '../src/components/Footer/Footer';
import CardSet from '../src/components/CardSet/CardSet';
import PillSection from '../src/components/PillSection/PillSection';

function App() {
  return (
    <main className='App'>
      <NavBar />
      <Banner />
      <PillSection />
      <CardSet />
      <Footer />
    </main>
  );
}

export default App;
