import React from 'react';
import { useLanguage } from '~/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };
  
  return (
    <button 
      onClick={toggleLanguage} 
      className="bg-transparent hover:bg-gray-700 text-white font-medium py-1 px-3 rounded-md transition duration-200"
    >
      {t('switchLanguage')}
    </button>
  );
}
