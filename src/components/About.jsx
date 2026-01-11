import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Wallet, Trophy } from 'lucide-react'

export default function About() {
  const steps = [
    {
      icon: Coffee,
      title: 'Выберите кофе',
      description: 'Создайте персонализированный заказ через мобильное приложение или веб-интерфейс',
    },
    {
      icon: Wallet,
      title: 'Оплатите криптовалютой',
      description: 'Оплатите заказ TON или Stars, получите крипто-бонусы за каждую покупку',
    },
    {
      icon: Trophy,
      title: 'Получите бонусы',
      description: 'Получите NFT-бонусы и крипто-награды за каждую покупку в кофейне',
    },
  ]

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tighter text-center text-white mb-16"
        >
          Как это работает
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10"></div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-6 md:left-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600 rounded-full"></div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r text-white rounded-full flex items-center justify-center mb-6">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}