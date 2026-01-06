import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Home, 
  Bell, 
  Moon, 
  Sun, 
  ChevronDown, 
  Globe, 
  Menu 
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Estudiar', path: '#' },
    { label: 'Practicar', path: '#' },
    { label: 'Programas', path: '/programas' },
    { label: 'Tu progreso', path: '#' },
    { label: 'Orientación', path: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.hash = '/'}>
              <span className="text-primary text-2xl font-bold flex items-center gap-2">
                <Globe className="w-8 h-8" />
                puntajenacional.cl
              </span>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-6 text-gray-500 dark:text-gray-400">
              <Link to="/" className="hover:text-primary dark:hover:text-primary transition-colors p-2">
                <Home className="w-5 h-5" />
              </Link>
              <button className="hover:text-primary dark:hover:text-primary transition-colors relative p-2">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
              </button>
              <a href="#" className="hidden sm:block text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors">
                Ayuda
              </a>
              <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:text-primary dark:hover:text-primary transition-colors border-l pl-4 border-gray-200 dark:border-gray-700">
                <span className="text-sm font-bold uppercase truncate max-w-[150px]">MARIA IGNACIA</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <button 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-primary transition-colors"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center overflow-x-auto no-scrollbar">
            <div className="flex w-full sm:w-auto min-w-full sm:min-w-0">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`
                      flex-1 sm:flex-none text-center py-4 px-6 text-sm font-medium border-b-2 whitespace-nowrap transition-colors
                      ${isActive 
                        ? 'border-primary text-primary bg-blue-50/50 dark:bg-blue-900/20' 
                        : 'border-transparent text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700'}
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50 dark:bg-slate-900 transition-colors">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-primary w-6 h-6" />
                <span className="font-bold text-lg text-gray-800 dark:text-white">puntajenacional.cl</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                La plataforma educativa líder para preparar tu ingreso a la educación superior.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Estudiantes</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a className="hover:text-primary transition-colors" href="#">Ensayos</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Clases en vivo</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Test Vocacional</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Comunidad</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Foro</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Ayuda</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378-1.967 5.76-1.967-5.76H7.94l3.11 7.632L8.27 21h2.29l1.623-4.156L13.807 21h2.29l-2.78-6.022 3.11-7.632h-2.112z" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-8 text-center text-sm text-gray-400">
            © 2023 Puntaje Nacional. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;