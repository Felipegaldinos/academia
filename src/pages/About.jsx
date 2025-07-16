
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Gem, Users } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Sobre Nós - VivaFit Academia</title>
        <meta name="description" content="Conheça a história, missão, visão e valores da VivaFit Academia. Entenda por que somos a melhor escolha para sua jornada de saúde e bem-estar." />
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
              Nossa <span className="text-orange-500">História</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
              Movidos pela paixão de transformar vidas através do exercício.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <img  className="rounded-lg shadow-2xl w-full h-auto object-cover" alt="Fundadores da academia sorrindo" src="https://images.unsplash.com/photo-1702469224157-327a08d6061a" />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-500">O Início de um Sonho</h2>
              <p className="text-gray-300 leading-relaxed">
                A VivaFit Academia nasceu em 2015 do sonho de criar um espaço onde todos se sentissem bem-vindos e motivados a buscar uma vida mais ativa e saudável. Começamos com uma pequena estrutura, mas com um grande propósito: oferecer mais do que apenas equipamentos, mas sim um ambiente de apoio, amizade e superação.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ao longo dos anos, crescemos e evoluímos, sempre investindo em tecnologia, na qualificação da nossa equipe e na diversidade de modalidades. Hoje, somos uma referência na cidade, orgulhosos de cada história de transformação que ajudamos a construir.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="bg-gray-800 p-8 rounded-lg">
              <Target className="h-12 w-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Missão</h3>
              <p className="text-gray-400">Inspirar e capacitar pessoas a alcançarem seu máximo potencial de saúde e bem-estar, oferecendo um serviço de excelência em um ambiente acolhedor e motivador.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gray-800 p-8 rounded-lg">
              <Eye className="h-12 w-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Visão</h3>
              <p className="text-gray-400">Ser reconhecida como a principal academia da região, sinônimo de resultados, inovação e qualidade de vida, transformando positivamente a comunidade ao nosso redor.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gray-800 p-8 rounded-lg md:col-span-2 lg:col-span-1">
              <Gem className="h-12 w-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Valores</h3>
              <p className="text-gray-400">Comprometimento, Respeito, Paixão por servir, Ética, Inovação e Foco no aluno.</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Nossos <span className="text-orange-500">Diferenciais</span>
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4">
                    <Users className="h-8 w-8 text-orange-500 flex-shrink-0" />
                    <p className="text-lg font-semibold">Acompanhamento Personalizado</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4">
                    <Users className="h-8 w-8 text-orange-500 flex-shrink-0" />
                    <p className="text-lg font-semibold">Equipamentos de Última Geração</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4">
                    <Users className="h-8 w-8 text-orange-500 flex-shrink-0" />
                    <p className="text-lg font-semibold">Ampla Variedade de Aulas</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4">
                    <Users className="h-8 w-8 text-orange-500 flex-shrink-0" />
                    <p className="text-lg font-semibold">Ambiente Climatizado e Acolhedor</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
  