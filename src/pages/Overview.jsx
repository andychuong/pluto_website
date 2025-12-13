import { GitBranch, History, Shield, Puzzle } from 'lucide-react'

export default function Overview() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-star mb-4">Overview</h1>
        <p className="text-xl text-star-dim mb-12">
          Pluto is a Git workflow tool designed for AI-first software development.
        </p>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-star mb-6">The Problem</h2>
          <div className="p-6 rounded-lg bg-space-800 border border-space-600">
            <p className="text-star-dim leading-relaxed mb-4">
              When working with AI coding agents, changes happen fast. An AI might modify dozens of files in a single session, making it hard to:
            </p>
            <ul className="space-y-3 text-star-dim">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-pluto-dark mt-2"></span>
                <span>Track what changed and why</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-pluto-dark mt-2"></span>
                <span>Revert specific changes without losing other work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-pluto-dark mt-2"></span>
                <span>Maintain a clean, readable commit history</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-pluto-dark mt-2"></span>
                <span>Understand the context behind each change</span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-star mb-6">The Solution</h2>
          <p className="text-star-dim mb-8 leading-relaxed">
            Pluto introduces a two-phase commit workflow: <strong className="text-star">micro-commits</strong> during development, followed by <strong className="text-star">consolidation</strong> before merging.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-space-800 border border-space-600">
              <div className="w-12 h-12 rounded-lg bg-space-700 flex items-center justify-center mb-4">
                <History size={24} className="text-pluto" />
              </div>
              <h3 className="text-lg font-semibold text-star mb-2">Micro-Commits</h3>
              <p className="text-star-dim text-sm leading-relaxed">
                Every file change is automatically committed with context about what changed and why. This creates a detailed audit trail of your AI agent's work.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-space-800 border border-space-600">
              <div className="w-12 h-12 rounded-lg bg-space-700 flex items-center justify-center mb-4">
                <GitBranch size={24} className="text-pluto" />
              </div>
              <h3 className="text-lg font-semibold text-star mb-2">Consolidation</h3>
              <p className="text-star-dim text-sm leading-relaxed">
                When you're ready to merge, consolidate micro-commits into clean, meaningful commits. Keep your main branch history readable.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-star mb-6">Key Features</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-space-700 flex items-center justify-center shrink-0">
                <Shield size={20} className="text-pluto" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-star mb-1">Never Lose Work</h3>
                <p className="text-star-dim">
                  With automatic micro-commits, every change is preserved. Roll back to any point in your session if something goes wrong.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-space-700 flex items-center justify-center shrink-0">
                <Puzzle size={20} className="text-pluto" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-star mb-1">Agent Extensibility</h3>
                <p className="text-star-dim">
                  Add custom commands for your specific AI agents. Pluto supports extensible agent configurations through the commands directory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Micro-Commits Work */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-star mb-6">How Micro-Commits Work</h2>
          <div className="p-6 rounded-lg bg-space-800 border border-space-600">
            <p className="text-star-dim mb-4 leading-relaxed">
              Each micro-commit captures:
            </p>
            <ul className="space-y-3 text-star-dim">
              <li className="flex items-start gap-3">
                <span className="font-mono text-pluto text-sm">session:</span>
                <span>Unique session ID for grouping related changes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-pluto text-sm">prompt:</span>
                <span>The user prompt or task being worked on</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-pluto text-sm">reason:</span>
                <span>Specific reason for this file change</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-pluto text-sm">touched:</span>
                <span>Files that were modified</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Integration */}
        <section>
          <h2 className="text-2xl font-semibold text-star mb-6">AI Agent Integration</h2>
          <p className="text-star-dim leading-relaxed mb-6">
            Pluto is designed to work seamlessly with AI coding agents. Currently supported:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-space-800 border border-space-600 flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-space-700 flex items-center justify-center text-pluto font-bold">
                C
              </div>
              <div>
                <h3 className="font-semibold text-star">Claude Code</h3>
                <p className="text-star-dim text-sm">Anthropic's CLI coding agent</p>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-space-800 border border-space-600 border-dashed flex items-center gap-4 opacity-60">
              <div className="w-10 h-10 rounded bg-space-700 flex items-center justify-center text-star-dim font-bold">
                +
              </div>
              <div>
                <h3 className="font-semibold text-star-dim">More coming soon</h3>
                <p className="text-star-dim text-sm">Extensible architecture</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
