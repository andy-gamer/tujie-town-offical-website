
import React, { useState } from 'react';
import PrivacyModal from './PrivacyModal';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
    <footer className="bg-[#0b0c0d] py-12 md:py-20 text-center relative overflow-hidden border-t border-lily-shadow">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Compact Logo Row */}
        <div className="flex flex-col items-center mb-8 md:mb-12 opacity-80">
            <h2 className="text-xl md:text-3xl font-display font-bold text-moon-silver tracking-[0.2em] mb-3 md:mb-4">源境創遊 | OrzienGames</h2>
            <p className="text-mist-grey font-serif text-sm md:text-base tracking-widest">以「源」為始，稚心投入。</p>
        </div>

        {/* Main Emotional Copy - Less Visible */}
        <p className="text-mist-grey/40 font-serif text-xs md:text-sm tracking-widest mb-8 max-w-2xl mx-auto leading-loose px-4">
          “白日凡人，夜裡追夢人。一群朝九晚五的上班族，源於對遊戲的熱愛，從玩家化為開發者，期盼也能作出有共鳴的作品。”
        </p>

        {/* Social Icons - Individual Hover Glow */}
        <div className="flex justify-center gap-8 md:gap-12 mb-10 md:mb-16">
            <a href="#" className="text-mist-grey opacity-40 hover:opacity-100 hover:text-white transition-all duration-300 text-2xl md:text-4xl p-2 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-110">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-mist-grey opacity-40 hover:opacity-100 hover:text-white transition-all duration-300 text-2xl md:text-4xl p-2 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-110">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-mist-grey opacity-40 hover:opacity-100 hover:text-white transition-all duration-300 text-2xl md:text-4xl p-2 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-110">
                <i className="fa-brands fa-x-twitter"></i>
            </a>
        </div>
  
        {/* Detailed Credits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-left w-full max-w-5xl mx-auto mb-10 md:mb-16 border-t border-white/5 pt-8 md:pt-12 px-4">
           <div className="space-y-4">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-4 uppercase font-mono">Production & Narrative</div>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">發起人 Game Director｜</span> 安迪</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">主編 Writer｜</span> Kooche</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">協力編劇 Co-Writer｜</span> 晉子、西西</p>
           </div>
           <div className="space-y-4">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-4 uppercase font-mono">Design & Art</div>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">遊戲設計 Game Design｜</span> DB、芝芝、安迪</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">美術設計 Artist｜</span> 阿鳳、PoG、宇琦</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">美術/技術支援 Supporter｜</span> 腦鼠、御井、布丁、星光</p>
           </div>
           <div className="space-y-4">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-4 uppercase font-mono">Tech & Audio</div>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">UIUX｜</span> Wunsang</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">程式 Programmer｜</span> 安迪、DB</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">音樂及音效 Music/Sound｜</span> Vicky</p>
           </div>
        </div>
  
        <div className="flex flex-col items-center gap-6 border-t border-white/5 pt-8 w-full max-w-5xl">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] text-mist-grey/40 tracking-wider font-sans uppercase px-4">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-mist-grey transition-colors">Privacy Policy</button>
            <span>/</span>
            <button className="hover:text-mist-grey transition-colors cursor-not-allowed opacity-50">Terms of Service</button>
            <span>/</span>
            <a href="mailto:contact@orziengames.com" className="hover:text-mist-grey transition-colors">Contact Us</a>
            <span className="w-full md:w-auto md:ml-4 mt-2 md:mt-0">© 2026 ORZIEN GAMES.</span>
          </div>
        </div>
      </div>
    </footer>
    {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  );
};

export default Footer;
