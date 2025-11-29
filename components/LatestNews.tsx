

import React, { useState } from 'react';
import { ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const LatestNews: React.FC = () => {
  const { t } = useLanguage();
  const news = t.news.items;
  const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null);

  return (
    <>
    <section id="news" className="py-16 md:py-24 relative border-t border-lily-shadow/30 bg-midnight-fog">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-repeat" style={{ backgroundImage: `url(${ASSETS.textureCork})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-midnight-fog via-valley-teal/30 to-midnight-fog opacity-90"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 border-b border-mist-grey/20 pb-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-moon-silver tracking-[0.2em] drop-shadow-md">
            {t.news.title}
          </h2>
          <a href="#" className="text-mist-grey hover:text-lantern-red transition-colors text-sm md:text-base font-bold tracking-widest mt-4 md:mt-0 font-mono">
            {t.news.viewAll} <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-mist-grey/10 bg-black/20 backdrop-blur-sm">
          {news.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedNews(item)}
              className="group relative p-6 md:p-10 border-b md:border-b-0 md:border-r border-mist-grey/10 hover:bg-lantern-red/5 transition-all duration-300 cursor-pointer flex flex-col h-full last:border-b-0"
            >
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <span className="text-lantern-red font-mono text-[10px] md:text-xs font-bold tracking-wider px-2 py-1 border border-lantern-red/30 bg-lantern-red/5 group-hover:bg-lantern-red group-hover:text-white transition-colors">{item.category}</span>
                <span className="text-mist-grey/60 font-mono text-xs md:text-sm">{item.date}</span>
              </div>
              <h3 className="text-lg md:text-2xl font-display font-bold text-lily-pale mb-4 md:mb-6 group-hover:text-lantern-red transition-colors leading-relaxed line-clamp-2">
                {item.title}
              </h3>
              <p className="text-mist-grey/60 text-sm md:text-base font-sans line-clamp-3 mt-auto leading-relaxed group-hover:text-mist-grey transition-colors">
                {t.news.readMore}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-lantern-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* News Modal */}
    {selectedNews && (
       <div className="fixed inset-0 z-[60] bg-midnight-fog/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm" onClick={() => setSelectedNews(null)}>
          <div className="relative w-full max-w-2xl bg-[#1D1F21] border border-mist-grey/30 shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
             {/* Paper Texture */}
             <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}></div>
             
             <div className="p-8 md:p-12 relative z-10">
                 <button onClick={() => setSelectedNews(null)} className="absolute top-4 right-4 text-mist-grey hover:text-lantern-red transition-colors text-xl">
                   <i className="fa-solid fa-xmark"></i>
                 </button>
                 
                 <div className="flex items-center gap-4 mb-6">
                    <span className="bg-lantern-red text-white text-xs font-bold px-2 py-1 tracking-widest">{selectedNews.category}</span>
                    <span className="text-mist-grey/60 font-mono text-sm">{selectedNews.date}</span>
                 </div>
                 
                 <h3 className="text-2xl md:text-4xl font-display font-bold text-moon-silver mb-8 leading-snug">
                   {selectedNews.title}
                 </h3>
                 
                 <div className="prose prose-invert prose-p:text-mist-grey prose-p:font-serif prose-p:leading-loose max-h-[40vh] overflow-y-auto custom-scrollbar pr-4">
                     <p>
                        {/* Simulated Content */}
                        {t.news.readMore}
                     </p>
                     <p>
                        {/* Placeholder generic text to fill the modal visually */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     </p>
                     <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/10 text-right">
                     <button onClick={() => setSelectedNews(null)} className="text-mist-grey hover:text-white text-sm tracking-widest font-bold">
                        [ CLOSE ]
                     </button>
                 </div>
             </div>
          </div>
       </div>
    )}
    </>
  );
}

export default LatestNews;