import React from 'react';
import { Instagram, Linkedin, Facebook, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const LOGO_URL = "https://gobee.odoo.com/web/image/website/1/logo/";

  return (
    <footer className="bg-white text-gray-600 pt-16 pb-12 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={LOGO_URL} 
                alt="Gobee Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Transformando negócios através de tecnologia, design e estratégia digital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gobee-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gobee-600 hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gobee-600 hover:text-white transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6 text-sm">A Gobee</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/sobre-nos" className="hover:text-gobee-600 hover:underline">Sobre nós</Link></li>
              <li><Link to="#" className="hover:text-gobee-600 hover:underline">Carreiras</Link></li>
              <li><Link to="#" className="hover:text-gobee-600 hover:underline">Blog</Link></li>
              <li><Link to="#" className="hover:text-gobee-600 hover:underline">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-6 text-sm">Serviços</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/solucoes/gestao-ecommerce" className="hover:text-gobee-600 hover:underline">Gestão de e-Commerce</Link></li>
              <li><Link to="/servicos/e-branding" className="hover:text-gobee-600 hover:underline">e-Branding</Link></li>
              <li><Link to="/servicos/e-commerce" className="hover:text-gobee-600 hover:underline">Desenvolvimento</Link></li>
              <li><Link to="/servicos/e-marketing" className="hover:text-gobee-600 hover:underline">Performance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-6 text-sm">Fale Conosco</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>contato@gobee.com.br</li>
              <li>Florianópolis, SC</li>
              <li className="pt-2">
                 <button className="text-gobee-600 font-bold border border-gobee-600 px-4 py-2 rounded-full hover:bg-gobee-50 transition-colors text-xs">
                   Área do Cliente
                 </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Gobee Soluções Digitais Ltda.</p>
          <div className="flex items-center gap-4">
             <p>Feito com ❤️ em Floripa.</p>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             {/* Link temporário Admin */}
             <Link to="/admin" className="flex items-center gap-1 hover:text-gobee-600 transition-colors">
               <Lock size={10} /> Admin
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;