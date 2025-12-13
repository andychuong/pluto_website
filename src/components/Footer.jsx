export default function Footer() {
  return (
    <footer className="border-t border-space-600 bg-space-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-star-dim">
            <span className="text-xl">◐</span>
            <span>Pluto</span>
          </div>
          <div className="flex gap-6 text-star-dim text-sm">
            <a
              href="https://github.com/andychuong/pluto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-star transition-colors"
            >
              GitHub
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
          <p className="text-star-dim text-sm">
            Built for AI-first engineers
          </p>
        </div>
      </div>
    </footer>
  )
}
