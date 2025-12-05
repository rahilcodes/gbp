import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-dark-bg text-gray-200 font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* Global ambient background glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-neon-cyan/10 rounded-full blur-[100px] animate-glow-pulse" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyChooseMe />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;