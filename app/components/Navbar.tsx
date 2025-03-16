import { NavLink } from "@remix-run/react";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "~/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img src="/logo.svg" alt="StyleCuts" className="h-8" />
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-orange-400 font-medium" : "hover:text-orange-300"
            }
          >
            {t('home')}
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? "text-orange-400 font-medium" : "hover:text-orange-300"
            }
          >
            {t('services')}
          </NavLink>
          <NavLink 
            to="/stylists" 
            className={({ isActive }) => 
              isActive ? "text-orange-400 font-medium" : "hover:text-orange-300"
            }
          >
            {t('stylists')}
          </NavLink>
          <NavLink 
            to="/appointment" 
            className={({ isActive }) => 
              isActive ? "text-orange-400 font-medium" : "hover:text-orange-300"
            }
          >
            {t('appointment')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-orange-400 font-medium" : "hover:text-orange-300"
            }
          >
            {t('contact')}
          </NavLink>
        </div>
        
        {/* 移动端菜单 */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
