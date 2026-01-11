import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tighter text-white mb-6">
            Готов начать работу?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Создайте свой кофейный бизнес с криптоинтеграцией уже сегодня
          </p>
          <a
            href="#login"
            className="px-8 py-4 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-white rounded-full font-medium shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            Начать работу
          </a>
        </motion.div>
      </div>
    </section>
  )
}