import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-space-600 bg-space-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-star-dim text-sm">
            Built for AI-first engineers
          </p>
          <div className="text-star-dim">
            <span>Pluto</span>
          </div>
          <div className="flex gap-6 text-star-dim text-sm">
            <a
              href="https://github.com/andychuong/pluto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-star transition-colors flex items-center gap-2"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://github.com/andychuong/pluto/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-star transition-colors"
            >
              Issues
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
