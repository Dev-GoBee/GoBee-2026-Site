import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [announcement, setAnnouncement] = useState<string | null>(null);

  const isAdmin = location.pathname === '/admin';

  // Garante que a página role para o topo sempre que a rota mudar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Verifica se há um anúncio configurado no localStorage (Setado pelo Admin)
  useEffect(() => {
    const savedAnnouncement = localStorage.getItem('gobee_announcement');
    if (savedAnnouncement) {
      setAnnouncement(savedAnnouncement);
    }
    
    // Escuta evento customizado caso o admin atualize na mesma aba
    const handleStorageChange = () => {
       setAnnouncement(localStorage.getItem('gobee_announcement'));
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('announcement-update', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('announcement-update', handleStorageChange);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {announcement && !isAdmin && (
        <div className="bg-gray-900 text-white text-xs font-bold py-2 px-4 text-center relative z-[60]">
          {announcement}
          <button 
            onClick={() => {
              setAnnouncement(null);
              // Opcional: Salvar preferência de fechar na sessão
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      )}
      
      {!isAdmin && <Navbar />}
      
      <main className="flex-grow">
        {children}
      </main>
      
      {!isAdmin && <Footer />}
    </div>
  );
};

export default Layout;