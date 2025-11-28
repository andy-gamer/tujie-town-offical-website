
import React from 'react';
import { ASSETS, ITEMS } from '../constants';

const MonsterIndex: React.FC<{ foundItems: string[] }> = ({ foundItems }) => {
  const allFound = foundItems.length === ITEMS.length;
  const progress = Math.round((foundItems.length / ITEMS.length) * 100);
  
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
        </div>

        {/* File Folder Container - Darker, Older Paper Look */}
        <div className="relative bg-[#5c554b] p-1 md:p-2 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.9)] mx-auto w-full max-w-[1200px] transform md:rotate-[0.5deg]">
           {/* Tab */}
           <div className="absolute -top-8 md:-top-10 left-4 md:left-10 bg-[#5c554b] px-8 md:px-12 py-2 md:py-3 rounded-t-md border-t border-l border-r border-[#4a443b] shadow-sm z-0">
              <span className="text-red-900/60 font-mono font-bold tracking-widest text-sm md:text-lg">CASE #001970</span>
           </div>
           
           <div className="bg-[#c2b59b] p-6 md:p-12 relative overflow-hidden min-h-[auto] md:min-h-[700px] shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] border border-[#4a443b]" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
              <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply pointer-events-none"></div>

              {!allFound && (
                 // Updated Locked State: Dark High Contrast "Classified" Theme
                 <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center backdrop-blur-sm bg-[#151719]/95 p-6 md:p-8 transition-all duration-500">
                    <div className="max-w-3xl border-2 border-lantern-red/20 p-8 md:p-12 bg-[#0b0c0d] shadow-[0_0_60px_rgba(0,0,0,0.9)] relative w-full rounded-sm overflow-hidden group">
                       
                       {/* Background Stripes */}
                       <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[length:20px_20px]"></div>

                       {/* Decorative Lines */}
                       <div className="absolute top-0 left-0 w-full h-1 bg-lantern-red/50 shadow-[0_0_10px_rgba(192,53,43,0.5)]"></div>
                       <div className="absolute bottom-0 left-0 w-full h-1 bg-lantern-red/50 shadow-[0_0_10px_rgba(192,53,43,0.5)]"></div>

                       <h3 className="text-2xl md:text-4xl font-display font-black text-lantern-red tracking-[0.3em] mb-8 uppercase drop-shadow-[0_0_15px_rgba(192,53,43,0.4)] animate-pulse flex items-center justify-center gap-4">
                         <i className="fa-solid fa-lock text-2xl md:text-3xl"></i>
                         檔案加密中
                       </h3>
                       
                       <p className="text-moon-silver font-mono text-sm md:text-lg mb-8 tracking-widest opacity-80 border-b border-white/10 pb-6">
                         ACCESS DENIED. RECOVER MEMORY FRAGMENTS TO DECRYPT.
                       </p>
                       
                       <div className="flex justify-center gap-8 md:gap-16 mb-10">
                          {ITEMS.map((item, idx) => (
                            <div key={idx} className={`flex flex-col items-center gap-3 transition-all duration-500 relative group/item`}>
                               <div className={`w-16 h-16 md:w-20 md:h-20 rounded-sm flex items-center justify-center border-2 transition-transform hover:scale-105 ${foundItems.includes(item.id) ? 'bg-valley-teal/50 border-mist-grey text-mist-grey' : 'bg-lantern-red/10 text-lantern-red border-lantern-red shadow-[0_0_20px_rgba(192,53,43,0.2)]'}`}>
                                  <i className={`fa-solid ${item.icon} text-2xl md:text-3xl`}></i>
                               </div>
                               <span className={`text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest ${foundItems.includes(item.id) ? 'text-mist-grey' : 'text-lantern-red animate-pulse'}`}>
                                 {foundItems.includes(item.id) ? 'DECRYPTED' : 'LOCKED'}
                               </span>
                            </div>
                          ))}
                       </div>

                       {/* Progress Bar */}
                       <div className="w-full max-w-lg mx-auto bg-black/50 p-4 border border-white/10">
                          <div className="flex justify-between text-moon-silver font-mono text-xs font-bold mb-2 tracking-widest">
                             <span>DECRYPTION PROGRESS</span>
                             <span className="text-lantern-red">{progress}%</span>
                          </div>
                          <div className="w-full h-1 bg-white/10">
                             <div 
                               className="h-full bg-lantern-red shadow-[0_0_10px_rgba(192,53,43,0.8)] transition-all duration-700 ease-out relative"
                               style={{ width: `${progress}%` }}
                             >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_white]"></div>
                             </div>
                          </div>
                       </div>

                    </div>
                 </div>
              )}

              <div className={`transition-all duration-1000 w-full h-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10 ${allFound ? 'opacity-100 blur-0' : 'opacity-10 blur-sm grayscale'}`}>
                  
                  {/* Left Column: Photo & Evidence Slots */}
                  <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
                      <div className="bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-md transform -rotate-1 md:-rotate-2 border border-gray-300 relative">
                          <img src={ASSETS.monsterSketch} className="w-full h-64 md:h-80 object-contain mix-blend-multiply grayscale contrast-125" alt="Subject" />
                          <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 border-4 border-lantern-red rounded-full opacity-30"></div>
                          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 font-handwriting text-forgotten-ink text-lg md:text-xl font-bold">
                             最後目擊：自家窗口
                          </div>
                      </div>

                      <div className="bg-[#b0a48f]/50 p-4 md:p-6 border border-[#9c917e]">
                          <h4 className="text-[#4a443b] font-mono font-bold tracking-widest mb-4 border-b border-[#9c917e] pb-2 text-sm md:text-base">EVIDENCE LOG</h4>
                          <div className="grid grid-cols-3 gap-2 md:gap-4">
                             {ITEMS.map((item, i) => (
                               <div key={i} className={`aspect-square border border-[#9c917e] flex items-center justify-center shadow-inner ${foundItems.includes(item.id) ? 'bg-[#f0eadd]' : 'bg-[#a39985]'}`}>
                                  {foundItems.includes(item.id) ? (
                                    <i className={`fa-solid ${item.icon} text-lg md:text-2xl text-forgotten-ink opacity-70`}></i>
                                  ) : (
                                    <span className="text-[#8c8273] text-lg md:text-2xl font-bold">?</span>
                                  )}
                               </div>
                             ))}
                          </div>
                      </div>
                  </div>

                  {/* Right Column: Text Report */}
                  <div className="md:col-span-7 font-serif text-[#2b2520] relative">
                      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 border-4 border-lantern-red rounded-full flex items-center justify-center opacity-20 transform rotate-12 pointer-events-none mix-blend-multiply">
                          <span className="text-lantern-red font-black text-sm md:text-xl uppercase transform -rotate-12">CONFIDENTIAL</span>
                      </div>

                      <div className="mb-6 md:mb-10">
                          <span className="bg-[#2b2520] text-[#c2b59b] px-2 py-1 text-xs md:text-sm font-mono tracking-widest mb-2 inline-block">SUBJECT</span>
                          <h2 className="text-3xl md:text-5xl font-display font-black text-[#1a1714] tracking-widest border-b-4 border-[#2b2520] pb-2 md:pb-4 mb-4 md:mb-6">林晴</h2>
                          <p className="text-base md:text-xl leading-relaxed italic opacity-90">
                             13 歲少女，個性開朗，疼愛妹妹。常穿藍色碎花洋裝，自幼習武。
                          </p>
                      </div>

                      <div className="space-y-6 md:space-y-8">
                          <div>
                              <h4 className="text-lantern-red font-bold text-base md:text-lg tracking-widest mb-2 md:mb-3 flex items-center gap-2">
                                <i className="fa-solid fa-caret-right"></i> 事件摘要 SUMMARY
                              </h4>
                              <p className="text-base md:text-lg leading-loose text-justify pl-4 md:pl-6 border-l-2 border-[#8c8273]/50">
                                暑假外出時妹妹曾短暫失蹤，隔日平安尋回。<br/>
                                當日下午，有目擊指出她獨自前往 <span className="bg-[#2b2520] text-transparent px-2 mx-1 font-mono select-none">████</span> 祈願。<br/>
                                原始紀錄遭塗銷，無法辨識。<br/>
                                深夜因窗外異常聲響出門查看後失去行蹤。
                              </p>
                          </div>

                          <div>
                              <h4 className="text-lantern-red font-bold text-base md:text-lg tracking-widest mb-2 md:mb-3 flex items-center gap-2">
                                <i className="fa-solid fa-caret-right"></i> 疑似相關物件 OBJECTS
                              </h4>
                              <ul className="text-base md:text-lg leading-loose pl-8 md:pl-10 list-disc space-y-2 marker:text-lantern-red">
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

export default MonsterIndex;
