import { useState } from "react";
import { NavLink } from "@remix-run/react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
          <title>菜单</title>
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
              首页
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
              服务项目
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
              发型师
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
              预约服务
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
              联系我们
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
