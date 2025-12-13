import { Link } from 'react-router-dom'
import { GitBranch, History, Users, AlertTriangle, Zap, ArrowRight } from 'lucide-react'

export default function Overview() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-star mb-4">The Story Behind Pluto</h1>
        <p className="text-xl text-star-dim mb-16">
          Building the git workflow for AI-first teams.
        </p>

        {/* Our Story Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-star mb-6">Our Story</h2>
          <div className="space-y-4 text-star-dim leading-relaxed">
            <p>
              For the last 10 weeks, we've been growing our AI skills and refining our workflows.
              Individually, this has dramatically increased our ability to ship code.
            </p>
            <p>
              However, when you begin to work in teams, we found that moving fast comes at a cost.
            </p>
            <div className="p-6 rounded-lg bg-space-800 border border-space-600 my-6">
              <p className="text-star italic">
                "AI software engineers tend to work beyond the scope of a given feature. When AI can
                fix a small bug in 3 seconds, there's a small voice in your head that says <span className="text-pluto">fix it now</span>.
                One additional fix becomes two, two fixes become three, and soon the scope of your
                commit becomes polluted."
              </p>
            </div>
            <p>
              We realized that our individual speed was creating team-wide chaos. Something had to change.
            </p>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-star mb-6">The Problem</h2>
          <div className="p-6 rounded-lg bg-space-800 border border-amber-500/30 mb-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={24} />
              <p className="text-star-dim leading-relaxed">
                <span className="text-star font-semibold">Current development practices aren't built for AI-first development.</span> AI
                developers work in silos, independently shipping features at incredible speed. We believe
                collaboration between humans is still valuable—but there's no good way for AI-first
                developers to work together in teams.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-star mb-4">The Current State</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-space-800 border border-space-600">
              <div className="flex items-center gap-3 mb-2">
                <Users size={20} className="text-star-dim" />
                <span className="font-medium text-star">Siloed Development</span>
              </div>
              <p className="text-star-dim text-sm">
                Teams work on features independently with minimal coordination
              </p>
            </div>
            <div className="p-4 rounded-lg bg-space-800 border border-space-600">
              <div className="flex items-center gap-3 mb-2">
                <GitBranch size={20} className="text-star-dim" />
                <span className="font-medium text-star">Microservice Architecture</span>
              </div>
              <p className="text-star-dim text-sm">
                Separate services reduce conflicts but also reduce collaboration
              </p>
            </div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-star mb-6">Our Solution</h2>
          <p className="text-star-dim mb-8 leading-relaxed">
            <span className="text-star font-semibold">Pluto</span> is a git workflow tool that integrates
            with AI coding agents. It automatically commits after every file change for granular tracking,
            then consolidates these micro-commits into clean, informative commit messages.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-space-800 border border-space-600">
              <div className="w-12 h-12 rounded-lg bg-space-700 flex items-center justify-center mb-4">
                <History size={24} className="text-pluto" />
              </div>
              <h3 className="text-lg font-semibold text-star mb-2">Micro-Commits</h3>
              <p className="text-star-dim text-sm leading-relaxed">
                Every file change is automatically committed with context about what changed and why.
                Never lose track of your AI agent's work.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-space-800 border border-space-600">
              <div className="w-12 h-12 rounded-lg bg-space-700 flex items-center justify-center mb-4">
                <GitBranch size={24} className="text-pluto" />
              </div>
              <h3 className="text-lg font-semibold text-star mb-2">Clean Consolidation</h3>
              <p className="text-star-dim text-sm leading-relaxed">
                When you're ready, consolidate micro-commits into meaningful commits. Keep your
                main branch history readable for your team.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-space-800 border border-space-600">
              <div className="w-12 h-12 rounded-lg bg-space-700 flex items-center justify-center mb-4">
                <Zap size={24} className="text-pluto" />
              </div>
              <h3 className="text-lg font-semibold text-star mb-2">Seamless Integration</h3>
              <p className="text-star-dim text-sm leading-relaxed">
                Install Pluto in your repository and let your AI agent handle git operations
                seamlessly. No workflow changes required.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-space-800 border border-space-600">
              <div className="w-12 h-12 rounded-lg bg-space-700 flex items-center justify-center mb-4">
                <Users size={24} className="text-pluto" />
              </div>
              <h3 className="text-lg font-semibold text-star mb-2">Team Visibility</h3>
              <p className="text-star-dim text-sm leading-relaxed">
                Give your team full visibility into AI-assisted changes. Review, understand,
                and collaborate effectively.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="p-8 rounded-lg bg-gradient-to-r from-space-800 to-space-700 border border-space-600">
            <h2 className="text-2xl font-semibold text-star mb-4">Ready to Get Started?</h2>
            <p className="text-star-dim mb-6 max-w-md mx-auto">
              Set up Pluto in your repository in minutes and transform how your team works with AI.
            </p>
            <Link
              to="/getting-started"
              className="inline-flex items-center gap-2 bg-pluto hover:bg-pluto-light text-space-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
