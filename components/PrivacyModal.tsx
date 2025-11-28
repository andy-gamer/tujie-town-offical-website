
import React from 'react';

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

export default PrivacyModal;
