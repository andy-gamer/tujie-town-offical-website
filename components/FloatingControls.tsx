
import React from 'react';

const FloatingControls: React.FC = () => {
  const steamUrl = "https://store.steampowered.com/app/4209230/?utm_source=officialsite&utm_campaign=tujietown";

  return (
    <div 
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 md:gap-5 transform-gpu translate-z-0"
      style={{ backfaceVisibility: 'hidden', WebkitFontSmoothing: 'antialiased' }}
    >
      <a 
        href={steamUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="w-12 h-12 md:w-16 md:h-16 bg-lantern-red text-white rounded-none flex items-center justify-center shadow-[0_0_25px_rgba(192,53,43,0.6)] md:hover:scale-110 transition-transform border-2 border-red-900 group relative touch-manipulation transform-gpu" 
        title="Add to Wishlist"
      >
         <i className="fa-brands fa-steam text-2xl md:text-3xl"></i>
      </a>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="w-12 h-12 md:w-16 md:h-16 bg-valley-teal text-moon-silver rounded-none flex items-center justify-center shadow-lg border border-mist-grey/30 hover:bg-midnight-fog transition-colors touch-manipulation transform-gpu" 
        title="Back to Top"
      >
         <i className="fa-solid fa-arrow-up text-lg md:text-xl"></i>
      </button>
    </div>
  );
};

export default FloatingControls;
