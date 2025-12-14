import { Link } from 'react-router-dom'
import { ArrowRight, AlertCircle, Users, Code } from 'lucide-react'

export default function Overview() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-star mb-6">The Git Workflow for AI-First Teams</h1>
          <p className="text-xl text-star-dim max-w-3xl mx-auto">
            Shipping code at AI speed breaks traditional git workflows. Pluto fixes that.
          </p>
        </div>

        {/* The Challenge - Visual Cards */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-star mb-8 text-center">The AI Collaboration Problem</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg bg-space-800/50 border border-space-600">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pluto/20 flex items-center justify-center flex-shrink-0">
                  <Code size={20} className="text-pluto" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-star mb-2">AI Moves Fast</h3>
                  <p className="text-star-dim">Your AI spots a bug while building a feature. Fix it? Sure. Then another. And another. One commit touches 47 files.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-space-800/50 border border-space-600">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pluto/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={20} className="text-pluto" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-star mb-2">Reviews Break Down</h3>
                  <p className="text-star-dim">Your teammate opens the PR. Mixed concerns, unclear changes, impossible to review. What was this supposed to do again?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-br from-space-800 to-space-700 border border-pluto/30 text-center">
            <p className="text-2xl text-star font-semibold mb-2">
              Shipping faster, collaborating worse.
            </p>
            <p className="text-star-dim">Traditional git workflows weren't built for AI speed.</p>
          </div>
        </section>

        {/* The Solution - Focus on unique value */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-star mb-4">The Pluto Approach</h2>
            <p className="text-xl text-star-dim max-w-3xl mx-auto">
              Capture everything, organize intelligently, ship confidently
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-lg bg-space-800/50 border border-pluto/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-pluto/20 flex items-center justify-center">
                  <Users size={24} className="text-pluto" />
                </div>
                <h3 className="text-2xl font-semibold text-star">Never Lose Context</h3>
              </div>
              <p className="text-star-dim text-lg leading-relaxed">
                Every fiber captures what changed and why. Your team can trace every decision from micro-commit to final PR. No more "what was I thinking?" moments.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-space-800/50 border border-pluto/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-pluto/20 flex items-center justify-center">
                  <Code size={24} className="text-pluto" />
                </div>
                <h3 className="text-2xl font-semibold text-star">Built for AI Speed</h3>
              </div>
              <p className="text-star-dim text-lg leading-relaxed">
                Traditional git workflows assume humans write every line. Pluto embraces AI's burst-driven development style while keeping your history clean and reviewable.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-br from-space-800 to-space-700 border border-pluto/30 text-center">
            <p className="text-2xl text-star font-semibold mb-3">
              The result? Move fast without breaking collaboration.
            </p>
            <p className="text-star-dim text-lg">Ship at AI speed with human-readable history.</p>
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
