
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const galleryImages = [
  { srcText: 'Ampla área de musculação com equipamentos modernos', alt: 'Área de musculação da VivaFit' },
  { srcText: 'Sala de pesos livres com halteres organizados', alt: 'Área de pesos livres' },
  { srcText: 'Equipamentos de cardio, como esteiras e elípticos', alt: 'Equipamentos de cardio' },
  { srcText: 'Sala de aulas coletivas espaçosa e bem iluminada', alt: 'Sala de aulas coletivas' },
  { srcText: 'Estúdio de pilates com reformers e acessórios', alt: 'Estúdio de pilates' },
  { srcText: 'Vestiário masculino moderno e limpo', alt: 'Vestiário masculino' },
  { srcText: 'Vestiário feminino com armários e espelhos', alt: 'Vestiário feminino' },
  { srcText: 'Recepção da academia com balcão e logo', alt: 'Recepção da academia' },
  { srcText: 'Bicicletas de spinning prontas para a aula', alt: 'Sala de spinning' },
];

const Structure = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <>
      <Helmet>
        <title>Estrutura - VivaFit Academia</title>
        <meta name="description" content="Conheça a estrutura completa da VivaFit Academia. Veja fotos da nossa musculação, salas de aula, vestiários e equipamentos de ponta." />
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
              Nossa <span className="text-orange-500">Estrutura</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Um ambiente projetado para o seu conforto, segurança e melhores resultados.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <img  className="w-full h-full object-cover" alt={image.alt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Structure;
  