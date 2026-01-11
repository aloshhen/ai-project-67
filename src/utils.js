export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function isTelegramApp() {
  return typeof window.Telegram !== 'undefined' && window.Telegram?.WebApp?.initData
}