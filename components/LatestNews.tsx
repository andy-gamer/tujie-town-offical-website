
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
       <div className="fixed inset-0 z-[70] bg-midnight-fog/95 flex items-end md:items-center justify-center p-0 md:p-4 animate-fade-in backdrop-blur-sm" onClick={() => setSelectedNews(null)}>
          <div className="relative w-full h-[90dvh] md:h-auto md:max-h-[85vh] md:max-w-2xl bg-[#1D1F21] border-t md:border border-mist-grey/30 shadow-2xl flex flex-col rounded-t-lg md:rounded-none" onClick={e => e.stopPropagation()}>
             {/* Paper Texture */}
             <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay rounded-t-lg md:rounded-none" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}></div>
             
             {/* Close Button - Sticky on Mobile */}
             <div className="absolute top-0 right-0 p-4 z-50">
                 <button onClick={() => setSelectedNews(null)} className="text-mist-grey hover:text-lantern-red transition-colors text-2xl w-10 h-10 flex items-center justify-center bg-[#1D1F21]/80 rounded-full md:bg-transparent md:rounded-none">
                   <i className="fa-solid fa-xmark"></i>
                 </button>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 relative z-10">
                 <div className="flex items-center gap-4 mb-6 pt-2">
                    <span className="bg-lantern-red text-white text-xs font-bold px-2 py-1 tracking-widest">{selectedNews.category}</span>
                    <span className="text-mist-grey/60 font-mono text-sm">{selectedNews.date}</span>
                 </div>
                 
                 <h3 className="text-2xl md:text-3xl font-display font-bold text-moon-silver mb-8 leading-snug">
                   {selectedNews.title}
                 </h3>
                 
                 {/* Content - Removed 'prose' class to avoid dependency issues, using direct styles */}
                 <div className="text-mist-grey font-serif leading-loose text-base space-y-6">
                     <p>
                        感謝大家來到土界鎮。官網現已開放，您可以自由探索這個充滿謎團的小鎮，並從中拼湊出關於失蹤案件的真相。
                     </p>
                     <p>
                        如果您喜歡我們的作品，歡迎追蹤以下社群平台以獲取第一手開發進度，或加入 Steam 願望清單給予我們支持：
                     </p>
                     
                     <div className="mt-8 space-y-4">
                        <a href="https://store.steampowered.com/app/4209230/?utm_source=officialsite&utm_campaign=tujietown" target="_blank" rel="noreferrer" className="block text-lantern-red hover:text-white font-bold transition-colors bg-white/5 p-4 border border-white/10 hover:bg-lantern-red/20 hover:border-lantern-red">
                            <div className="flex items-center gap-3">
                                <i className="fa-brands fa-steam text-2xl"></i> 
                                <span>Steam 商店頁面 (加入願望清單)</span>
                            </div>
                        </a>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                            <a href="https://www.facebook.com/orizengames" target="_blank" rel="noreferrer" className="flex-1 text-mist-grey hover:text-white flex items-center gap-3 transition-colors p-3 border border-transparent hover:border-white/10 bg-white/0 hover:bg-white/5">
                                <i className="fa-brands fa-facebook text-xl w-6 text-center"></i> 
                                <span>Facebook 粉絲專頁</span>
                            </a>
                            <a href="https://www.instagram.com/tujietown.offical" target="_blank" rel="noreferrer" className="flex-1 text-mist-grey hover:text-white flex items-center gap-3 transition-colors p-3 border border-transparent hover:border-white/10 bg-white/0 hover:bg-white/5">
                                <i className="fa-brands fa-instagram text-xl w-6 text-center"></i> 
                                <span>Instagram 官方帳號</span>
                            </a>
                        </div>
                     </div>
                 </div>
             </div>
             
             {/* Bottom Footer in Modal */}
             <div className="p-6 border-t border-white/10 text-right bg-[#1D1F21] relative z-20">
                 <button onClick={() => setSelectedNews(null)} className="text-mist-grey hover:text-white text-sm tracking-widest font-bold w-full md:w-auto py-3 md:py-0 border md:border-0 border-white/10">
                    [ 關閉 CLOSE ]
                 </button>
             </div>
          </div>
       </div>
    )}
    </>
  );
}

export default LatestNews;
