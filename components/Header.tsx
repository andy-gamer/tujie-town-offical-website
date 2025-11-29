import React, { useState, useEffect } from 'react';
import { ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

const Header: React.FC = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show logo only when user scrolls down to Latest News section
      const newsSection = document.getElementById('news');
      if (newsSection) {
        const rect = newsSection.getBoundingClientRect();
        // If the top of the news section is near the top of viewport (or passed it)
        if (rect.top <= 100) {
           setShowLogo(true);
        } else {
           setShowLogo(false);
        }
      } else {
         // Fallback if section missing
         setShowLogo(window.scrollY > 600);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLangChange = (l: Language) => {
    setLang(l);
    setLangMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
  ];

  const steamUrl = "https://store.steampowered.com/app/4209230/?utm_source=officialsite&utm_campaign=tujietown";

  return (
    <>
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b will-change-transform transform-gpu ${
        showLogo || mobileMenuOpen
          ? 'bg-[#1c2329]/95 backdrop-blur-md shadow-lg border-mist-grey/10 py-3 md:py-4' 
          : 'bg-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center pointer-events-auto">
        {/* Logo Image - Only visible when scrolled to News */}
        <div 
          className={`flex flex-col cursor-pointer group z-50 relative transition-all duration-700 ${showLogo ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src={ASSETS.logo} 
            alt="Logo" 
            className="h-10 md:h-12 w-auto object-contain drop-shadow-md brightness-110"
          />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
             {['news', 'town', 'gameplay'].map((section) => (
               <button 
                 key={section}
                 onClick={() => scrollToSection(section)} 
                 className="text-base font-bold text-mist-grey hover:text-moon-silver transition-colors tracking-[0.15em] relative group font-sans uppercase shadow-black drop-shadow-md"
               >
                 {section === 'town' ? t.nav.world : section === 'news' ? t.nav.news : t.nav.gameplay}
                 <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-lantern-red transition-all group-hover:w-full opacity-0 group-hover:opacity-100"></span>
               </button>
             ))}
          </div>

          <a 
            href={steamUrl}
            target="_blank" 
            rel="noreferrer" 
            className="bg-lantern-red hover:bg-[#a02a21] text-moon-silver px-6 py-2 text-base font-bold shadow-[0_0_20px_rgba(192,53,43,0.4)] hover:shadow-[0_0_30px_rgba(192,53,43,0.6)] transition-all tracking-widest flex items-center gap-3 rounded-none border border-red-400/20 group transform hover:-translate-y-0.5"
          >
            <i className="fa-brands fa-steam text-lg group-hover:scale-110 transition-transform"></i>
            {t.nav.wishlist}
          </a>

          {/* Language Switcher Desktop */}
          <div className="relative">
             <button 
               className="text-mist-grey hover:text-moon-silver transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wider drop-shadow-md"
               onClick={() => setLangMenuOpen(!langMenuOpen)}
             >
               <i className="fa-solid fa-globe"></i>
               {lang === 'zh-TW' ? '繁中' : lang === 'zh-CN' ? '简中' : lang === 'en' ? 'EN' : lang === 'ja' ? 'JP' : 'KO'}
             </button>
             {langMenuOpen && (
               <div className="absolute top-full right-0 mt-4 w-32 bg-valley-teal border border-mist-grey/20 shadow-xl flex flex-col py-2 animate-fade-in">
                 {languages.map((l) => (
                   <button 
                     key={l.code} 
                     onClick={() => handleLangChange(l.code)}
                     className={`px-4 py-2 text-left hover:bg-lantern-red/20 hover:text-white transition-colors text-sm ${lang === l.code ? 'text-lantern-red font-bold' : 'text-mist-grey'}`}
                   >
                     {l.label}
                   </button>
                 ))}
               </div>
             )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden z-50 text-moon-silver text-2xl hover:text-lantern-red transition-colors p-2 touch-manipulation drop-shadow-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    {/* Using h-[100dvh] fixes address bar jumping issues on mobile */}
    <div className={`fixed inset-0 bg-midnight-fog z-40 flex flex-col items-center transition-all duration-300 md:hidden h-[100dvh] pt-24 pb-safe ${mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${ASSETS.fog1})` }}></div>
        
        <div className="flex flex-col gap-6 text-center relative z-10 w-full px-8 flex-1 overflow-y-auto">
             {['news', 'town', 'gameplay'].map((section) => (
               <button 
                 key={section}
                 onClick={() => scrollToSection(section)} 
                 className="text-xl font-display font-bold text-mist-grey hover:text-lantern-red transition-colors tracking-[0.2em] border-b border-white/10 pb-4 w-full text-left"
               >
                 {section === 'town' ? t.nav.world : section === 'news' ? t.nav.news : t.nav.gameplay}
               </button>
             ))}
             
             {/* Mobile Language Switcher */}
             <div className="grid grid-cols-3 gap-3 border-b border-white/10 pb-4 w-full">
               {languages.map((l) => (
                   <button 
                     key={l.code} 
                     onClick={() => handleLangChange(l.code)}
                     className={`text-sm py-2 rounded-sm transition-colors ${lang === l.code ? 'text-lantern-red font-bold border border-lantern-red/30 bg-lantern-red/10' : 'text-mist-grey border border-transparent'}`}
                   >
                     {l.label}
                   </button>
               ))}
             </div>
        </div>

        {/* Fixed Bottom Action for Stability */}
        <div className="w-full p-6 pb-8 bg-midnight-fog border-t border-white/5 relative z-50">
           <a 
              href={steamUrl}
              target="_blank" 
              rel="noreferrer" 
              className="bg-lantern-red text-moon-silver px-8 py-4 text-base font-bold shadow-[0_0_20px_rgba(192,53,43,0.4)] tracking-widest flex items-center justify-center gap-3 w-full"
            >
              <i className="fa-brands fa-steam text-xl"></i>
              {t.nav.wishlist}
            </a>
        </div>
    </div>
    </>
  );
};

export default Header;