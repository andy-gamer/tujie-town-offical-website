
import React from 'react';
import { ASSETS, ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const MonsterIndex: React.FC<{ foundItems: string[] }> = ({ foundItems }) => {
  const allFound = foundItems.length === ITEMS.length;
  const progress = Math.round((foundItems.length / ITEMS.length) * 100);
  const { t } = useLanguage();
  const steamUrl = "https://store.steampowered.com/app/4209230/?utm_source=officialsite&utm_campaign=tujietown";
  
  return (
    <section id="collection" className="py-24 md:py-40 bg-[#151719] relative overflow-hidden border-t border-lily-shadow flex justify-center">
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${ASSETS.textureWood})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="w-full max-w-[95%] md:max-w-[90%] relative z-10">
        <div className="text-center mb-12 md:mb-20">
           <h2 className="text-2xl md:text-5xl font-display font-bold tracking-[0.2em] text-lily-pale mb-6 md:mb-8 drop-shadow-lg">{t.monster.title}</h2>
           <p className="text-white/60 font-serif text-base md:text-xl max-w-3xl mx-auto leading-loose mb-8 md:mb-10 opacity-70 px-4">
             {t.monster.subtitle}
           </p>
        </div>

        {/* File Folder Container */}
        {/* Dynamic min-height based on state */}
        <div className={`relative bg-[#5c554b] p-1 md:p-2 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.9)] mx-auto w-full max-w-[1200px] transform md:rotate-[0.5deg] transition-all duration-700`}>
           {/* Tab */}
           <div className="absolute -top-8 md:-top-10 left-4 md:left-10 bg-[#5c554b] px-8 md:px-12 py-2 md:py-3 rounded-t-md border-t border-l border-r border-[#4a443b] shadow-sm z-0">
              <span className="text-red-900/60 font-mono font-bold tracking-widest text-sm md:text-lg">{t.monster.caseId}</span>
           </div>
           
           <div 
             className={`bg-[#c2b59b] p-6 md:p-12 relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] border border-[#4a443b] transition-all duration-700 ease-in-out ${allFound ? 'min-h-[auto] md:min-h-[700px]' : 'h-auto py-20 md:py-24'}`} 
             style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}
           >
              <div className="absolute inset-0 bg-orange-900/5 mix-blend-multiply pointer-events-none"></div>

              {!allFound && (
                 <div className="relative z-40 flex flex-col items-center justify-center text-center w-full">
                    
                    {/* Security Tape / Seal Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 border-t-4 border-b-4 border-[#7A2321]/20 bg-[#7A2321]/5 -rotate-6 pointer-events-none flex items-center justify-center overflow-hidden">
                        <div className="text-[#7A2321]/10 font-black text-6xl md:text-8xl tracking-[0.5em] whitespace-nowrap animate-pulse">
                           CONFIDENTIAL
                        </div>
                    </div>

                    {/* Paper Note Card */}
                    <div className="relative w-full max-w-lg bg-[#e3dac9] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-[#b0a48f] transform rotate-1">
                         {/* Paper Texture Overlay */}
                         <div className="absolute inset-0 opacity-40 pointer-events-none bg-repeat" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}></div>
                         
                         {/* Tape at top */}
                         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#dcd3c1]/80 shadow-sm border border-white/40 transform -rotate-2"></div>

                         <div className="relative z-10 flex flex-col items-center">
                            {/* Icon */}
                            <div className="mb-4 md:mb-6 text-[#7A2321]">
                               <i className="fa-solid fa-file-circle-xmark text-5xl md:text-6xl drop-shadow-sm opacity-90"></i>
                            </div>

                            <h3 className="text-2xl md:text-4xl font-display font-black text-[#4a443b] tracking-[0.2em] uppercase mb-2 border-b-2 border-[#4a443b] pb-2">
                                {t.monster.lockedOverlay.topSecret}
                            </h3>
                            
                            <p className="text-[#5c554b] font-serif font-bold text-sm md:text-base mb-8 tracking-widest mt-4">
                               {t.monster.lockedOverlay.desc}
                            </p>

                            {/* Item Status Grid */}
                            <div className="flex justify-center gap-4 md:gap-6 mb-8 w-full bg-[#4a443b]/5 p-4 border border-[#4a443b]/10">
                              {ITEMS.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2">
                                   <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all ${foundItems.includes(item.id) ? 'bg-[#4a443b] text-[#e3dac9] border-[#4a443b]' : 'bg-transparent text-[#4a443b]/20 border-[#4a443b]/20 dashed-border'}`}>
                                      <i className={`fa-solid ${item.icon} text-sm md:text-lg`}></i>
                                   </div>
                                </div>
                              ))}
                            </div>

                            {/* Progress Bar styled as a form field */}
                            <div className="w-full">
                               <div className="flex justify-between text-[#4a443b] font-mono text-xs font-bold mb-1 tracking-widest uppercase">
                                 <span>{t.monster.lockedOverlay.status}</span>
                                 <span>{progress}%</span>
                               </div>
                               <div className="w-full h-3 bg-[#4a443b]/10 border border-[#4a443b]/30 p-0.5">
                                 {/* Striped progress bar */}
                                 <div 
                                   className="h-full bg-[#7A2321] relative overflow-hidden"
                                   style={{ width: `${progress}%` }}
                                 >
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:10px_10px]"></div>
                                 </div>
                               </div>
                            </div>
                         </div>
                    </div>
                 </div>
              )}

              {allFound && (
                <div className={`transition-all duration-1000 w-full h-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10 animate-fade-in`}>
                    
                    {/* Left Column: Photo & Evidence Slots */}
                    <div className="md:col-span-4 flex flex-col gap-6 md:gap-8">
                        {/* Photo */}
                        <div className="bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-md transform -rotate-1 md:-rotate-2 border border-gray-300 relative">
                            <img src={ASSETS.monsterSketch} className="w-full h-64 md:h-80 object-contain mix-blend-multiply grayscale contrast-125" alt="Subject" />
                            <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 border-4 border-lantern-red rounded-full opacity-30"></div>
                        </div>

                        {/* Residual Items List */}
                        <div className="bg-[#b0a48f]/50 p-4 md:p-6 border border-[#9c917e]">
                            <h4 className="text-[#4a443b] font-mono font-bold tracking-widest mb-4 border-b border-[#9c917e] pb-2 text-sm md:text-base">
                              {t.monster.file.items.title}
                            </h4>
                            <ul className="text-[#2b2520] text-sm md:text-base space-y-3 list-disc pl-5 font-serif">
                              {t.monster.file.items.list.map((item, idx) => (
                                <li key={idx} className={foundItems.length <= idx ? 'opacity-50 blur-[2px]' : ''}>{item}</li>
                              ))}
                            </ul>
                            <p className="mt-4 text-[#7A2321] text-xs font-bold opacity-80">{t.monster.file.items.note}</p>
                        </div>
                    </div>

                    {/* Right Column: Detailed Report */}
                    <div className="md:col-span-8 font-serif text-[#2b2520] relative flex flex-col h-full gap-6 md:gap-8">
                        
                        {/* Confidential Stamp */}
                        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 border-4 border-lantern-red rounded-full flex items-center justify-center opacity-20 transform rotate-12 pointer-events-none mix-blend-multiply">
                            <span className="text-lantern-red font-black text-sm md:text-xl uppercase transform -rotate-12">CONFIDENTIAL</span>
                        </div>

                        {/* Basic Info */}
                        <div>
                            <h4 className="text-[#4a443b] font-bold text-lg md:text-xl border-b-2 border-[#4a443b] pb-2 mb-3 inline-block">
                              {t.monster.file.basic.title}
                            </h4>
                            <p className="text-base md:text-lg leading-relaxed">
                              {t.monster.file.basic.content}
                            </p>
                        </div>

                        {/* Event Summary */}
                        <div className="bg-[#a39985]/20 p-4 border-l-4 border-[#4a443b]">
                            <h4 className="text-[#4a443b] font-bold text-lg mb-2">
                              {t.monster.file.event.title}
                            </h4>
                            <p className="text-base md:text-lg leading-loose text-justify">
                              {t.monster.file.event.content}
                            </p>
                        </div>

                        {/* Observation Log */}
                        <div>
                            <h4 className="text-lantern-red font-bold text-lg md:text-xl border-b-2 border-lantern-red/50 pb-2 mb-4 inline-block">
                              {t.monster.file.observation.title}
                            </h4>
                            
                            <div className="space-y-4">
                                <p className="font-bold text-[#4a443b]">{t.monster.file.observation.section1_title}</p>
                                <p className="pl-4 border-l border-[#4a443b]/30">{t.monster.file.observation.section1_content}</p>
                                
                                <div className="pl-6 space-y-2 italic text-[#4a443b]/80">
                                  {t.monster.file.observation.quotes.map((q, i) => (
                                    <p key={i}>{q}</p>
                                  ))}
                                </div>

                                <p className="font-bold text-[#4a443b] mt-6">{t.monster.file.observation.section2_title}</p>
                                <p className="pl-4 border-l border-[#4a443b]/30">{t.monster.file.observation.section2_content}</p>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 text-right text-lantern-red font-bold font-mono tracking-widest">
                          {t.monster.file.status}
                        </div>
                    </div>
                </div>
              )}

              {/* Wishlist CTA - Only show when unlocked or at bottom to keep locked state compact */}
              {allFound && (
                <div className="mt-12 pt-8 border-t-2 border-[#4a443b] border-dashed flex flex-col md:flex-row items-center justify-between gap-6 opacity-90 relative z-20">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <span className="font-mono font-bold text-[#4a443b] tracking-widest text-xs md:text-sm uppercase flex items-center justify-center md:justify-start">
                            <i className="fa-solid fa-triangle-exclamation mr-2"></i> {t.monster.actionRequired}
                        </span>
                        <p className="font-serif text-[#2b2520] font-bold text-lg md:text-xl">
                            {t.monster.actionDesc}
                        </p>
                    </div>
                    <a href={steamUrl} target="_blank" rel="noreferrer" className="bg-[#1a1714] text-[#c2b59b] hover:bg-lantern-red hover:text-white px-6 py-3 font-bold tracking-widest transition-all shadow-lg flex items-center gap-3 group w-full md:w-auto justify-center">
                        <i className="fa-brands fa-steam text-xl group-hover:rotate-12 transition-transform"></i>
                        <span>{t.monster.addToWishlist}</span>
                    </a>
                </div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
};

export default MonsterIndex;
