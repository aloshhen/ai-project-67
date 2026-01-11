import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CoffeeChain</h3>
            <p className="text-slate-400">
              Высокотехнологичная кофейная экосистема с криптоинтеграцией
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Функции</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Smart Order</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Crypto Payments</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">NFT Loyalty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              <li><a href="#documentation" className="text-slate-400 hover:text-white transition-colors">Документация</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#blog" className="text-slate-400 hover:text-white transition-colors">Блог</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Социальные сети</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Telegram</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-400">
          <p>© {new Date().getFullYear()} CoffeeChain. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}