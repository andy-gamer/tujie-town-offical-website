
import React, { useState, useEffect } from 'react';
import { HiddenItemData } from './types';

// --- Local Assets Configuration ---
const ASSETS = {
  // Core Art
  heroBg: './assets/hero-main.jpg',
  townImage: './assets/town-teahouse.jpg',
  character: './assets/character.jpg',
  gameplayExplore: './assets/gameplay-explore.jpg',
  gameplaySight: './assets/gameplay-sight.jpg',
  gameplaySurvival: './assets/gameplay-survival.jpg',
  monsterSketch: './assets/monster-sketch.png',
  
  // Texture & Effects (Seamless preferred)
  texturePaper: './assets/texture-paper.png',
  textureWood: './assets/texture-wood.png',
  textureCork: './assets/texture-cork.png',
  fog1: './assets/fog1.png',
  fog2: './assets/fog2.png',
};

const ITEMS: HiddenItemData[] = [
  { id: 'item1', name: '殘破布偶', hint: '藏在陰影處的玩偶...', icon: 'fa-child-reaching', top: '75%', left: '20%', section: 'hero' },
  { id: 'item2', name: '兒童票根', hint: '遺落在茶行桌上的車票...', icon: 'fa-ticket', top: '55%', left: '65%', section: 'town' },
  { id: 'item3', name: '相片碎片', hint: '被遺忘的記憶碎片...', icon: 'fa-image', top: '30%', left: '50%', section: 'gameplay' }
];

// --- Components ---

// 0. Cinematic Preloader (Night Version)
const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { time: 1000, action: () => setStep(1) },
      { time: 3000, action: () => setStep(2) },
      { time: 5000, action: () => setStep(3) },
      { time: 5500, action: onComplete },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];
    sequence.forEach(({ time, action }) => {
      timeouts.push(setTimeout(action, time));
    });

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  if (step === 3) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050607] flex flex-col items-center justify-center overflow-hidden">
      {/* Moon & Grass Animation */}
      <div className={`transition-opacity duration-1000 absolute inset-0 flex items-end justify-center pointer-events-none opacity-60 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
         <svg viewBox="0 0 400 300" className="w-full h-full max-w-3xl absolute bottom-0">
            <defs>
              <filter id="moonGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Moon */}
            <circle cx="320" cy="60" r="25" fill="#F0F5FF" filter="url(#moonGlow)" opacity="0.1" className="animate-pulse" />
            
            {/* Swaying Grass & Lily */}
            <g className="animate-sway origin-bottom text-white/20" style={{ transformOrigin: '50% 100%' }}>
               {/* Grass Blades */}
               <path d="M50 300 Q 60 250 40 200" stroke="currentColor" strokeWidth="1" fill="none" />
               <path d="M70 300 Q 60 240 80 180" stroke="currentColor" strokeWidth="1" fill="none" />
               <path d="M300 300 Q 310 240 290 190" stroke="currentColor" strokeWidth="0.5" fill="none" />
               <path d="M350 300 Q 340 260 360 220" stroke="currentColor" strokeWidth="0.8" fill="none" />
               
               {/* Lily Flower (Stylized) */}
               <path d="M200 300 Q 200 200 180 150" stroke="currentColor" strokeWidth="1.5" fill="none" />
               <path d="M180 150 C 170 160 160 155 155 145" stroke="#C0352B" strokeWidth="2" fill="none" opacity="0.6" /> {/* Petal */}
               <path d="M180 150 C 190 160 200 155 205 145" stroke="#C0352B" strokeWidth="2" fill="none" opacity="0.6" /> {/* Petal */}
               <path d="M180 150 Q 180 130 170 120" stroke="#C0352B" strokeWidth="2" fill="none" opacity="0.6" /> {/* Petal */}
            </g>
         </svg>
      </div>

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-lily-pale font-display text-4xl md:text-7xl font-black tracking-[0.5em] mb-4 drop-shadow-lg">
          土界鎮
        </h1>
        <p className="text-lantern-red font-mono tracking-[0.3em] text-xs md:text-sm uppercase opacity-80">
          TUJIE TOWN
        </p>
      </div>
      
      <div className={`absolute bottom-20 transition-opacity duration-1000 delay-500 ${step === 2 ? 'opacity-100' : 'opacity-0'}`}>
         <p className="text-mist-grey/60 font-serif text-sm md:text-xl tracking-widest border-l-2 border-lantern-red pl-4 italic">
           「起風了……該回家了。」
         </p>
      </div>
      
      <style>{`
        @keyframes sway {
          0% { transform: rotate(-2deg); }
          100% { transform: rotate(2deg); }
        }
        .animate-sway {
          animation: sway 5s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

// Privacy Modal Component
const PrivacyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-[70] bg-midnight-fog/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
    <div className="relative w-full max-w-2xl bg-valley-teal border border-mist-grey p-6 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
      <button onClick={onClose} className="absolute top-4 right-4 text-mist-grey hover:text-lantern-red transition-colors text-xl">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <h3 className="text-2xl md:text-3xl font-display font-bold text-moon-silver mb-8 tracking-widest border-b border-lantern-red/30 pb-4">
        隱私權政策 PRIVACY POLICY
      </h3>
      <div className="text-mist-grey font-serif space-y-4 leading-relaxed max-h-[50vh] overflow-y-auto custom-scrollbar pr-4 text-sm md:text-base">
        <p>歡迎來到《土界鎮》官方網站。</p>
        <p>本網站為遊戲展示用途，我們非常重視您的隱私權。以下是我們的隱私權政策摘要：</p>
        <ul className="list-disc pl-5 space-y-2">
           <li><strong>資料收集：</strong>本網站目前不收集任何個人識別資料（PII）。</li>
           <li><strong>Cookies：</strong>本網站可能使用基本 Cookies 以優化您的瀏覽體驗（例如紀錄您的語言偏好或動畫播放狀態）。</li>
           <li><strong>第三方連結：</strong>本網站包含前往第三方網站（如 Steam, YouTube）的連結。我們不對這些外部網站的內容或隱私權做法負責。</li>
        </ul>
        <p className="mt-8 text-sm opacity-60 font-mono">最後更新日期：2026.01.01</p>
      </div>
      <div className="mt-8 text-center">
         <button onClick={onClose} className="px-8 py-2 border border-mist-grey hover:bg-mist-grey hover:text-valley-teal transition-colors font-bold tracking-widest text-sm">
           我了解了 UNDERSTOOD
         </button>
      </div>
    </div>
  </div>
);

// 1. Header
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <>
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled || mobileMenuOpen
          ? 'bg-valley-teal/95 backdrop-blur-md py-3 md:py-4 border-mist-grey/10 shadow-lg' 
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
            土界鎮 <span className="text-[10px] md:text-xs font-sans text-lantern-red border border-lantern-red px-2 py-0.5 tracking-widest opacity-80">DEMO</span>
          </h1>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
             {['town', 'news', 'gameplay'].map((section) => (
               <button 
                 key={section}
                 onClick={() => scrollToSection(section)} 
                 className="text-sm font-bold text-mist-grey hover:text-moon-silver transition-colors tracking-[0.15em] relative group font-sans uppercase"
               >
                 {section === 'town' ? '世界觀' : section === 'news' ? '最新消息' : '核心玩法'}
                 <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-lantern-red transition-all group-hover:w-full opacity-0 group-hover:opacity-100"></span>
               </button>
             ))}
          </div>

          <a 
            href="https://store.steampowered.com/" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-lantern-red hover:bg-[#a02a21] text-moon-silver px-6 py-2 text-sm font-bold shadow-[0_0_20px_rgba(192,53,43,0.4)] hover:shadow-[0_0_30px_rgba(192,53,43,0.6)] transition-all tracking-widest flex items-center gap-3 rounded-none border border-red-400/20 group transform hover:-translate-y-0.5"
          >
            <i className="fa-brands fa-steam text-lg group-hover:scale-110 transition-transform"></i>
            加入願望清單
          </a>
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
                 {section === 'town' ? '世界觀' : section === 'news' ? '最新消息' : '核心玩法'}
               </button>
             ))}
             <a 
                href="https://store.steampowered.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="mt-8 bg-lantern-red text-moon-silver px-8 py-4 text-base font-bold shadow-[0_0_20px_rgba(192,53,43,0.4)] tracking-widest flex items-center justify-center gap-3 w-full"
              >
                <i className="fa-brands fa-steam text-xl"></i>
                加入願望清單
              </a>
        </div>
    </div>
    </>
  );
};

// Trailer Modal
const TrailerModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-[60] bg-valley-teal/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm" onClick={onClose}>
    <div className="relative w-full max-w-6xl aspect-video bg-black border border-mist-grey shadow-[0_0_60px_rgba(192,53,43,0.3)]">
      <button onClick={onClose} className="absolute -top-12 right-0 text-mist-grey hover:text-lantern-red transition-colors text-lg tracking-widest font-display">
        [ 關閉 CLOSE ]
      </button>
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/tLonOGPNPFM?si=4KGd23FDp8txxDeR&autoplay=1" 
        title="Tujie Town Trailer" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

// 2. Hero Section
const Hero: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const heroItem = ITEMS.find(i => i.section === 'hero');
  const isFound = heroItem && foundItems.includes(heroItem.id);

  return (
    <>
      <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-midnight-fog select-none">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
           <img src={ASSETS.heroBg} className="w-full h-full object-cover opacity-50 animate-ken-burns mix-blend-overlay grayscale contrast-125" alt="Concept Art" />
           <div className="absolute inset-0 bg-gradient-to-t from-midnight-fog via-midnight-fog/60 to-valley-teal/80 mix-blend-multiply"></div>
           
           {/* Fog Layers */}
           <div className="absolute inset-0 bg-repeat-x animate-fog opacity-40 mix-blend-hard-light" style={{ backgroundImage: `url(${ASSETS.fog1})` }}></div>
           <div className="absolute inset-0 bg-repeat-x animate-fog-slow opacity-30 mix-blend-screen" style={{ backgroundImage: `url(${ASSETS.fog2})` }}></div>
           
           <div className="absolute inset-0 shadow-[inset_0_0_300px_rgba(29,31,33,1)]"></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-20 md:bottom-32 left-0 w-full px-6 md:px-24 pointer-events-auto z-10 flex justify-center md:justify-start">
           <div className="p-6 md:p-12 border-l-0 md:border-l-4 border-lantern-red/60 bg-valley-teal/40 md:bg-valley-teal/30 backdrop-blur-[2px] max-w-2xl w-full">
              <div className="mb-4 md:mb-8">
                <span className="block text-lantern-red font-display font-black tracking-[0.2em] text-4xl md:text-[8rem] leading-none drop-shadow-red-glow glitch opacity-90" data-text="2026">
                  2026
                </span>
                <span className="block text-mist-grey font-mono font-bold tracking-[0.4em] md:tracking-[0.6em] text-sm md:text-3xl mt-2 ml-1 opacity-60">
                  COMING SOON
                </span>
              </div>
              <p className="text-lily-pale font-serif leading-loose text-base md:text-2xl shadow-black drop-shadow-md mb-8 md:mb-12 font-medium tracking-wide">
                為了尋找父親，<br/>
                你回到了這座被蔗糖與秘密包裹的小鎮。<br/>
                在這裡，每一次呼吸都太安靜，<br/>
                每一句話……<br className="md:hidden" />
                <span className="text-lantern-red font-bold font-display text-lg md:text-3xl md:mx-2 border-b-2 border-lantern-red inline-block mt-2 md:mt-0">都像缺了最後一筆。</span>
              </p>
              <div className="flex flex-col md:flex-row gap-8">
                <button onClick={() => setShowTrailer(true)} className="group flex items-center gap-4 text-base md:text-lg tracking-widest text-moon-silver hover:text-lantern-red transition-colors">
                  <span className="w-12 h-12 md:w-16 md:h-16 border border-mist-grey/50 flex items-center justify-center group-hover:border-lantern-red group-hover:bg-lantern-red/10 transition-all">
                    <i className="fa-solid fa-play ml-1 text-xl md:text-2xl"></i>
                  </span>
                  <span className="border-b border-transparent group-hover:border-lantern-red pb-1 font-display font-bold">觀看概念影片</span>
                </button>
              </div>
           </div>
        </div>

        {/* Hidden Item */}
        {!isFound && heroItem && (
          <button
            onClick={(e) => { e.stopPropagation(); onFindItem(heroItem.id); }}
            className="absolute w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-lily-pale/50 hover:text-lantern-red transition-all cursor-pointer animate-float z-50 group"
            style={{ top: heroItem.top, left: heroItem.left }}
          >
            <i className={`fa-solid ${heroItem.icon} text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] opacity-40 group-hover:opacity-80`}></i>
          </button>
        )}
      </section>
      {showTrailer && <TrailerModal onClose={() => setShowTrailer(false)} />}
    </>
  );
};

// 3. World & Town Section
const Town: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const [activeRule, setActiveRule] = useState<number | null>(null);
  const townItem = ITEMS.find(i => i.section === 'town');
  const isFound = townItem && foundItems.includes(townItem.id);

  const rules = [
    "看到蝸牛請繞道而行，切勿傷害。",
    "太陽下山後，請勿在戶外逗留。",
    "若看見不存在的車站，請立即閉上眼睛。",
    "絕對不要把「九姑娘花」帶出鎮外。"
  ];

  // Logic to handle both hover (desktop) and click (mobile)
  const handleRuleInteraction = (idx: number) => {
    if (activeRule === idx) {
        setActiveRule(null); // Toggle off if clicked again
    } else {
        setActiveRule(idx);
    }
  };

  return (
    <section id="town" className="relative py-12 md:py-48 bg-valley-teal overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${ASSETS.textureWood})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-fog via-valley-teal to-midnight-fog/90 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        <div className="relative w-full max-w-7xl flex flex-col lg:flex-row gap-0 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          {/* Top Label */}
          <div className="absolute -top-8 md:-top-10 left-0 bg-lily-pale px-6 md:px-8 py-1 md:py-2 z-0 border border-mist-grey shadow-lg transform -rotate-1">
             <span className="text-ui-dim-red font-mono text-sm md:text-base tracking-[0.2em] font-bold">TOP SECRET // 檔案</span>
          </div>

          {/* Left Panel: Image & World View */}
          <div className="w-full lg:w-5/12 bg-lily-pale border-r border-mist-grey/30 p-6 md:p-14 relative flex flex-col shadow-[inset_0_0_60px_rgba(0,0,0,0.1)]" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
             <div className="relative z-10 w-full mx-auto transform rotate-1 hover:rotate-0 duration-700 mb-8 md:mb-12 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 bg-mist-grey/30 rotate-1 shadow-sm z-20 backdrop-blur-sm"></div>
                <div className="bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-lg border border-gray-200">
                  <img src={ASSETS.townImage} className="w-full h-56 md:h-72 object-cover grayscale contrast-125 sepia-[0.3] brightness-90 group-hover:sepia-[0.1] transition-all" alt="Teahouse" />
                  <div className="absolute bottom-2 md:bottom-3 right-4 text-forgotten-ink font-mono font-bold text-[10px] md:text-xs tracking-widest opacity-70">FIG. 1: THE TEA HOUSE</div>
                </div>
             </div>
             <div className="relative z-10 mt-2 md:mt-4">
                <h3 className="text-2xl md:text-4xl font-display font-bold text-valley-teal mb-6 md:mb-8 border-b-2 border-lantern-red/50 pb-4 inline-block tracking-widest">關於「土界鎮」</h3>
                <p className="font-serif text-forgotten-ink leading-[2] md:leading-[2.4] text-justify text-base md:text-xl font-medium">
                  土界鎮是一座被山霧包住的小鎮。<br/>
                  三面環山，一面臨河，老街與廢鐵道交錯在谷地裡。<br/>
                  白天一切都顯得過於平靜；<br/>
                  到了夜晚，整個小鎮彷彿變了模樣。<br/>
                  鎮民從不說明原因，只會提醒：<br/>
                  <span className="font-bold font-display text-ui-dim-red text-lg md:text-2xl mt-6 block border-l-4 border-ui-dim-red pl-4 md:pl-6 py-2 bg-ui-dim-red/5">「遵守規矩，你就能平安。」</span>
                </p>
             </div>
          </div>

          {/* Right Panel: Survival Guide */}
          <div className="w-full lg:w-7/12 bg-[#F9F7F5] p-6 md:p-16 relative border-t lg:border-t-0 lg:border-l border-mist-grey shadow-[inset_0_0_80px_rgba(0,0,0,0.05)]" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
             <div className="absolute top-0 right-4 md:right-10 w-24 h-24 md:w-32 md:h-32 opacity-10 pointer-events-none mix-blend-multiply">
                 <div className="w-full h-full border-4 border-ui-dim-red rounded-full flex items-center justify-center transform rotate-12">
                     <span className="text-ui-dim-red font-display font-black text-base md:text-xl text-center">禁忌<br/>TABOO</span>
                 </div>
             </div>
             
             <div className="h-full relative z-10 flex flex-col">
                <div className="flex justify-between items-end border-b-4 border-double border-valley-teal pb-4 md:pb-6 mb-6 md:mb-10 mt-4 md:mt-0">
                  <h3 className="text-2xl md:text-5xl font-display font-bold text-valley-teal tracking-[0.2em]">鎮民生存指南</h3>
                  <span className="font-mono text-xs md:text-base text-ui-dim-red font-bold tracking-widest">VER. 2.0</span>
                </div>
                
                <ol className="space-y-4 md:space-y-6 font-display text-valley-teal text-base md:text-2xl list-decimal list-inside pl-1 md:pl-2 flex-grow">
                  {rules.map((rule, idx) => (
                    <li 
                      key={idx}
                      onClick={() => handleRuleInteraction(idx)}
                      onMouseEnter={() => setActiveRule(idx)} 
                      onMouseLeave={() => setActiveRule(null)} 
                      className={`relative p-2 md:p-4 transition-all duration-700 cursor-pointer tap-highlight-transparent
                        ${idx === 3 ? 'hover:text-lantern-red text-valley-teal' : 'hover:text-valley-teal/70'}
                        ${idx === 3 && activeRule === 3 ? 'bg-lantern-red/5 shadow-[inset_0_0_20px_rgba(192,53,43,0.1)]' : ''}
                      `}
                    >
                      {idx === 3 ? (
                          <div className="relative inline-block w-full group">
                            <span className={`relative z-10 transition-all duration-700 ${activeRule === 3 ? 'blur-[1px] opacity-70 text-lantern-red' : ''}`}>
                              {rule}
                            </span>
                            
                            {/* Visual Hint for Rule 4 (Fingerprint/Smudge) */}
                            <span className={`absolute -right-2 top-1/2 -translate-y-1/2 text-lantern-red/20 text-xl md:text-3xl transition-opacity duration-500 ${activeRule === 3 ? 'opacity-0' : 'opacity-100 animate-pulse'}`}>
                                <i className="fa-solid fa-fingerprint"></i>
                            </span>

                            {/* Refined Horror Effect */}
                            <div className={`absolute inset-0 flex items-center pointer-events-none transition-opacity duration-1000 ${activeRule === 3 ? 'opacity-100' : 'opacity-0'}`}>
                               <span className="text-xl md:text-4xl text-lantern-red/20 font-black font-display tracking-[0.5em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap blur-sm scale-110 hidden md:block">
                                 SHE IS WATCHING YOU
                               </span>
                               <span className="text-base md:text-2xl text-lantern-red font-black font-display tracking-[0.2em] md:tracking-[0.3em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-normal md:whitespace-nowrap text-center animate-pulse w-full">
                                 SHE IS WATCHING YOU
                               </span>
                            </div>
                          </div>
                      ) : (
                          <span>{rule}</span>
                      )}
                    </li>
                  ))}
                </ol>

                {!isFound && townItem && (
                  <button onClick={() => onFindItem(townItem.id)} className="absolute bottom-4 right-4 md:bottom-10 md:right-10 transform rotate-12 hover:rotate-0 hover:scale-105 transition-all z-30 group" title="撿起車票">
                    <div className="bg-[#e8e4dc] border border-forgotten-ink p-2 md:p-4 shadow-xl flex flex-col items-center gap-1 md:gap-2 w-24 h-16 md:w-32 md:h-20 justify-center group-hover:bg-white transition-colors relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-valley-teal"></div>
                       <div className="flex items-center gap-2">
                           <i className={`fa-solid ${townItem.icon} text-lantern-red text-base md:text-xl`}></i> 
                           <span className="font-display font-bold text-valley-teal text-sm md:text-lg">車票</span>
                       </div>
                       <span className="text-[8px] md:text-[10px] font-mono text-forgotten-ink tracking-widest">TICKET</span>
                    </div>
                  </button>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3.5 Latest News Section (Updated Visuals)
const LatestNews: React.FC = () => {
  const news = [
    { date: '2025.10.31', category: 'EVENT', title: '萬聖節特別活動：尋找隱藏的南瓜燈' },
    { date: '2025.09.15', category: 'DEVLOG', title: '開發日誌 #04：關於「花倀」的設計理念' },
    { date: '2025.08.01', category: 'UPDATE', title: 'Ver 0.5.2 更新公告 - 修正部分光影異常' },
  ];

  return (
    <section id="news" className="py-16 md:py-24 relative border-t border-lily-shadow/30 bg-midnight-fog">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-repeat" style={{ backgroundImage: `url(${ASSETS.textureCork})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-midnight-fog via-valley-teal/30 to-midnight-fog opacity-90"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 border-b border-mist-grey/20 pb-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-moon-silver tracking-[0.2em] drop-shadow-md">
            最新消息
          </h2>
          <a href="#" className="text-mist-grey hover:text-lantern-red transition-colors text-sm md:text-base font-bold tracking-widest mt-4 md:mt-0 font-mono">
            VIEW ALL NEWS <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-mist-grey/10 bg-black/20 backdrop-blur-sm">
          {news.map((item, idx) => (
            <div key={idx} className="group relative p-6 md:p-10 border-b md:border-b-0 md:border-r border-mist-grey/10 hover:bg-lantern-red/5 transition-all duration-300 cursor-pointer flex flex-col h-full last:border-b-0">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <span className="text-lantern-red font-mono text-[10px] md:text-xs font-bold tracking-wider px-2 py-1 border border-lantern-red/30 bg-lantern-red/5 group-hover:bg-lantern-red group-hover:text-white transition-colors">{item.category}</span>
                <span className="text-mist-grey/60 font-mono text-xs md:text-sm">{item.date}</span>
              </div>
              <h3 className="text-lg md:text-2xl font-display font-bold text-lily-pale mb-4 md:mb-6 group-hover:text-lantern-red transition-colors leading-relaxed line-clamp-2">
                {item.title}
              </h3>
              <p className="text-mist-grey/60 text-sm md:text-base font-sans line-clamp-3 mt-auto leading-relaxed group-hover:text-mist-grey transition-colors">
                點擊查看更多關於此更新的詳細內容。土界鎮的秘密正在逐漸揭開...
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-lantern-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. Gameplay Section
const Gameplay: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const item = ITEMS.find(i => i.section === 'gameplay');
  const isFound = item && foundItems.includes(item.id);

  const cards = [
    { title: '懷舊探索', sub: 'EXPLORATION', desc: '穿梭於 1970 年代的台灣街景、廢棄糖廠與老式車站。', icon: 'fa-map-location-dot', img: ASSETS.gameplayExplore },
    { title: '看取能力', sub: 'THE SIGHT', desc: '觸摸舊物讀取殘留的記憶碎片，還原被掩蓋的真相。', icon: 'fa-eye', img: ASSETS.gameplaySight },
    { title: '異界生存', sub: 'SURVIVAL', desc: '當月亮變色，面對擬態成人類的「花倀」，利用弱點求生。', icon: 'fa-person-running', img: ASSETS.gameplaySurvival },
  ];

  return (
    <section id="gameplay" className="py-20 md:py-32 bg-[#0c0d0e] text-moon-silver relative border-t border-lily-shadow shadow-[inset_0_0_100px_black]">
       <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 md:mb-24 text-lily-pale tracking-[0.3em] drop-shadow-lg opacity-90">核心玩法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
             {cards.map((card, idx) => (
                <div key={idx} className="group relative h-[450px] md:h-[600px] bg-valley-teal border border-ui-blue-grey/20 overflow-hidden hover:border-lantern-red/50 transition-colors duration-500 flex flex-col shadow-2xl">
                   {/* Image Background with Filters */}
                   <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-500">
                      <img src={card.img} className="w-full h-full object-cover grayscale contrast-125 brightness-75" alt={card.title} />
                      <div className="absolute inset-0 bg-valley-teal mix-blend-multiply"></div>
                   </div>
                   
                   <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-[#0c0d0e] via-valley-teal/90 to-transparent">
                      <div className="mb-auto opacity-20 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0 hidden md:block">
                         <i className={`fa-solid ${card.icon} text-6xl text-lantern-red`}></i>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] mb-2 md:mb-4 font-display text-lily-pale">{card.title}</h3>
                      <span className="text-[10px] md:text-xs font-mono text-lantern-red tracking-[0.3em] mb-4 md:mb-8 block font-bold border-l-2 border-lantern-red pl-3">{card.sub}</span>
                      
                      <p className="text-mist-grey text-base md:text-lg font-sans leading-loose border-t border-gray-800 pt-4 md:pt-8 group-hover:border-lantern-red/30 transition-colors">
                        {card.desc}
                      </p>
                   </div>
                </div>
             ))}
          </div>
          
          {!isFound && item && (
             <div className="absolute right-10 bottom-20 md:right-20 md:bottom-40 animate-pulse z-20">
                <button onClick={() => onFindItem(item.id)} className="text-mist-grey hover:text-white transition-colors p-4 md:p-6 transform hover:scale-110 opacity-40 hover:opacity-100" title="發現碎片">
                   <i className={`fa-solid ${item.icon} text-3xl md:text-5xl -rotate-12 drop-shadow-md`}></i>
                </button>
             </div>
          )}
       </div>
    </section>
  );
};

// 5. Monster Index
const MonsterIndex: React.FC<{ foundItems: string[] }> = ({ foundItems }) => {
  const allFound = foundItems.length === ITEMS.length;
  
  // Consistent dark theme, removed brown
  return (
    <section id="collection" className="py-24 md:py-40 bg-[#151719] relative overflow-hidden border-t border-lily-shadow flex justify-center">
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${ASSETS.textureWood})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="w-full max-w-[95%] md:max-w-[90%] relative z-10">
        <div className="text-center mb-12 md:mb-20">
           <h2 className="text-2xl md:text-5xl font-display font-bold tracking-[0.2em] text-lily-pale mb-6 md:mb-8 drop-shadow-lg">機密卷宗：失蹤者 No.01 ／ 林晴</h2>
           <p className="text-white/60 font-serif text-base md:text-xl max-w-3xl mx-auto leading-loose mb-8 md:mb-10 opacity-70 px-4">
             蒐集散落在土界鎮的記憶碎片，揭開那些被遺忘的異界生物真面目...
           </p>
           {!allFound && (
             <div className="inline-block bg-valley-teal/80 border border-lantern-red/30 px-6 py-2 md:px-8 md:py-3 text-lantern-red text-sm md:text-base font-bold animate-pulse tracking-wide font-sans shadow-lg backdrop-blur-sm">
               <i className="fa-solid fa-magnifying-glass mr-3"></i>
               檔案加密中：請尋找散落的 3 個記憶碎片
             </div>
           )}
        </div>

        {/* File Folder Container */}
        <div className="relative bg-[#d6cfc2] p-1 md:p-2 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.8)] mx-auto w-full max-w-[1200px] transform md:rotate-[0.5deg]">
           {/* Tab */}
           <div className="absolute -top-8 md:-top-10 left-4 md:left-10 bg-[#d6cfc2] px-8 md:px-12 py-2 md:py-3 rounded-t-md border-t border-l border-r border-[#b5ad9e] shadow-sm z-0">
              <span className="text-ui-dim-red font-mono font-bold tracking-widest text-sm md:text-lg">CASE #001970</span>
           </div>
           
           <div className="bg-[#f0eadd] p-6 md:p-12 relative overflow-hidden min-h-[auto] md:min-h-[700px] shadow-inner border border-[#b5ad9e]" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
              
              {!allFound && (
                 // Updated Locked State: Dark Frosted Glass + Secret Stamp (No blue)
                 <div className="absolute inset-0 bg-[#0f1112]/95 z-40 flex flex-col items-center justify-center text-center backdrop-blur-md p-6 md:p-8">
                    <div className="w-full h-full absolute inset-0 opacity-10" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}></div>
                    <i className="fa-solid fa-file-shield text-5xl md:text-8xl text-mist-grey/10 mb-6 md:mb-10"></i>
                    <div className="border-4 md:border-8 border-lantern-red/80 px-8 py-4 md:px-12 md:py-8 text-lantern-red/80 font-display font-black text-2xl md:text-6xl tracking-[0.2em] shadow-2xl uppercase transform -rotate-12 mix-blend-multiply opacity-90 border-double">
                       Top Secret
                    </div>
                    <div className="mt-8 font-mono text-mist-grey/40 tracking-[0.2em] md:tracking-[0.5em] text-xs md:text-sm">ACCESS DENIED // MISSING FRAGMENTS</div>
                 </div>
              )}

              <div className={`transition-all duration-1000 w-full h-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 ${allFound ? 'opacity-100 blur-0' : 'opacity-10 blur-sm grayscale'}`}>
                  
                  {/* Left Column: Photo & Evidence Slots */}
                  <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
                      <div className="bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-md transform -rotate-1 md:-rotate-2 border border-gray-200 relative">
                          <img src={ASSETS.monsterSketch} className="w-full h-64 md:h-80 object-contain mix-blend-multiply grayscale contrast-125" alt="Subject" />
                          <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 border-4 border-lantern-red rounded-full opacity-30"></div>
                          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 font-handwriting text-forgotten-ink text-lg md:text-xl font-bold">
                             最後目擊：自家窗口
                          </div>
                      </div>

                      <div className="bg-gray-200/50 p-4 md:p-6 border border-gray-300">
                          <h4 className="text-ui-blue-grey font-mono font-bold tracking-widest mb-4 border-b border-gray-300 pb-2 text-sm md:text-base">EVIDENCE LOG</h4>
                          <div className="grid grid-cols-3 gap-2 md:gap-4">
                             {ITEMS.map((item, i) => (
                               <div key={i} className={`aspect-square border border-gray-300 flex items-center justify-center ${foundItems.includes(item.id) ? 'bg-white' : 'bg-gray-100'}`}>
                                  {foundItems.includes(item.id) ? (
                                    <i className={`fa-solid ${item.icon} text-lg md:text-2xl text-forgotten-ink opacity-70`}></i>
                                  ) : (
                                    <span className="text-gray-300 text-lg md:text-2xl">?</span>
                                  )}
                               </div>
                             ))}
                          </div>
                      </div>
                  </div>

                  {/* Right Column: Text Report */}
                  <div className="md:col-span-7 font-serif text-forgotten-ink relative">
                      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 border-4 border-lantern-red rounded-full flex items-center justify-center opacity-20 transform rotate-12 pointer-events-none mix-blend-multiply">
                          <span className="text-lantern-red font-black text-sm md:text-xl uppercase transform -rotate-12">CONFIDENTIAL</span>
                      </div>

                      <div className="mb-6 md:mb-10">
                          <span className="bg-forgotten-ink text-lily-pale px-2 py-1 text-xs md:text-sm font-mono tracking-widest mb-2 inline-block">SUBJECT</span>
                          <h2 className="text-3xl md:text-5xl font-display font-black text-valley-teal tracking-widest border-b-4 border-valley-teal pb-2 md:pb-4 mb-4 md:mb-6">林晴</h2>
                          <p className="text-base md:text-xl leading-relaxed italic">
                             13 歲少女，個性開朗，疼愛妹妹。常穿藍色碎花洋裝，自幼習武。
                          </p>
                      </div>

                      <div className="space-y-6 md:space-y-8">
                          <div>
                              <h4 className="text-lantern-red font-bold text-base md:text-lg tracking-widest mb-2 md:mb-3 flex items-center gap-2">
                                <i className="fa-solid fa-caret-right"></i> 事件摘要 SUMMARY
                              </h4>
                              <p className="text-base md:text-lg leading-loose text-justify pl-4 md:pl-6 border-l-2 border-mist-grey">
                                暑假外出時妹妹曾短暫失蹤，隔日平安尋回。<br/>
                                當日下午，有目擊指出她獨自前往 <span className="bg-black text-white px-2 mx-1 font-mono">████</span> 祈願。<br/>
                                原始紀錄遭塗銷，無法辨識。<br/>
                                深夜因窗外異常聲響出門查看後失去行蹤。
                              </p>
                          </div>

                          <div>
                              <h4 className="text-lantern-red font-bold text-base md:text-lg tracking-widest mb-2 md:mb-3 flex items-center gap-2">
                                <i className="fa-solid fa-caret-right"></i> 疑似相關物件 OBJECTS
                              </h4>
                              <ul className="text-base md:text-lg leading-loose pl-8 md:pl-10 list-disc space-y-2">
                                <li>布偶（右眼反光異常）</li>
                                <li>票根（兒童類型，年份不明）</li>
                                <li>相片碎片（背後留字遭刮除）</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// 6. FAB & Footer (Compact Version)
const FloatingControls: React.FC = () => (
  <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 md:gap-5">
    <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 bg-lantern-red text-white rounded-none flex items-center justify-center shadow-[0_0_25px_rgba(192,53,43,0.6)] hover:scale-110 transition-transform border-2 border-red-900 group relative" title="Add to Wishlist">
       <i className="fa-brands fa-steam text-2xl md:text-3xl"></i>
    </a>
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 md:w-16 md:h-16 bg-valley-teal text-moon-silver rounded-none flex items-center justify-center shadow-lg border border-mist-grey/30 hover:bg-midnight-fog transition-colors" title="Back to Top">
       <i className="fa-solid fa-arrow-up text-lg md:text-xl"></i>
    </button>
  </div>
);

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
    <footer className="bg-[#0b0c0d] py-12 md:py-20 text-center border-t border-lily-shadow relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Compact Logo Row */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mb-8 md:mb-12 opacity-60">
            <h2 className="text-lg md:text-xl font-display font-bold text-moon-silver tracking-[0.2em]">源境創遊</h2>
            <span className="hidden md:block w-[1px] h-4 bg-mist-grey/40"></span>
            <p className="text-mist-grey text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase">Orzien Games</p>
            <span className="hidden md:block w-[1px] h-4 bg-mist-grey/40"></span>
            <p className="text-mist-grey text-[10px] md:text-xs tracking-widest">以「源」為始，稚心投入。</p>
        </div>

        {/* Main Emotional Copy - Emphasized */}
        <p className="text-lily-pale font-serif text-lg md:text-2xl tracking-widest mb-10 md:mb-16 max-w-4xl mx-auto italic leading-[2] drop-shadow-lg px-4">
          「白日凡人，夜裡追夢人。<br/>
          一群朝九晚五的上班族，源於對遊戲的熱愛，<br/>
          從玩家化為開發者，期盼也能作出有共鳴的作品。」
        </p>
  
        {/* Compact Credits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 text-left w-full max-w-5xl mx-auto mb-10 md:mb-16 border-t border-white/5 pt-8 md:pt-12 px-4">
           <div className="space-y-3">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-4 uppercase font-mono">Production & Narrative</div>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">Game Director</span> 安迪</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">Writer</span> Kooche</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">Co-Writer</span> 晉子、西西</p>
           </div>
           <div className="space-y-3">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-4 uppercase font-mono">Design & Art</div>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">Game Design</span> DB、芝芝、安迪</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">Artist</span> 阿鳳、PoG、宇琦</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">Supporter</span> 腦鼠、御井、布丁、星光</p>
           </div>
           <div className="space-y-3">
             <div className="text-[10px] text-lantern-red font-bold tracking-[0.3em] mb-4 uppercase font-mono">Tech & Audio</div>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">UIUX</span> Wunsang</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">Programmer</span> 安迪、DB</p>
             <p className="text-mist-grey/60 text-xs md:text-sm font-sans tracking-wide"><span className="text-moon-silver/80 font-bold mr-2">Music/Sound</span> Vicky</p>
           </div>
        </div>
  
        <div className="flex flex-col items-center gap-6 border-t border-white/5 pt-8 w-full max-w-5xl">
          <div className="flex justify-center gap-8 md:gap-10 mb-2 opacity-50 hover:opacity-100 transition-opacity">
            <a href="#" className="text-mist-grey hover:text-white transition-colors text-lg md:text-xl"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="text-mist-grey hover:text-white transition-colors text-lg md:text-xl"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-mist-grey hover:text-white transition-colors text-lg md:text-xl"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          
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

  return (
    <div className="font-sans text-moon-silver min-h-screen bg-midnight-fog selection:bg-lantern-red selection:text-white">
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      
      {loaded && (
        <main className="animate-fade-in">
          <Header />
          <Hero foundItems={foundItems} onFindItem={id => setFoundItems(p => [...p, id])} />
          <Town foundItems={foundItems} onFindItem={id => setFoundItems(p => [...p, id])} />
          <LatestNews />
          <Gameplay foundItems={foundItems} onFindItem={id => setFoundItems(p => [...p, id])} />
          <MonsterIndex foundItems={foundItems} />
          <Footer />
          <FloatingControls />
        </main>
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
      `}</style>
    </div>
  );
}
