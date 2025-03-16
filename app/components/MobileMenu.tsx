import { useState } from "react";
import { NavLink } from "@remix-run/react";
import { useLanguage } from "~/contexts/LanguageContext";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* 菜单按钮 */}
      <button 
        onClick={toggleMenu}
        className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
      >
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>{t('Menu')}</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-800 shadow-lg z-50">
          <div className="flex flex-col">
            <NavLink 
              to="/" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                isActive 
                  ? "text-orange-400 px-4 py-3 border-b border-gray-700 font-medium" 
                  : "text-white px-4 py-3 border-b border-gray-700 hover:text-orange-300"
              }
            >
              {t('home')}
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                isActive 
                  ? "text-orange-400 px-4 py-3 border-b border-gray-700 font-medium" 
                  : "text-white px-4 py-3 border-b border-gray-700 hover:text-orange-300"
              }
            >
              {t('services')}
            </NavLink>
            <NavLink 
              to="/stylists" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                isActive 
                  ? "text-orange-400 px-4 py-3 border-b border-gray-700 font-medium" 
                  : "text-white px-4 py-3 border-b border-gray-700 hover:text-orange-300"
              }
            >
              {t('stylists')}
            </NavLink>
            <NavLink 
              to="/appointment" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                isActive 
                  ? "text-orange-400 px-4 py-3 border-b border-gray-700 font-medium" 
                  : "text-white px-4 py-3 border-b border-gray-700 hover:text-orange-300"
              }
            >
              {t('appointment')}
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                isActive 
                  ? "text-orange-400 px-4 py-3 font-medium" 
                  : "text-white px-4 py-3 hover:text-orange-300"
              }
            >
              {t('contact')}
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
