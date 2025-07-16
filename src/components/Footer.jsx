
    import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (socialMedia) => {
    toast({
      title: `Link para ${socialMedia}`,
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">
                Viva<span className="text-orange-500">Fit</span>
              </span>
            </NavLink>
            <p className="text-sm">Sua jornada para uma vida mais saudável começa aqui. Transforme seu corpo e mente conosco.</p>
            <div className="flex space-x-4 pt-2">
              <button onClick={() => handleSocialClick('Facebook')} className="text-gray-400 hover:text-orange-500 transition-colors"><Facebook size={24} /></button>
              <button onClick={() => handleSocialClick('Instagram')} className="text-gray-400 hover:text-orange-500 transition-colors"><Instagram size={24} /></button>
              <button onClick={() => handleSocialClick('Twitter')} className="text-gray-400 hover:text-orange-500 transition-colors"><Twitter size={24} /></button>
              <button onClick={() => handleSocialClick('Youtube')} className="text-gray-400 hover:text-orange-500 transition-colors"><Youtube size={24} /></button>
            </div>
          </div>

          <div>
            <p className="font-bold text-white tracking-wider uppercase mb-4">Navegação</p>
            <ul className="space-y-2">
              <li><NavLink to="/sobre" className="hover:text-orange-500 transition-colors">Sobre Nós</NavLink></li>
              <li><NavLink to="/modalidades" className="hover:text-orange-500 transition-colors">Modalidades</NavLink></li>
              <li><NavLink to="/planos" className="hover:text-orange-500 transition-colors">Planos</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-orange-500 transition-colors">Blog</NavLink></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white tracking-wider uppercase mb-4">Contato</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start"><MapPin size={16} className="mr-3 mt-1 text-orange-500 flex-shrink-0" /><span>Rua da Academia, 123, Centro<br/>Sua Cidade, UF, 12345-678</span></li>
              <li className="flex items-center"><Phone size={16} className="mr-3 text-orange-500" /><span>(11) 98765-4321</span></li>
              <li className="flex items-center"><Mail size={16} className="mr-3 text-orange-500" /><span>contato@vivafit.com</span></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white tracking-wider uppercase mb-4">Horário de Funcionamento</p>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold">Seg - Sex:</span> 06:00 - 23:00</li>
              <li><span className="font-semibold">Sábados:</span> 08:00 - 18:00</li>
              <li><span className="font-semibold">Domingos:</span> 09:00 - 14:00</li>
              <li><span className="font-semibold">Feriados:</span> Consulte</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} VivaFit Academia. Todos os direitos reservados.</p>
          <p className="mt-1 text-gray-500">Desenvolvido com ❤️ por Hostinger Horizons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  