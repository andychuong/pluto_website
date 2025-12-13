import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/overview', label: 'Overview' },
    { to: '/getting-started', label: 'Getting Started' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-900/80 backdrop-blur-md border-b border-space-600">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-star hover:text-pluto transition-colors">
            <span className="text-2xl">◐</span>
            <span>Pluto</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  isActive(link.to)
                    ? 'text-pluto'
                    : 'text-star-dim hover:text-star'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/andychuong/pluto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-star-dim hover:text-star transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-star p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  isActive(link.to)
                    ? 'text-pluto'
                    : 'text-star-dim hover:text-star'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/andychuong/pluto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-star-dim hover:text-star transition-colors"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
