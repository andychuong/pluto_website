import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function CodeBlock({ children, language = 'bash' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="code-block">
        <code>{children}</code>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded bg-space-700 text-star-dim hover:text-star opacity-0 group-hover:opacity-100 transition-all"
        title="Copy to clipboard"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  )
}
