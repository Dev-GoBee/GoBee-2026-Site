import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION, NavItemChild } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Logo URL - Pulling directly from the source or generic placeholder if offline
  const LOGO_URL = "https://gobee.odoo.com/web/image/website/1/logo/";

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white/0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group relative z-50">
            <img 
              src={LOGO_URL} 
              alt="Gobee Logo" 
              className={`h-10 w-auto transition-all duration-300 ${!scrolled ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-1 px-6 py-2 rounded-full transition-all ${scrolled ? 'bg-white border border-gray-100' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
            {NAVIGATION.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button 
                    className={`flex items-center gap-1 font-medium px-4 py-2 rounded-full transition-all text-sm ${
                      scrolled 
                        ? 'text-gray-600 hover:text-gobee-600 hover:bg-gray-50' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link 
                    to={item.path || '#'}
                    className={`font-medium px-4 py-2 rounded-full transition-all text-sm ${
                      scrolled 
                        ? 'text-gray-600 hover:text-gobee-600 hover:bg-gray-50' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]">
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 grid grid-cols-1 gap-2 overflow-hidden">
                      {item.children.map((child: NavItemChild) => (
                        <Link 
                          key={child.path}
                          to={child.path}
                          className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group/item"
                        >
                          <div className="p-3 rounded-full bg-gobee-50 text-gobee-600 group-hover/item:bg-white group-hover/item:text-gobee-500 transition-colors shadow-sm">
                            <child.icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 group-hover/item:text-gobee-600 text-sm">
                              {child.label}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                              {child.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
            
          <div className="hidden md:block">
             <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all text-sm shadow-lg ${
               scrolled 
                ? 'bg-gobee-600 text-white hover:bg-gobee-700 shadow-gobee-200' 
                : 'bg-white text-gobee-600 hover:bg-gray-100'
             }`}>
               Falar com especialista
             </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-full transition-colors ${
              scrolled || isMobileMenuOpen 
                ? 'text-gray-800 bg-gray-100' 
                : 'text-white bg-white/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-40 pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-4 mb-2 last:border-0">
                {item.children ? (
                  <div>
                    <div className="font-bold text-xl text-gray-900 mb-4">{item.label}</div>
                    <div className="flex flex-col gap-3">
                      {item.children.map((child) => (
                        <Link 
                          key={child.path}
                          to={child.path}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl text-gray-700 hover:bg-gobee-50"
                        >
                          <div className="bg-white p-2 rounded-full text-gobee-600">
                             <child.icon size={18} />
                          </div>
                          <span className="font-medium">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path || '#'}
                    className="block font-bold text-xl text-gray-900 hover:text-gobee-600"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <button className="mt-4 w-full py-4 bg-gobee-600 text-white rounded-full font-bold shadow-lg">
              Falar com especialista
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;