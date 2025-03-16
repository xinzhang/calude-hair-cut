import { NavLink } from "@remix-run/react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
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
            首页
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? "text-orange-400 font-medium" : "hover:text-orange-300"
            }
          >
            服务项目
          </NavLink>
          <NavLink 
            to="/stylists" 
            className={({ isActive }) => 
              isActive ? "text-orange-400 font-medium" : "hover:text-orange-300"
            }
          >
            发型师
          </NavLink>
          <NavLink 
            to="/appointment" 
            className={({ isActive }) => 
              isActive ? "text-orange-400 font-medium" : "hover:text-orange-300"
            }
          >
            预约服务
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-orange-400 font-medium" : "hover:text-orange-300"
            }
          >
            联系我们
          </NavLink>
        </div>
        
        {/* 移动端菜单 */}
        <MobileMenu />
      </div>
    </nav>
  );
}
