
import React, { useState, useEffect } from 'react';
import { ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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

  return (
    <>
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#1c2329]/95 backdrop-blur-md py-3 md:py-4 border-mist-grey/10 shadow-lg' 
          : 'bg-transparent py-4 md:py-8 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex flex-col cursor-pointer group z-50 relative" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h1 className="text-xl md:text-3xl font-display font-black text-moon-silver tracking-[0.2em] drop-shadow-md group-hover:text-lantern-red transition-colors flex items-center gap-2">
            土界鎮
          </h1>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
             {['town', 'news', 'gameplay'].map((section) => (
               <button 
                 key={section}
                 onClick={() => scrollToSection(section)} 
                 className="text-base font-bold text-mist-grey hover:text-moon-silver transition-colors tracking-[0.15em] relative group font-sans uppercase"
               >
                 {section === 'town' ? t.nav.world : section === 'news' ? t.nav.news : t.nav.gameplay}
                 <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-lantern-red transition-all group-hover:w-full opacity-0 group-hover:opacity-100"></span>
               </button>
             ))}
          </div>

          <a 
            href="https://store.steampowered.com/" 
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
               className="text-mist-grey hover:text-moon-silver transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wider"
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
          className="md:hidden z-50 text-moon-silver text-2xl hover:text-lantern-red transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`fixed inset-0 bg-midnight-fog z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${ASSETS.fog1})` }}></div>
        <div className="flex flex-col gap-8 text-center relative z-10 w-full px-6">
             {['town', 'news', 'gameplay'].map((section) => (
               <button 
                 key={section}
                 onClick={() => scrollToSection(section)} 
                 className="text-xl font-display font-bold text-mist-grey hover:text-lantern-red transition-colors tracking-[0.2em] border-b border-white/10 pb-4 w-full"
               >
                 {section === 'town' ? t.nav.world : section === 'news' ? t.nav.news : t.nav.gameplay}
               </button>
             ))}
             
             {/* Mobile Language Switcher */}
             <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-4 w-full">
               {languages.map((l) => (
                   <button 
                     key={l.code} 
                     onClick={() => handleLangChange(l.code)}
                     className={`text-sm py-2 ${lang === l.code ? 'text-lantern-red font-bold border border-lantern-red/30 bg-lantern-red/10' : 'text-mist-grey border border-transparent'}`}
                   >
                     {l.label}
                   </button>
               ))}
             </div>

             <a 
                href="https://store.steampowered.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="mt-4 bg-lantern-red text-moon-silver px-8 py-4 text-base font-bold shadow-[0_0_20px_rgba(192,53,43,0.4)] tracking-widest flex items-center justify-center gap-3 w-full"
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
