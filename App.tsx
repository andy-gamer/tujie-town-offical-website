
import React, { useState, useEffect } from 'react';
import { HiddenItemData } from './types';

// --- Local Assets Configuration ---
// 請在 public/assets/ 資料夾中準備以下檔案
const ASSETS = {
  // 核心美術圖
  heroBg: './assets/hero-main.jpg',
  townImage: './assets/town-teahouse.jpg',
  character: './assets/character.jpg',
  gameplayExplore: './assets/gameplay-explore.jpg',
  gameplaySight: './assets/gameplay-sight.jpg',
  gameplaySurvival: './assets/gameplay-survival.jpg',
  monsterSketch: './assets/monster-sketch.png',
  
  // 材質與特效 (請準備無縫紋理圖)
  texturePaper: './assets/texture-paper.png',
  textureWood: './assets/texture-wood.png',
  textureCork: './assets/texture-cork.png',
  fog1: './assets/fog1.png',
  fog2: './assets/fog2.png',
};

const ITEMS: HiddenItemData[] = [
  { id: 'item1', name: '小皮球', hint: '藏在廟宇柱子旁的童年回憶...', icon: 'fa-basketball', top: '75%', left: '20%', section: 'hero' },
  { id: 'item2', name: '泛黃車票', hint: '遺落在茶行桌上的單程票...', icon: 'fa-ticket', top: '55%', left: '65%', section: 'town' },
  { id: 'item3', name: '蝸牛殼', hint: '纏繞在異界藤蔓中的忌諱...', icon: 'fa-dharmachakra', top: '30%', left: '50%', section: 'gameplay' }
];

// --- Components ---

// 0. Cinematic Preloader
const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { time: 1000, action: () => setStep(1) },
      { time: 2500, action: () => setStep(2) },
      { time: 4500, action: () => setStep(3) },
      { time: 5000, action: onComplete },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];
    sequence.forEach(({ time, action }) => {
      timeouts.push(setTimeout(action, time));
    });

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  if (step === 3) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center cursor-none">
      <div className={`transition-opacity duration-1000 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-alert-red font-display text-5xl md:text-7xl font-black tracking-[0.5em] animate-pulse drop-shadow-[0_0_10px_rgba(194,28,28,0.8)]">
          土界鎮
        </h1>
      </div>
      <div className={`absolute bottom-20 transition-opacity duration-1000 ${step === 2 ? 'opacity-100' : 'opacity-0'}`}>
         <p className="text-paper-yellow font-serif text-sm tracking-widest border-l-2 border-alert-red pl-4 italic">
           「媽媽說，月亮不正常的夜晚是不能出門的……」
         </p>
      </div>
      {/* Noise Overlay handled by CSS in index.html, purely code-generated */}
    </div>
  );
};

// 1. Header
const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent pb-10 pointer-events-none">
      <div className="container mx-auto px-6 py-4 flex justify-between items-start pointer-events-auto">
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <h1 className="text-2xl font-display font-bold text-white tracking-[0.2em] drop-shadow-md">
            土界鎮 <span className="text-xs text-alert-red align-top ml-1">DEMO</span>
          </h1>
          <span className="text-[10px] font-mono text-gray-400 tracking-widest">TUJIE TOWN</span>
        </div>
        
        <div className="flex space-x-6">
          <button onClick={() => scrollToSection('town')} className="hidden md:block text-xs font-bold text-gray-400 hover:text-alert-red transition-colors uppercase tracking-widest relative group">
            Story
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-alert-red transition-all group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('gameplay')} className="hidden md:block text-xs font-bold text-gray-400 hover:text-alert-red transition-colors uppercase tracking-widest relative group">
            Gameplay
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-alert-red transition-all group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('collection')} className="hidden md:block text-xs font-bold text-gray-400 hover:text-alert-red transition-colors uppercase tracking-widest relative group">
            Monster Index
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-alert-red transition-all group-hover:w-full"></span>
          </button>

          <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer" className="bg-alert-red/90 hover:bg-alert-red text-white px-3 py-1 text-xs font-bold border border-red-900 shadow-[0_0_10px_rgba(194,28,28,0.3)] transition-all">
            <i className="fa-brands fa-steam mr-2"></i>
            WISHLIST
          </a>
        </div>
      </div>
    </nav>
  );
};

// Trailer Modal
const TrailerModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
    <div className="relative w-full max-w-5xl aspect-video bg-black border border-gray-800 shadow-[0_0_50px_rgba(194,28,28,0.2)]">
      <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-alert-red transition-colors text-sm tracking-widest">
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
      <section id="hero" className="relative w-full h-screen overflow-hidden bg-deep-black select-none">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
           <img src={ASSETS.heroBg} className="w-full h-full object-cover opacity-80 animate-ken-burns" alt="Concept Art" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
           
           {/* Fog Layers using Local Assets */}
           <div className="absolute inset-0 bg-repeat-x animate-fog opacity-40" style={{ backgroundImage: `url(${ASSETS.fog1})` }}></div>
           <div className="absolute inset-0 bg-repeat-x animate-fog-slow opacity-20" style={{ backgroundImage: `url(${ASSETS.fog2})` }}></div>
           
           <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-24 left-6 md:left-20 max-w-4xl pointer-events-auto z-10">
           <div className="p-6">
              <div className="mb-8">
                <span className="block text-alert-red font-display font-black tracking-[0.2em] text-5xl md:text-8xl leading-none drop-shadow-[0_0_15px_rgba(194,28,28,0.8)] glitch" data-text="2026">
                  2026
                </span>
                <span className="block text-white font-mono font-bold tracking-[0.8em] text-xl md:text-3xl mt-2 ml-1 opacity-90">
                  COMING SOON
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4 drop-shadow-lg tracking-widest leading-tight">
                單程列車
              </h2>
              <p className="text-gray-300 font-serif leading-relaxed text-lg md:text-xl shadow-black drop-shadow-md mb-8 max-w-xl">
                為了尋找父親，你回到了這座被蔗糖與秘密包裹的小鎮。<br/>
                在這裡，每一次呼吸都是甜的，每一個影子……<span className="text-alert-red font-bold">都是活的。</span>
              </p>
              <button onClick={() => setShowTrailer(true)} className="group flex items-center gap-4 text-sm tracking-widest text-white hover:text-alert-red transition-colors">
                <span className="w-14 h-14 border border-white/30 rounded-full flex items-center justify-center group-hover:border-alert-red group-hover:bg-alert-red/10 transition-all scale-100 group-hover:scale-110">
                  <i className="fa-solid fa-play ml-1 text-xl"></i>
                </span>
                <span className="border-b border-transparent group-hover:border-alert-red pb-1">觀看前導預告 WATCH TRAILER</span>
              </button>
           </div>
        </div>

        {/* Hidden Item */}
        {!isFound && heroItem && (
          <button
            onClick={(e) => { e.stopPropagation(); onFindItem(heroItem.id); }}
            className="absolute w-16 h-16 flex items-center justify-center text-paper-yellow/80 hover:text-alert-red transition-all cursor-pointer animate-float z-50 group"
            style={{ top: heroItem.top, left: heroItem.left }}
          >
            <i className={`fa-solid ${heroItem.icon} text-3xl drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] opacity-70 group-hover:opacity-100`}></i>
          </button>
        )}
      </section>
      {showTrailer && <TrailerModal onClose={() => setShowTrailer(false)} />}
    </>
  );
};

// 3. Town Section
const Town: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const [activeRule, setActiveRule] = useState<number | null>(null);
  const townItem = ITEMS.find(i => i.section === 'town');
  const isFound = townItem && foundItems.includes(townItem.id);

  return (
    <section id="town" className="relative py-32 bg-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${ASSETS.textureWood})` }}></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="relative w-full max-w-7xl flex flex-col md:flex-row gap-0 shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute -top-6 left-0 w-48 h-10 bg-[#cfbf9e] rounded-t-lg z-0 border-t border-l border-r border-[#c4b69c] flex items-center justify-center">
             <span className="text-[#5a4a42] font-mono text-xs tracking-widest font-bold">TOP SECRET</span>
          </div>

          <div className="w-full md:w-5/12 bg-[#d6cbb1] border border-[#c4b69c] p-10 relative flex flex-col items-center justify-center rounded-tl-none rounded-bl-lg md:rounded-bl-lg md:rounded-tr-none" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
             <div className="relative z-10 w-full max-w-md transform rotate-1 transition-transform hover:rotate-0 duration-500">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#b0a080] opacity-80 rotate-1 shadow-sm z-20"></div>
                <div className="bg-white p-3 pb-12 shadow-md mb-8">
                  <img src={ASSETS.townImage} className="w-full h-64 object-cover grayscale contrast-125 border border-gray-200" alt="Teahouse" />
                  <div className="absolute bottom-3 right-4 text-gray-400 font-mono text-xs">FIG. 1: THE TEA HOUSE</div>
                </div>
                <div className="absolute -bottom-10 -right-6 w-48 bg-transparent transform -rotate-6 filter drop-shadow-xl">
                    <img src={ASSETS.character} className="w-full h-auto object-contain" alt="Character Sketch" />
                </div>
             </div>
          </div>

          <div className="w-full md:w-7/12 bg-[#f4f1ea] p-8 md:p-16 relative border-t md:border-t-0 border-r border-b border-[#c4b69c] rounded-br-lg rounded-tr-lg shadow-inner" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/50 rotate-1 backdrop-blur-[1px] shadow-sm transform -translate-y-4"></div>
             <div className="h-full p-4 md:p-8 relative border border-gray-300 bg-white shadow-sm">
                <div className="absolute top-10 right-10 w-24 h-24 border-4 border-alert-red/30 rounded-full flex items-center justify-center transform -rotate-12 pointer-events-none z-0">
                   <div className="text-alert-red/30 font-display font-black text-lg uppercase tracking-widest text-center leading-none">
                      TOWN<br/>OFFICIAL
                   </div>
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-6">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-black tracking-[0.2em]">鎮民生活公約</h3>
                    <span className="font-mono text-xs text-red-700 font-bold">NO. 1970-A4</span>
                  </div>
                  <p className="font-serif text-black leading-loose mb-10 text-justify text-lg font-medium">
                    歡迎來到土界鎮。這裡擁有全台灣最甜的甘蔗與最勤奮的鎮民。只要你遵守規矩，我們都熱情好客。
                  </p>
                  <ol className="space-y-6 font-serif text-black text-lg list-decimal list-inside pl-2">
                    {[
                      "看到蝸牛請繞道而行，切勿傷害。",
                      "太陽下山後，請勿在戶外逗留。",
                      "若看見不存在的車站，請立即閉上眼睛。",
                      "絕對不要把「九姑娘花」帶出鎮外。"
                    ].map((rule, idx) => (
                      <li key={idx} onMouseEnter={() => setActiveRule(idx)} onMouseLeave={() => setActiveRule(null)} className={`relative p-2 transition-all ${idx === 3 ? 'cursor-help border border-transparent' : ''}`}>
                        {idx === 3 ? (
                            <span className="relative inline-block w-full group">
                              <span className={`relative z-10 transition-opacity duration-100 ${activeRule === 3 ? 'opacity-0' : 'opacity-100'}`}>{rule}</span>
                              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-red-500 transition-all duration-300 ${activeRule === 3 ? 'h-full bg-red-100/50' : 'animate-shake'}`}></span>
                              {activeRule === 3 && (
                                <span className="absolute top-2 left-2 w-full text-alert-red font-black font-display tracking-widest glitch-active z-20 text-xl" data-text="SHE IS WATCHING YOU">
                                  SHE IS WATCHING YOU
                                </span>
                              )}
                            </span>
                        ) : (
                            <span>{rule}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
                {!isFound && townItem && (
                  <button onClick={() => onFindItem(townItem.id)} className="absolute bottom-4 right-4 transform rotate-6 hover:rotate-0 hover:scale-110 transition-all z-30 group" title="撿起車票">
                    <div className="bg-[#e8dfcc] border-2 border-[#8c7b6c] border-dashed p-2 md:p-3 px-4 shadow-xl flex items-center gap-3 text-sm font-bold text-[#2c201b] group-hover:bg-white transition-colors">
                       <i className={`fa-solid ${townItem.icon} text-alert-red`}></i> 
                       <span>單程車票</span>
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

// 4. Gameplay Section
const Gameplay: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const item = ITEMS.find(i => i.section === 'gameplay');
  const isFound = item && foundItems.includes(item.id);

  const cards = [
    { title: '懷舊探索', sub: 'EXPLORATION', desc: '穿梭於 1970 年代的台灣街景、廢棄糖廠與老式車站。', icon: 'fa-map', img: ASSETS.gameplayExplore },
    { title: '看取能力', sub: 'THE SIGHT', desc: '觸摸舊物讀取殘留的記憶碎片，還原被掩蓋的真相。', icon: 'fa-eye', img: ASSETS.gameplaySight },
    { title: '異界生存', sub: 'SURVIVAL', desc: '當月亮變色，面對擬態成人類的「花倀」，利用弱點求生。', icon: 'fa-person-running', img: ASSETS.gameplaySurvival },
  ];

  return (
    <section id="gameplay" className="py-32 bg-[#111] text-white relative">
       <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-paper-yellow tracking-[0.3em]">核心玩法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {cards.map((card, idx) => (
                <div key={idx} className="group relative h-[450px] bg-gray-900 border border-gray-800 overflow-hidden hover:border-alert-red transition-colors duration-500 flex flex-col">
                   <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-500">
                      <img src={card.img} className="w-full h-full object-cover grayscale" alt={card.title} />
                   </div>
                   <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <i className={`fa-solid ${card.icon} text-4xl text-dust-green mb-6 group-hover:text-alert-red transition-colors`}></i>
                      <h3 className="text-2xl font-bold tracking-widest mb-2 font-display">{card.title}</h3>
                      <span className="text-xs font-mono text-gray-500 tracking-[0.2em] group-hover:text-alert-red mb-4 block">{card.sub}</span>
                      <p className="text-gray-400 text-sm font-serif leading-relaxed border-t border-gray-800 pt-4 group-hover:border-alert-red/50 transition-colors">{card.desc}</p>
                   </div>
                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-alert-red/30 transition-all duration-500 pointer-events-none"></div>
                </div>
             ))}
          </div>
          {!isFound && item && (
             <div className="absolute left-10 bottom-20 animate-pulse z-20">
                <button onClick={() => onFindItem(item.id)} className="text-dust-green hover:text-white transition-colors p-4" title="發現蝸牛殼">
                   <i className={`fa-solid ${item.icon} text-3xl rotate-45`}></i>
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
  
  return (
    <section id="collection" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-gray-900 flex justify-center">
      <div className="w-full max-w-[95%] relative z-10">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-display font-bold tracking-[0.3em] text-paper-yellow mb-4">怪物圖鑑</h2>
           <p className="text-gray-500 font-serif text-base max-w-lg mx-auto leading-relaxed mb-6">
             蒐集散落在土界鎮的記憶碎片，揭開那些被遺忘的異界生物真面目...
           </p>
           <div className="inline-block bg-alert-red/10 border border-alert-red/50 px-8 py-3 rounded text-alert-red text-sm font-bold animate-pulse tracking-wide">
             <i className="fa-solid fa-magnifying-glass mr-2"></i>
             任務提示：請點擊網頁中的隱藏物品（首頁、公約、核心玩法）以解鎖圖鑑！
           </div>
        </div>

        <div className="relative bg-[#2a1d15] p-2 md:p-6 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.9)] border-8 border-[#3e2b20] ring-1 ring-[#1a110d] mx-auto w-full">
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#b08d55] to-[#8a6d3b] px-4 md:px-8 py-2 border-2 border-[#5c4726] shadow-md rounded-sm z-40 whitespace-nowrap">
              <span className="text-[#3d2e16] font-display font-black tracking-widest text-sm md:text-lg drop-shadow-sm">TYPE: FLORAL ENTITY</span>
           </div>
           <div className="absolute inset-0 z-30 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-sm border border-white/5"></div>
           
           <div className="bg-[#1a110d] p-1 shadow-inner rounded-sm h-auto md:h-[700px]">
             <div className="flex flex-col md:grid md:grid-cols-4 gap-2 bg-[#2a1d15] h-full">
                {/* Collection Slots */}
                <div className="col-span-1 bg-[#1a110d]/50 p-4 md:p-6 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto custom-scrollbar border-b md:border-b-0 md:border-r border-[#3e2b20] min-h-[120px] md:min-h-0">
                   <div className="text-[#8c7b6c] text-xs md:text-sm font-mono tracking-widest text-center mb-0 md:mb-2 border-r md:border-r-0 md:border-b border-[#3e2b20] pr-4 md:pr-0 pb-0 md:pb-4 flex items-center justify-center shrink-0">PARTS</div>
                   {ITEMS.map((item, i) => {
                     const collected = foundItems.includes(item.id);
                     return (
                       <div key={i} className="relative h-20 w-20 md:h-32 md:w-full shrink-0 bg-[#140e0b] shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] border border-[#3e2b20]/50 flex items-center justify-center group transition-colors hover:bg-[#1a110d]">
                          {collected ? (
                            <div className="relative animate-float scale-90 md:scale-110">
                               <div className="absolute -top-2 md:-top-4 left-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-800 rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.8)] z-10"></div>
                               <div className="text-[#cbbba0] flex flex-col items-center">
                                  <i className={`fa-solid ${item.icon} text-2xl md:text-4xl drop-shadow-xl mb-1 md:mb-2 text-[#d6cbb1]`}></i>
                                  <span className="text-[10px] md:text-xs font-serif mt-1 text-[#8c7b6c] tracking-wider whitespace-nowrap">{item.name}</span>
                               </div>
                            </div>
                          ) : (
                            <div className="text-[#2a1d15] text-3xl md:text-5xl opacity-30 font-serif select-none">?</div>
                          )}
                       </div>
                     );
                   })}
                </div>

                {/* Main Specimen */}
                <div className="col-span-1 md:col-span-3 bg-[#e3d5b8] relative shadow-inner flex flex-col md:flex-row p-6 md:p-12 overflow-hidden min-h-[500px]" style={{ backgroundImage: `url(${ASSETS.textureCork})` }}>
                   {!allFound && (
                      <div className="absolute inset-0 bg-black/70 z-20 flex flex-col items-center justify-center text-center backdrop-blur-md">
                         <i className="fa-solid fa-lock text-4xl md:text-6xl text-[#3e2b20] mb-6 drop-shadow-[0_0_15px_rgba(194,28,28,0.5)]"></i>
                         <div className="bg-[#1a110d] border border-alert-red/50 px-4 md:px-8 py-2 md:py-4 text-alert-red font-mono text-sm md:text-lg tracking-widest shadow-2xl">ACCESS DENIED</div>
                         <p className="mt-4 text-gray-400 font-serif italic text-sm">Collect all 3 items to unlock</p>
                      </div>
                   )}

                   <div className={`transition-all duration-1000 w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 ${allFound ? 'opacity-100 blur-0' : 'opacity-20 blur-sm'}`}>
                      <div className="relative flex-1 h-64 md:h-full bg-white p-2 md:p-4 shadow-xl transform rotate-1 border border-gray-200">
                         <div className="absolute -top-3 left-1/2 w-4 h-4 bg-gray-500 rounded-full shadow-md z-10"></div>
                         <img src={ASSETS.monsterSketch} className="w-full h-full object-contain mix-blend-multiply" alt="Monster" />
                         <div className="absolute bottom-4 left-4 bg-yellow-100 p-2 shadow transform -rotate-2 font-handwriting text-[#2c201b] text-xs md:text-sm font-bold border border-yellow-200">
                            Fig 4.1: Subject "Zhang"
                         </div>
                      </div>

                      <div className="relative w-full md:w-1/3 flex flex-col gap-6">
                         <div className="bg-[#f9f5eb] p-6 md:p-8 shadow-lg transform -rotate-1 border border-[#e0d0b0] relative mt-8 md:mt-0">
                            <div className="absolute -top-2 left-1/2 w-3 h-3 bg-alert-red rounded-full shadow-sm z-10"></div>
                            <h3 className="text-4xl font-display font-black text-[#2c201b] mb-2 vertical-text h-32 absolute -left-2 top-0 opacity-20 pointer-events-none md:-left-12">花倀</h3>
                            <div className="border-b-2 border-alert-red pb-2 mb-4">
                               <span className="text-xs font-mono text-gray-500 block mb-1">DESIGNATION</span>
                               <h3 className="text-2xl md:text-3xl font-display font-bold text-[#2c201b]">張家豪</h3>
                            </div>
                            <p className="text-sm italic text-[#5a4a42] font-serif leading-relaxed">「它……好像是我失蹤的鄰居阿明。」</p>
                         </div>
                         <div className="bg-[#f0eadd] p-4 md:p-6 shadow-md transform rotate-1 border border-[#d6cbb1] flex-1 relative">
                            <div className="absolute -top-2 right-1/2 w-3 h-3 bg-[#3e2b20] rounded-full shadow-sm z-10"></div>
                            <div className="space-y-4 md:space-y-6">
                               <div>
                                  <span className="bg-[#2c201b] text-white text-xs px-2 py-1 mb-2 inline-block tracking-widest">特徵 TRAITS</span>
                                  <p className="font-serif text-[#3e2b20] leading-snug text-sm">由人類轉化而來，皮膚表面已木質化。具備高度擬態能力。</p>
                               </div>
                               <div>
                                  <span className="bg-[#8b0000] text-white text-xs px-2 py-1 mb-2 inline-block tracking-widest">弱點 WEAKNESS</span>
                                  <p className="font-serif text-[#3e2b20] leading-snug text-sm">懼怕火源與蝸牛分泌的黏液氣味。</p>
                               </div>
                            </div>
                         </div>
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

// 6. FAB & Footer
const FloatingControls: React.FC = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
    <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-alert-red text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(194,28,28,0.5)] hover:scale-110 transition-transform border-2 border-red-900 group relative" title="Add to Wishlist">
       <i className="fa-brands fa-steam text-2xl"></i>
       <span className="absolute right-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Wishlist Now</span>
    </a>
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 md:w-14 md:h-14 bg-black/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-lg border border-gray-700 hover:bg-gray-800 transition-colors group relative" title="Back to Top">
       <i className="fa-solid fa-arrow-up text-xl"></i>
    </button>
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-black py-16 text-center border-t border-red-900/30 relative">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
       <div className="absolute -bottom-20 -left-20 text-9xl text-alert-red opacity-20"><i className="fa-brands fa-pagelines"></i></div>
       <div className="absolute -top-20 -right-20 text-9xl text-alert-red opacity-20 transform rotate-180"><i className="fa-brands fa-pagelines"></i></div>
    </div>
    <h2 className="text-3xl font-display font-bold text-white mb-2">源境創遊</h2>
    <p className="text-gray-500 text-xs font-mono mb-6">ORZIEN GAMES</p>
    <p className="text-gray-400 font-serif text-sm tracking-widest mb-8 max-w-md mx-auto italic">「以源為始，稚心投入。白日凡人，夜裡追夢人。」</p>
    <div className="flex justify-center gap-8 mb-10">
       <a href="#" className="text-gray-500 hover:text-[#1877F2] transition-colors transform hover:scale-110"><i className="fa-brands fa-facebook text-2xl"></i></a>
       <a href="#" className="text-gray-500 hover:text-[#E4405F] transition-colors transform hover:scale-110"><i className="fa-brands fa-instagram text-2xl"></i></a>
       <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"><i className="fa-brands fa-x-twitter text-2xl"></i></a>
    </div>
    <p className="text-gray-700 text-[10px] tracking-wider">© 2026 TUJIE TOWN. ALL RIGHTS RESERVED.</p>
  </footer>
);

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
    <div className="font-sans text-gray-200 min-h-screen bg-black selection:bg-alert-red selection:text-white">
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      
      {loaded && (
        <main className="animate-fade-in">
          <Header />
          <Hero foundItems={foundItems} onFindItem={id => setFoundItems(p => [...p, id])} />
          <Town foundItems={foundItems} onFindItem={id => setFoundItems(p => [...p, id])} />
          <Gameplay foundItems={foundItems} onFindItem={id => setFoundItems(p => [...p, id])} />
          <MonsterIndex foundItems={foundItems} />
          <Footer />
          <FloatingControls />
        </main>
      )}

      <style>{`
        @keyframes fog { 0% { background-position: 0 0; } 100% { background-position: 1000px 0; } }
        .animate-fog { animation: fog 60s linear infinite; }
        .animate-fog-slow { animation: fog 120s linear infinite reverse; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 2s ease-out forwards; }
        @keyframes kenBurns { 0% { transform: scale(1) translate(0,0); } 50% { transform: scale(1.1) translate(-1%, -1%); } 100% { transform: scale(1) translate(0,0); } }
        .animate-ken-burns { animation: kenBurns 30s ease-in-out infinite alternate; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @keyframes shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-1deg); } 20% { transform: translate(-3px, 0px) rotate(1deg); } 30% { transform: translate(3px, 2px) rotate(0deg); } 40% { transform: translate(1px, -1px) rotate(1deg); } 50% { transform: translate(-1px, 2px) rotate(-1deg); } 60% { transform: translate(-3px, 1px) rotate(0deg); } 70% { transform: translate(3px, 1px) rotate(-1deg); } 80% { transform: translate(-1px, -1px) rotate(1deg); } 90% { transform: translate(1px, 2px) rotate(0deg); } 100% { transform: translate(1px, -2px) rotate(-1deg); } }
        .animate-shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite; }
      `}</style>
    </div>
  );
}
