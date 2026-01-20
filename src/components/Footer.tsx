import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-dark-lighter">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Gustavo Almeida dos Santos. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-primary" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
