import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tracks } from './components/Tracks';
import { Curriculum } from './components/Curriculum';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white">
      <main>
        <Hero />
        <About />
        <Tracks />
        <Curriculum />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;