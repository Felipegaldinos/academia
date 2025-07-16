
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Plano Mensal',
    price: '129,90',
    period: '/mês',
    features: [
      'Acesso a todas as modalidades',
      'Musculação com acompanhamento',
      'Sem taxa de matrícula',
      'Flexibilidade total',
    ],
    popular: false,
  },
  {
    name: 'Plano Trimestral',
    price: '109,90',
    period: '/mês',
    features: [
      'Acesso a todas as modalidades',
      'Musculação com acompanhamento',
      'Sem taxa de matrícula',
      '1 avaliação física gratuita',
    ],
    popular: true,
  },
  {
    name: 'Plano Anual',
    price: '89,90',
    period: '/mês',
    features: [
      'Acesso a todas as modalidades',
      'Musculação com acompanhamento',
      'Sem taxa de matrícula',
      '3 avaliações físicas gratuitas',
      'Leve um amigo por 30 dias',
    ],
    popular: false,
  },
];

const Plans = () => {
  const { toast } = useToast();

  const handleChoosePlan = (planName) => {
    toast({
      title: `Plano ${planName} selecionado!`,
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const containerVariants = {
    hidden: {},
    visible: {
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
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Planos - VivaFit Academia</title>
        <meta name="description" content="Confira nossos planos mensais, trimestrais e anuais. Escolha o plano ideal para você e comece a treinar na VivaFit Academia hoje mesmo." />
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
              Escolha o <span className="text-orange-500">Plano Perfeito</span> para Você
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Planos flexíveis e acessíveis para você focar no que realmente importa: seus resultados.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-gray-800 rounded-lg p-8 flex flex-col shadow-lg ${plan.popular ? 'border-2 border-orange-500' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                {plan.popular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    MAIS POPULAR
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                  <div className="text-center mb-6">
                    <span className="text-5xl font-extrabold text-orange-500">R${plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  onClick={() => handleChoosePlan(plan.name)}
                  className={`w-full font-bold text-lg py-3 ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-600 hover:bg-orange-500'}`}
                >
                  Escolher Plano
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Plans;
  