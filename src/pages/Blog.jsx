
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: '5 Dicas para Maximizar seu Treino de Musculação',
    category: 'Treino',
    date: '10 de Julho, 2025',
    excerpt: 'Aprenda como pequenas mudanças na sua rotina podem gerar grandes resultados na hipertrofia e força.',
    imageText: 'Pessoa focada levantando halteres',
  },
  {
    title: 'A Importância da Nutrição no Ganho de Massa Muscular',
    category: 'Nutrição',
    date: '05 de Julho, 2025',
    excerpt: 'Descubra quais alimentos são essenciais para construir músculos e como montar seu prato de forma inteligente.',
    imageText: 'Prato colorido com frango, brócolis e batata doce',
  },
  {
    title: 'HIIT vs. Cardio Contínuo: Qual o Melhor para Você?',
    category: 'Treino',
    date: '01 de Julho, 2025',
    excerpt: 'Entenda as diferenças, vantagens e desvantagens de cada método de treino cardiovascular e escolha o ideal.',
    imageText: 'Cronômetro marcando tempo de treino',
  },
];

const Blog = () => {
  const { toast } = useToast();

  const handleReadMore = (title) => {
    toast({
      title: `Ler Post: ${title}`,
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

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
        <title>Blog - Dicas de Treino e Nutrição | VivaFit Academia</title>
        <meta name="description" content="Acompanhe o blog da VivaFit Academia para receber dicas valiosas sobre treino, nutrição, saúde e bem-estar. Mantenha-se informado e motivado!" />
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
              Nosso <span className="text-orange-500">Blog</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Dicas de treino, nutrição e bem-estar para potencializar sua jornada.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col group"
                variants={itemVariants}
              >
                <div className="relative h-56">
                  <img  className="w-full h-full object-cover" alt={post.imageText} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">{post.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <Button
                    onClick={() => handleReadMore(post.title)}
                    variant="link"
                    className="text-orange-500 p-0 self-start hover:text-orange-400"
                  >
                    Leia Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;
  