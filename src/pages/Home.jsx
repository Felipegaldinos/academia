
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Zap, ShieldCheck, HeartPulse } from 'lucide-react';

const Home = () => {
  const { toast } = useToast();

  const handleScheduleClick = () => {
    toast({
      title: "Agendamento de Aula Experimental",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>VivaFit Academia - Transforme Sua Vida com Saúde e Energia</title>
        <meta name="description" content="Junte-se à VivaFit Academia e comece sua jornada de transformação. Oferecemos musculação, funcional, HIIT e mais. Agende sua aula experimental gratuita!" />
      </Helmet>
      <div className="overflow-x-hidden">
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-black">
          <div className="absolute inset-0 z-0">
            <img  className="w-full h-full object-cover opacity-40" alt="Pessoas se exercitando em uma academia moderna e vibrante" src="https://images.unsplash.com/photo-1563454621355-5ba92b92285c" />
          </div>
          <motion.div
            className="relative z-10 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              Sua Transformação <span className="text-orange-500">Começa Agora</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              Na VivaFit, você encontra a estrutura, o apoio e a motivação para alcançar seus objetivos.
            </p>
            <Button onClick={handleScheduleClick} size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105">
              Agende uma Aula Experimental Gratuita <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>

        <motion.section
          className="py-16 md:py-24 bg-gray-900"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Bem-vindo à <span className="text-orange-500">VivaFit</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-gray-300 text-lg mb-12">
              Somos mais que uma academia. Somos uma comunidade apaixonada por saúde e bem-estar, dedicada a ajudar você a superar limites e conquistar a sua melhor versão.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <Zap className="h-12 w-12 mx-auto text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Energia Renovada</h3>
                <p className="text-gray-400">Aulas dinâmicas e ambiente vibrante para manter sua motivação em alta.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <ShieldCheck className="h-12 w-12 mx-auto text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Resultados Reais</h3>
                <p className="text-gray-400">Equipe qualificada e equipamentos de ponta para garantir seu progresso.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <HeartPulse className="h-12 w-12 mx-auto text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Saúde em Foco</h3>
                <p className="text-gray-400">Cuidamos do seu bem-estar completo, com foco em saúde e qualidade de vida.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="py-16 md:py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nossa <span className="text-orange-500">Estrutura</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
                    <img  className="w-full h-full object-cover" alt="Área de musculação da academia com equipamentos modernos" src="https://images.unsplash.com/photo-1660921033451-ff4c849bfc99" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
                    <img  className="w-full h-full object-cover" alt="Sala de spinning com bicicletas ergométricas alinhadas" src="https://images.unsplash.com/photo-1590519728434-28085ffa2156" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
                    <img  className="w-full h-full object-cover" alt="Vestiário limpo e organizado com armários" src="https://images.unsplash.com/photo-1578531463682-cc6e1917acbb" />
                </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
  