
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-[70] bg-midnight-fog/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="relative w-full max-w-2xl bg-valley-teal border border-mist-grey p-6 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-mist-grey hover:text-lantern-red transition-colors text-xl">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-moon-silver mb-8 tracking-widest border-b border-lantern-red/30 pb-4">
          {t.privacy.title}
        </h3>
        <div className="text-mist-grey font-serif space-y-4 leading-relaxed max-h-[50vh] overflow-y-auto custom-scrollbar pr-4 text-sm md:text-base">
          <p>{t.privacy.p1}</p>
          <p>{t.privacy.p2}</p>
          <ul className="list-disc pl-5 space-y-2">
             <li><strong>{t.privacy.l1}</strong>{t.privacy.l1_desc}</li>
             <li><strong>{t.privacy.l2}</strong>{t.privacy.l2_desc}</li>
             <li><strong>{t.privacy.l3}</strong>{t.privacy.l3_desc}</li>
          </ul>
          <p className="mt-8 text-sm opacity-60 font-mono">{t.privacy.update}</p>
        </div>
        <div className="mt-8 text-center">
           <button onClick={onClose} className="px-8 py-2 border border-mist-grey hover:bg-mist-grey hover:text-valley-teal transition-colors font-bold tracking-widest text-sm">
             {t.privacy.understood}
           </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
