
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const modalities = [
  {
    name: 'Musculação',
    description: 'Treinamento de força para hipertrofia, definição e condicionamento físico com acompanhamento profissional.',
    imageText: 'Homem levantando pesos em um supino',
  },
  {
    name: 'Treinamento Funcional',
    description: 'Exercícios que simulam movimentos do dia a dia para melhorar força, equilíbrio, agilidade e resistência.',
    imageText: 'Pessoas fazendo agachamentos com kettlebell',
  },
  {
    name: 'HIIT',
    description: 'Treino intervalado de alta intensidade para máxima queima de calorias em um curto período de tempo.',
    imageText: 'Mulher pulando corda em alta velocidade',
  },
  {
    name: 'Spinning',
    description: 'Aulas de ciclismo indoor em grupo, com muita música e energia para um treino cardiovascular intenso.',
    imageText: 'Grupo de pessoas em uma aula de spinning',
  },
  {
    name: 'Pilates',
    description: 'Método que fortalece o core, melhora a postura, flexibilidade e a consciência corporal.',
    imageText: 'Mulher fazendo exercício de pilates em um reformer',
  },
  {
    name: 'Yoga',
    description: 'Prática que une corpo e mente, promovendo flexibilidade, força, equilíbrio e relaxamento.',
    imageText: 'Grupo de pessoas em posição de yoga',
  },
];

const Modalities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Helmet>
        <title>Modalidades - VivaFit Academia</title>
        <meta name="description" content="Descubra todas as modalidades que a VivaFit Academia oferece: musculação, funcional, HIIT, spinning, pilates, yoga e muito mais. Encontre a atividade perfeita para você." />
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
              Nossas <span className="text-orange-500">Modalidades</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Encontre a atividade que mais combina com você e seus objetivos.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {modalities.map((modality, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative h-56">
                  <img  className="w-full h-full object-cover" alt={modality.imageText} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">{modality.name}</h3>
                  <p className="text-gray-300">{modality.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Modalities;
  