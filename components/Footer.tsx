
import React, { useState } from 'react';
import PrivacyModal from './PrivacyModal';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { t } = useLanguage();

  return (
    <>
    <footer className="bg-[#0b0c0d] py-12 md:py-20 text-center relative overflow-hidden border-t border-lily-shadow">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Compact Logo Row */}
        <div className="flex flex-col items-center mb-8 md:mb-12 opacity-90">
            <h2 className="text-xl md:text-3xl font-display font-bold text-moon-silver tracking-[0.2em] mb-3 md:mb-4 hover:text-lantern-red transition-colors">
              <a href="https://social.orizengames.com/" target="_blank" rel="noreferrer">
                源境創遊 | OrzienGames
              </a>
            </h2>
            <p className="text-mist-grey font-serif text-sm md:text-base tracking-widest">{t.footer.tagline}</p>
        </div>

        {/* Main Emotional Copy - Less Visible */}
        <p className="text-mist-grey/50 font-serif text-xs md:text-sm tracking-widest mb-8 max-w-2xl mx-auto leading-loose px-4 whitespace-pre-line">
          {t.footer.quote}
        </p>

        {/* Social Icons - Individual Hover Glow */}
        <div className="flex justify-center gap-8 md:gap-12 mb-10 md:mb-16">
            <a href="https://www.facebook.com/orizengames" target="_blank" rel="noreferrer" className="text-mist-grey opacity-40 hover:opacity-100 hover:text-white transition-all duration-300 text-2xl md:text-4xl p-2 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-110">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/tujietown.offical" target="_blank" rel="noreferrer" className="text-mist-grey opacity-40 hover:opacity-100 hover:text-white transition-all duration-300 text-2xl md:text-4xl p-2 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-110">
                <i className="fa-brands fa-instagram"></i>
            </a>
            {/* Kept other social icon as placeholder or removed if not needed, kept generic email mailto */}
            <a href="mailto:contact@orziengames.com" className="text-mist-grey opacity-40 hover:opacity-100 hover:text-white transition-all duration-300 text-2xl md:text-4xl p-2 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-110">
                <i className="fa-solid fa-envelope"></i>
            </a>
        </div>
  
        {/* Detailed Credits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-left w-full max-w-5xl mx-auto mb-10 md:mb-16 border-t border-white/5 pt-8 md:pt-12 px-4">
           {/* Production & Narrative */}
           <div className="space-y-4">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-4 uppercase font-mono">Production & Narrative</div>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.director}｜</span> 安迪</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.writer}｜</span> Kooche</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.coWriter}｜</span> 晉子、西西</p>
           </div>

           {/* Design & Art */}
           <div className="space-y-4">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-4 uppercase font-mono">Design & Art</div>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.gameDesign}｜</span> DB、芝芝、安迪、布丁(前期)</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.artist}｜</span> 阿鳳、PoG、宇琦</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.supporter}｜</span> 腦鼠、御井</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.uiux}｜</span> Wunsang</p>
           </div>

           {/* Tech & Audio */}
           <div className="space-y-4">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-4 uppercase font-mono">Tech & Audio</div>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.programmer}｜</span> 安迪、DB</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.techSupporter}｜</span> 星光</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">{t.footer.sound}｜</span> Vicky</p>
           </div>
        </div>
  
        <div className="flex flex-col items-center gap-6 border-t border-white/5 pt-8 w-full max-w-5xl">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] text-mist-grey/40 tracking-wider font-sans uppercase px-4">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-mist-grey transition-colors">{t.footer.privacy}</button>
            <span>/</span>
            <a href="mailto:contact@orziengames.com" className="hover:text-mist-grey transition-colors">{t.footer.contact}</a>
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
