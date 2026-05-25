import { motion } from 'framer-motion'
import { Camera, Globe, X } from 'lucide-react'

const navLinks = ['Home', 'How It Works', 'Philosophy', 'Use Cases']

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-28 py-4">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full border-2 border-foreground/60 flex items-center justify-center flex-shrink-0">
          <div className="w-3 h-3 rounded-full border border-foreground/60" />
        </div>
        <span className="font-bold text-foreground text-sm tracking-wide">Strata</span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center">
        {navLinks.map((link, i) => (
          <span key={link} className="flex items-center">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-1"
            >
              {link}
            </a>
            {i < navLinks.length - 1 && (
              <span className="text-muted-foreground/40 text-xs select-none">•</span>
            )}
          </span>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-2">
        {([Camera, Globe, X] as const).map((Icon, i) => (
          <motion.button
            key={i}
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors duration-200 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={16} />
          </motion.button>
        ))}
      </div>
    </nav>
  )
}
