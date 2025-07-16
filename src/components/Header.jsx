
    import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Modalidades', path: '/modalidades' },
  { name: 'Planos', path: '/planos' },
  { name: 'Estrutura', path: '/estrutura' },
  { name: 'Equipe', path: '/equipe' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/contato' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScheduleClick = () => {
    toast({
      title: "Agendamento de Aula",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const linkClass = ({ isActive }) =>
    `relative text-lg font-medium transition-colors duration-300 ${
      isActive ? 'text-orange-500' : 'text-white hover:text-orange-400'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block py-4 text-2xl text-center transition-colors duration-300 ${
      isActive ? 'text-orange-500 font-bold' : 'text-white hover:text-orange-400'
    }`;

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-white tracking-tight">
              Viva<span className="text-orange-500">Fit</span>
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
                        layoutId="underline"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button onClick={handleScheduleClick} variant="default" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
              Agende uma Aula
            </Button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="lg:hidden fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center"
          >
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white focus:outline-none">
              <X className="h-8 w-8" />
            </button>
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={mobileLinkClass} onClick={toggleMenu}>
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="mt-12">
              <Button onClick={handleScheduleClick} size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl">
                Agende uma Aula
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
  