
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

export interface NewsItem {
  date: string;
  category: string;
  title: string;
}

const LatestNews = () => {
  const { t } = useLanguage();
  
  // State for news items to support async loading
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    // TODO: Connect to Firebase here in the future
    if (t.news?.items) {
      setNewsItems(t.news.items);
    }
  }, [t.news]);

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Modal content component to be rendered via Portal
  const ModalContent = () => (
    <div 
      className="fixed inset-0 z-[100] bg-midnight-fog/95 flex items-center justify-center p-0 md:p-4 animate-modal-in backdrop-blur-sm" 
      onClick={() => setSelectedNews(null)}
    >
      <div 
        className="relative w-full h-full md:h-auto md:max-w-2xl md:max-h-[90vh] bg-[#1D1F21] border border-mist-grey/30 shadow-2xl flex flex-col rounded-none" 
        onClick={e => e.stopPropagation()}
      >
          {/* Paper Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay rounded-none" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}></div>
          
          {/* Close Button - Sticky on Mobile */}
          <div className="absolute top-4 right-4 md:top-0 md:right-0 p-0 md:p-4 z-50">
              <button onClick={() => setSelectedNews(null)} className="text-mist-grey hover:text-lantern-red transition-colors text-xl w-10 h-10 flex items-center justify-center bg-[#1D1F21]/80 rounded-full md:bg-transparent md:rounded-none border border-mist-grey/20 md:border-0 shadow-lg md:shadow-none">
                <i className="fa-solid fa-xmark"></i>
              </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 relative z-10 pt-16 md:pt-12">
              <div className="flex items-center gap-4 mb-6 pt-2">
                <span className="bg-lantern-red text-white text-xs font-bold px-2 py-1 tracking-widest">{selectedNews?.category}</span>
                <span className="text-mist-grey/60 font-mono text-sm">{selectedNews?.date}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-moon-silver mb-8 leading-snug pr-8">
                {selectedNews?.title}
              </h3>
              
              {/* Content */}
              <div className="text-mist-grey font-serif leading-loose text-base md:text-lg space-y-6">
                  <p>
                    感謝大家來到土界鎮。官網現已開放，您可以自由探索這個充滿謎團的小鎮，並從中拼湊出關於失蹤案件的真相。
                  </p>
                  <p>
                    如果您喜歡我們的作品，歡迎追蹤以下社群平台以獲取第一手開發進度，或加入 Steam 願望清單給予我們支持：
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <a href="https://store.steampowered.com/app/4209230/_Twjie_Town/?utm_source=website&utm_medium=official&utm_campaign=wishlist" target="_blank" rel="noreferrer" className="block text-lantern-red hover:text-white font-bold transition-colors bg-white/5 p-4 border border-white/10 hover:bg-lantern-red/20 hover:border-lantern-red">
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
          <div className="p-4 md:p-6 border-t border-white/10 text-right bg-[#1D1F21] relative z-20 rounded-b-none">
              <button onClick={() => setSelectedNews(null)} className="text-mist-grey hover:text-white text-sm tracking-widest font-bold w-full md:w-auto py-3 md:py-0 border md:border-0 border-white/10">
                [ 關閉 CLOSE ]
              </button>
          </div>
      </div>
    </div>
  );

  return (
    <>
    <section id="news" className="py-16 md:py-24 relative border-t border-lily-shadow/30 bg-midnight-fog">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-repeat" style={{ backgroundImage: `url(${ASSETS.textureCork})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-midnight-fog via-valley-teal/30 to-midnight-fog opacity-90"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 border-b border-mist-grey/20 pb-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-moon-silver tracking-[0.2em] drop-shadow-md">
            {t.news?.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-mist-grey/10 bg-black/20 backdrop-blur-sm">
          {newsItems.map((item: NewsItem, idx: number) => (
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
              {/* Increased font size for better readability on mobile (text-[15px]) */}
              <p className="text-mist-grey/60 text-[15px] md:text-base font-sans line-clamp-3 mt-auto leading-relaxed group-hover:text-mist-grey transition-colors">
                {t.news?.readMore}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-lantern-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {selectedNews && createPortal(<ModalContent />, document.body)}
    </>
  );
}

export default LatestNews;
