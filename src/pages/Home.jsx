import { Link } from 'react-router-dom'
import { GitCommit, Layers, Zap, Terminal } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import FeatureCard from '../components/FeatureCard'

// Twinkling stars with randomized positions and timing
const twinklingStars = [
  { top: '8%', left: '15%', duration: '4s', delay: '0s' },
  { top: '12%', left: '85%', duration: '3s', delay: '1s' },
  { top: '25%', left: '10%', duration: '5s', delay: '0.5s' },
  { top: '18%', left: '70%', duration: '3.5s', delay: '2s' },
  { top: '35%', left: '92%', duration: '4s', delay: '1.5s' },
  { top: '45%', left: '5%', duration: '3s', delay: '0.8s' },
  { top: '55%', left: '88%', duration: '4.5s', delay: '2.5s' },
  { top: '65%', left: '20%', duration: '3.5s', delay: '1.2s' },
  { top: '75%', left: '78%', duration: '4s', delay: '0.3s' },
  { top: '85%', left: '45%', duration: '3s', delay: '1.8s' },
]

const features = [
  {
    icon: GitCommit,
    title: 'Micro-Commits',
    description: 'Automatically commits after every file change for granular tracking of AI agent work.',
  },
  {
    icon: Layers,
    title: 'Smart Consolidation',
    description: 'Consolidates micro-commits into clean, informative commit messages when you\'re ready.',
  },
  {
    icon: Zap,
    title: 'AI Agent Integration',
    description: 'Seamlessly integrates with AI coding agents like Claude Code for enhanced workflows.',
  },
  {
    icon: Terminal,
    title: 'Extensible Commands',
    description: 'Add custom agent commands to fit your specific workflow needs.',
  },
]

export default function Home() {
  return (
    <div className="stars-bg min-h-screen">
      {/* Twinkling stars */}
      {twinklingStars.map((star, i) => (
        <div
          key={i}
          className="twinkle"
          style={{
            top: star.top,
            left: star.left,
            '--duration': star.duration,
            '--delay': star.delay,
          }}
        />
      ))}

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-star mb-6 leading-tight">
            Track Every Change.<br />
            <span className="text-pluto">Ship Clean Commits.</span>
          </h1>
          <p className="text-xl text-star-dim mb-10 max-w-2xl mx-auto leading-relaxed">
            Pluto automatically micro-commits your AI agent's file changes, then consolidates them into meaningful commits. Never lose work, always ship clean history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/getting-started"
              className="btn-primary px-8 py-3 rounded-lg font-semibold text-center"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/andychuong/pluto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-semibold border border-space-600 text-star hover:border-pluto/50 transition-colors text-center"
            >
              View on GitHub
            </a>
          </div>
          <div className="max-w-xl mx-auto">
            <CodeBlock>
              curl -fsSL https://raw.githubusercontent.com/andychuong/pluto/main/install.sh | bash
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-space-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-star text-center mb-4">
            Built for AI-First Development Teams
          </h2>
          <p className="text-star-dim text-center mb-12 max-w-2xl mx-auto">
            When AI agents write code, changes happen fast. Pluto keeps up.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-star text-center mb-12">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-pluto text-space-900 flex items-center justify-center font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-star mb-2">Initialize in your project</h3>
                <p className="text-star-dim mb-3">Run pluto init to set up tracking in your repository.</p>
                <CodeBlock>pluto init</CodeBlock>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-pluto text-space-900 flex items-center justify-center font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-star mb-2">Work with your AI agent</h3>
                <p className="text-star-dim">Every file change gets automatically committed with full context. No work is ever lost.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-pluto text-space-900 flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-star mb-2">Consolidate when ready</h3>
                <p className="text-star-dim">Squash micro-commits into clean, meaningful commits for your main branch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-space-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-star mb-4">
            Ready to streamline your AI workflow?
          </h2>
          <p className="text-star-dim mb-8">
            Get started with Pluto in under a minute.
          </p>
          <Link
            to="/getting-started"
            className="btn-primary px-8 py-3 rounded-lg font-semibold inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
