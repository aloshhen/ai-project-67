import React from 'react'
import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600 opacity-5 rounded-full -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
            >
              Кофе. Код. Крипто.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-400 mb-8"
            >
              Система лояльности нового поколения для кофейных заведений
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#login"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-white rounded-full font-medium shadow-lg hover:shadow-orange-500/30 transition-all"
              >
                Начать работу
              </motion.a>
              <motion.a
                href="#documentation"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="px-8 py-4 border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-all"
              >
                Документация
              </motion.a>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/5"
            >
              <div className="flex items-center mb-4">
                <Coffee className="w-8 h-8 text-orange-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Предзаказ</h3>
              </div>
              <p className="text-slate-400 mb-6">
                Закажите кофе заранее и получите бонусы за каждую покупку
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">TON</span>
                </div>
                <span className="ml-3 text-slate-400">Оплата криптовалютой</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}