import React from 'react'
import { cn } from '../utils'
import { Menu, X } from 'lucide-react'
import { isTelegramApp } from '../utils'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-slate-950/30 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-electric-coffee">☕ CoffeeChain</div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-slate-400 hover:text-white transition-colors">Функции</a>
          <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">Как работает</a>
          <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Тарифы</a>
          <a href="#login" className="text-slate-400 hover:text-white transition-colors">Войти</a>
        </div>
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-white/10">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-slate-400 hover:text-white transition-colors">Функции</a>
            <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">Как работает</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Тарифы</a>
            <a href="#login" className="text-slate-400 hover:text-white transition-colors">Войти</a>
            {isTelegramApp() && (
              <a href="https://t.me/yourbot" className="text-orange-400 hover:text-orange-300 transition-colors">
                Открыть в Telegram
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}