import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Coffee,
      title: 'Smart Order',
      description: 'Создавайте персонализированные заказы и получайте бонусы за каждую покупку',
      gradient: 'from-orange-400 via-amber-500 to-yellow-600',
    },
    {
      icon: Wallet,
      title: 'Crypto Payments',
      description: 'Оплачивайте кофе криптовалютой TON и Stars, получайте крипто-бонусы',
      gradient: 'from-orange-400 via-amber-500 to-yellow-600',
      wide: true,
    },
    {
      icon: Trophy,
      title: 'NFT Loyalty',
      description: 'Получайте уникальные NFT-бонусы за каждую покупку в кофейне',
      gradient: 'from-orange-400 via-amber-500 to-yellow-600',
    },
    {
      icon: BarChart3,
      title: 'Live Analytics',
      description: 'Отслеживайте статистику продаж и лояльности в реальном времени',
      gradient: 'from-orange-400 via-amber-500 to-yellow-600',
    },
  ]

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tighter text-center text-white mb-16"
        >
          Функции экосистемы
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={cn(
                'bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 hover:shadow-xl hover:shadow-orange-500/10 transition-all',
                feature.wide && 'lg:col-span-2'
              )}
            >
              <div className="w-12 h-12 bg-gradient-to-r text-white rounded-full flex items-center justify-center mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}