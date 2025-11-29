
import React, { useState } from 'react';
import PrivacyModal from './PrivacyModal';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { t } = useLanguage();

  return (
    <>
    <footer className="bg-[#0b0c0d] py-16 md:py-24 text-center relative overflow-hidden border-t border-lily-shadow">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Title Group */}
        <div className="flex flex-col items-center mb-8 md:mb-12 opacity-90">
            <h2 className="text-xl md:text-3xl font-display font-bold text-moon-silver tracking-[0.2em] mb-3 md:mb-4 hover:text-lantern-red transition-colors">
              <a href="https://social.orizengames.com/" target="_blank" rel="noreferrer">
                {t.footer.studio}
              </a>
            </h2>
            <p className="text-mist-grey font-serif text-sm md:text-base tracking-widest">{t.footer.tagline}</p>
        </div>

        {/* Main Description */}
        <p className="text-mist-grey/60 font-serif text-xs md:text-sm tracking-widest mb-12 max-w-2xl mx-auto leading-loose px-4 whitespace-pre-line text-center">
          {t.footer.desc}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-10 md:gap-16 mb-12 md:mb-16">
            <a href="https://www.facebook.com/orizengames" target="_blank" rel="noreferrer" className="text-mist-grey opacity-50 hover:opacity-100 hover:text-white transition-all duration-300 text-2xl md:text-3xl hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-110">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/tujietown.offical" target="_blank" rel="noreferrer" className="text-mist-grey opacity-50 hover:opacity-100 hover:text-white transition-all duration-300 text-2xl md:text-3xl hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-110">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:contact@orziengames.com" className="text-mist-grey opacity-50 hover:opacity-100 hover:text-white transition-all duration-300 text-2xl md:text-3xl hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-110">
                <i className="fa-solid fa-envelope"></i>
            </a>
        </div>
  
        {/* Detailed Credits - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-left w-full max-w-6xl mx-auto mb-16 border-t border-white/5 pt-12 px-4 md:px-0">
           
           {/* Column 1: Production & Narrative */}
           <div className="space-y-5">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-2 uppercase font-mono border-b border-lantern-red/20 pb-2 inline-block">
               {t.footer.credits.col1}
             </div>
             <div className="space-y-3">
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.director}</span>
                   安迪
                </p>
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.writer}</span>
                   Kooche
                </p>
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.coWriter}</span>
                   晉子、西西
                </p>
             </div>
           </div>

           {/* Column 2: Design & Art */}
           <div className="space-y-5">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-2 uppercase font-mono border-b border-lantern-red/20 pb-2 inline-block">
               {t.footer.credits.col2}
             </div>
             <div className="space-y-3">
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.gameDesign}</span>
                   DB、芝芝、安迪、布丁(前期)
                </p>
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.artist}</span>
                   阿鳳、PoG、宇琦
                </p>
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.supporter}</span>
                   腦鼠、御井
                </p>
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.uiux}</span>
                   Wunsang
                </p>
             </div>
           </div>

           {/* Column 3: Tech & Audio */}
           <div className="space-y-5">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-2 uppercase font-mono border-b border-lantern-red/20 pb-2 inline-block">
               {t.footer.credits.col3}
             </div>
             <div className="space-y-3">
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.programmer}</span>
                   安迪、DB
                </p>
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.techSupporter}</span>
                   星光
                </p>
                <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide">
                   <span className="text-moon-silver/90 font-bold block mb-1">{t.footer.credits.roles.sound}</span>
                   Vicky
                </p>
             </div>
           </div>
        </div>
  
        {/* Links */}
        <div className="flex flex-col items-center gap-4 border-t border-white/5 pt-8 w-full max-w-5xl">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-mist-grey/40 tracking-wider font-sans uppercase">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-mist-grey transition-colors">{t.footer.privacy}</button>
            <span className="opacity-30">|</span>
            <a href="mailto:contact@orziengames.com" className="hover:text-mist-grey transition-colors">{t.footer.contact}</a>
            <span className="opacity-30">|</span>
            <span className="w-full md:w-auto mt-2 md:mt-0">© 2026 ORZIEN GAMES.</span>
          </div>
        </div>
      </div>
    </footer>
    {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  );
};

export default Footer;
