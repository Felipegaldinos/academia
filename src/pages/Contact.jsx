
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Formulário Enviado!",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
    e.target.reset();
  };

  const handleWhatsAppClick = () => {
    toast({
      title: "Abrir WhatsApp",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contato - VivaFit Academia</title>
        <meta name="description" content="Entre em contato com a VivaFit Academia. Envie uma mensagem, encontre nosso endereço no mapa, ligue ou fale conosco pelo WhatsApp." />
      </Helmet>
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Fale <span className="text-orange-500">Conosco</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Estamos prontos para tirar suas dúvidas e te dar as boas-vindas!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-3xl font-bold mb-6">Mande uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                  <input type="text" id="name" name="name" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea id="message" name="message" rows="5" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"></textarea>
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3">
                  Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Nossos Contatos</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Endereço</p>
                      <p className="text-gray-300">Rua da Academia, 123, Centro, Sua Cidade - UF</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Telefone</p>
                      <p className="text-gray-300">(11) 98765-4321</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-gray-300">contato@vivafit.com</p>
                    </div>
                  </div>
                </div>
                <Button onClick={handleWhatsAppClick} className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-3">
                  Fale pelo WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Localização</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-46.639,-23.551,-46.633,-23.547&layer=mapnik"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa da VivaFit Academia"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
  