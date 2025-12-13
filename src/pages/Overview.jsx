import { Link } from 'react-router-dom'
import { GitBranch, History, Zap, Users, ArrowRight } from 'lucide-react'

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
          <div className="space-y-6 text-lg text-star-dim leading-relaxed">
            <p>
              For the last 10 weeks, we've been deep in the trenches—learning to code with AI,
              refining our workflows, and shipping faster than we ever thought possible.
              Individually, we became <span className="text-star">machines</span>.
            </p>
            <p>
              Then we tried working as a team.
            </p>
            <p>
              Turns out, when everyone's moving at AI speed, things get messy. Fast.
            </p>
            <p>
              Here's what happens: you're building a feature, and your AI spots a small bug nearby.
              Three seconds to fix it. <span className="text-pluto italic">"Why not?"</span> you think.
              So you fix it. Then you notice another thing. And another. Before you know it, your
              "simple feature commit" touches 47 files across 12 different concerns.
            </p>
            <p>
              Your teammate opens a PR and has no idea what they're looking at.
            </p>
            <p className="text-star font-medium">
              We were shipping code faster than ever—but collaborating worse than ever.
            </p>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-star mb-6">The Problem</h2>
          <div className="space-y-6 text-lg text-star-dim leading-relaxed">
            <p>
              The tools we use every day—Git, GitHub, the PR workflow—were built for a different era.
              An era where humans typed every line, changes were deliberate, and commits were
              <span className="text-star"> meaningful</span>.
            </p>
            <p>
              But AI-first development is different. Changes happen in bursts. Context switches are instant.
              The line between "fixing this bug" and "refactoring that module" blurs in seconds.
            </p>
            <p>
              Most teams respond by retreating into silos. Microservices. Feature flags.
              Separate repos. <span className="text-star italic">"Just stay out of each other's way."</span>
            </p>
            <p>
              But we think that's giving up on something important. We still believe in collaboration.
              In code review. In teammates who understand what you're building and why.
            </p>
            <p className="text-star font-medium">
              There had to be a better way.
            </p>
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
