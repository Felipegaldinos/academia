
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Carlos Almeida',
    specialty: 'Coordenador / Musculação',
    imageText: 'Retrato de Carlos Almeida, instrutor sorrindo',
  },
  {
    name: 'Juliana Santos',
    specialty: 'Treinamento Funcional e HIIT',
    imageText: 'Retrato de Juliana Santos, instrutora em pose de força',
  },
  {
    name: 'Fernando Lima',
    specialty: 'Spinning e Aulas Coletivas',
    imageText: 'Retrato de Fernando Lima, instrutor com energia',
  },
  {
    name: 'Patrícia Costa',
    specialty: 'Pilates e Yoga',
    imageText: 'Retrato de Patrícia Costa, instrutora em pose serena',
  },
  {
    name: 'Ricardo Oliveira',
    specialty: 'Musculação e Nutrição Esportiva',
    imageText: 'Retrato de Ricardo Oliveira, instrutor confiante',
  },
  {
    name: 'Beatriz Martins',
    specialty: 'Aulas de Dança e Ritmos',
    imageText: 'Retrato de Beatriz Martins, instrutora sorrindo',
  },
];

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Helmet>
        <title>Nossa Equipe - VivaFit Academia</title>
        <meta name="description" content="Conheça os instrutores da VivaFit Academia. Uma equipe de profissionais qualificados e apaixonados, prontos para te ajudar a alcançar seus objetivos." />
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
              Conheça Nossa <span className="text-orange-500">Equipe</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Profissionais apaixonados e dedicados a extrair o seu melhor.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg text-center overflow-hidden shadow-lg group"
                variants={itemVariants}
              >
                <div className="relative h-72">
                  <img  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" alt={member.imageText} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-orange-500 font-semibold">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Team;
  