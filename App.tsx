
import { useState, useEffect } from 'react';
import { ITEMS } from './constants';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Town from './components/Town';
import LatestNews from './components/LatestNews';
import Gameplay from './components/Gameplay';
import MonsterIndex from './components/MonsterIndex';
import ContentWarning from './components/ContentWarning';
import FloatingControls from './components/FloatingControls';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

// --- Main App ---
export default function App() {
  const [foundItems, setFoundItems] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (foundItems.length === ITEMS.length) {
       setTimeout(() => {
          document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
       }, 800);
    }
  }, [foundItems]);

  // Scroll Reveal Observer
  useEffect(() => {
    if (!loaded) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [loaded]);

  return (
    <LanguageProvider>
      <div className="font-sans text-moon-silver min-h-screen bg-midnight-fog selection:bg-lantern-red selection:text-white overflow-x-hidden">
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
        
        {loaded && (
          <>
            <Header />
            <main className="animate-fade-in w-full overflow-x-hidden">
              <Hero foundItems={foundItems} onFindItem={id => setFoundItems(p => [...p, id])} />
              <div className="scroll-reveal"><LatestNews /></div>
              <div className="scroll-reveal"><Town foundItems={foundItems} onFindItem={id => setFoundItems(p => [...p, id])} /></div>
              <div className="scroll-reveal"><Gameplay foundItems={foundItems} onFindItem={id => setFoundItems(p => [...p, id])} /></div>
              <div className="scroll-reveal"><MonsterIndex foundItems={foundItems} /></div>
              <div className="scroll-reveal"><ContentWarning /></div>
              <div className="scroll-reveal"><Footer /></div>
            </main>
            <FloatingControls />
          </>
        )}

        <style>{`
          @keyframes fog { 0% { background-position: 0 0; } 100% { background-position: 1000px 0; } }
          .animate-fog { animation: fog 80s linear infinite; }
          .animate-fog-slow { animation: fog 160s linear infinite reverse; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .animate-fade-in { animation: fadeIn 2s ease-out forwards; }
          @keyframes kenBurns { 0% { transform: scale(1) translate(0,0); } 50% { transform: scale(1.05) translate(-0.5%, -0.5%); } 100% { transform: scale(1) translate(0,0); } }
          .animate-ken-burns { animation: kenBurns 60s ease-in-out infinite alternate; }
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .glitch-hover:hover { animation: glitch-text 0.3s cubic-bezier(.25, .46, .45, .94) both infinite; }
          @keyframes glitch-text { 0% { transform: translate(0) } 20% { transform: translate(-2px, 2px) } 40% { transform: translate(-2px, -2px) } 60% { transform: translate(2px, 2px) } 80% { transform: translate(2px, -2px) } 100% { transform: translate(0) } }
          
          /* Ghostly Afterimage Effect (Dark Version) */
          @keyframes ghostPulseDark {
            0% { text-shadow: 2px 0 0px rgba(46, 62, 67, 0.1); opacity: 0.8; transform: translateX(0); filter: blur(0px); }
            25% { text-shadow: -4px 0 4px rgba(46, 62, 67, 0.2); opacity: 0.6; transform: translateX(-1px); filter: blur(0.5px); }
            50% { text-shadow: 4px 0 8px rgba(46, 62, 67, 0.3); opacity: 0.9; transform: translateX(1px); filter: blur(1px); }
            75% { text-shadow: -2px 0 4px rgba(46, 62, 67, 0.2); opacity: 0.6; transform: translateX(0); filter: blur(0.5px); }
            100% { text-shadow: 2px 0 0px rgba(46, 62, 67, 0.1); opacity: 0.8; transform: translateX(0); filter: blur(0px); }
          }
          .animate-ghost-dark { animation: ghostPulseDark 4s ease-in-out infinite; }

          /* Scroll Reveal */
          .scroll-reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .scroll-reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </LanguageProvider>
  );
}
