
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContentWarning: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-[#0b0c0d] py-12 px-6 border-t border-lily-shadow">
      <div className="container mx-auto max-w-4xl border border-ui-dim-red/30 bg-ui-dim-red/5 p-6 md:p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ui-dim-red to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ui-dim-red to-transparent opacity-50"></div>
        
        <h3 className="text-ui-dim-red font-display font-bold text-lg md:text-xl tracking-[0.2em] mb-4">
          {t.contentWarning.title}
        </h3>
        <p className="text-mist-grey/70 font-serif text-sm md:text-base leading-loose whitespace-pre-line">
          {t.contentWarning.text}
        </p>
      </div>
    </section>
  );
};

export default ContentWarning;
