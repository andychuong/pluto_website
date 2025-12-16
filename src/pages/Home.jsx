import { Link } from 'react-router-dom'
import { Sparkles, LinkIcon, PackageCheck } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import FeatureCard from '../components/FeatureCard'
import { useMemo } from 'react'

// Generate random thread parameters
const generateThreadKnots = (count) => {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 45}%`,
    left: `${Math.random() * 95}%`,
    duration: `${3 + Math.random() * 1.5}s`,
    delay: `${Math.random() * 2}s`,
  }))
}

const generateHorizontalThreads = (count) => {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 45}%`,
    left: `${Math.random() * 70}%`,
    duration: `${6 + Math.random() * 4}s`,
    delay: `${Math.random() * 5}s`,
    color: Math.random() > 0.5 ? 'cream' : 'copper',
    width: `${140 + Math.random() * 85}px`,
  }))
}

const generateVerticalThreads = (count) => {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 95}%`,
    top: `${Math.random() * 15}%`,
    duration: `${8 + Math.random() * 3}s`,
    delay: `${Math.random() * 5}s`,
    color: Math.random() > 0.5 ? 'cream' : 'copper',
    height: `${155 + Math.random() * 80}px`,
  }))
}

const features = [
  {
    icon: Sparkles,
    title: 'Fibers: Automatic Tracking',
    description: 'Every code change becomes a fiber—micro-commits that capture what changed and why, automatically.',
  },
  {
    icon: LinkIcon,
    title: 'Threads: Smart Grouping',
    description: 'Spin fibers into threads—meaningful commits that tell a clear story for your team.',
  },
  {
    icon: PackageCheck,
    title: 'Weave: PR Ready',
    description: 'Weave everything together for deployment. Sync with your target branch, conflict-free.',
  },
]

export default function Home() {
  // Generate threads once on mount
  const threadKnots = useMemo(() => generateThreadKnots(3), [])
  const horizontalThreads = useMemo(() => generateHorizontalThreads(3), [])
  const verticalThreads = useMemo(() => generateVerticalThreads(3), [])

  return (
    <div className="stars-bg min-h-screen">
      {/* Thread knots */}
      {threadKnots.map((knot, i) => (
        <div
          key={i}
          className="twinkle"
          style={{
            top: knot.top,
            left: knot.left,
            '--duration': knot.duration,
            '--delay': knot.delay,
          }}
        />
      ))}

      {/* Horizontal weaving threads */}
      {horizontalThreads.map((thread, i) => (
        <div
          key={`h-thread-${i}`}
          className="shooting-star"
          data-direction="horizontal"
          data-color={thread.color}
          style={{
            top: thread.top,
            left: thread.left,
            width: thread.width,
            '--duration': thread.duration,
            '--delay': thread.delay,
            '--gradient-direction': '90deg',
          }}
        />
      ))}

      {/* Vertical weaving threads */}
      {verticalThreads.map((thread, i) => (
        <div
          key={`v-thread-${i}`}
          className="shooting-star"
          data-direction="vertical"
          data-color={thread.color}
          style={{
            top: thread.top,
            left: thread.left,
            height: thread.height,
            '--duration': thread.duration,
            '--delay': thread.delay,
            '--gradient-direction': '180deg',
          }}
        />
      ))}

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-star mb-6 leading-tight">
            The Git Workflow for<br />
            <span className="text-pluto">AI-First Teams</span>
          </h1>
          <p className="text-xl text-star-dim mb-10 max-w-2xl mx-auto leading-relaxed">
            Weave your development process—from individual code changes to production-ready PRs.<br />
            Never lose context, always ship clean history.
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
              curl -fsSL plutoai.dev/install | bash
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-space-800/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-star text-center mb-4">
            From Fibers to Threads to Deployment
          </h2>
          <p className="text-star-dim text-center mb-12 max-w-2xl mx-auto">
            AI moves fast. Pluto captures every change, then weaves it into clean, reviewable commits.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 relative z-10 bg-space-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-star text-center mb-12">
            Simple Workflow
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-pluto text-space-900 flex items-center justify-center font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-star mb-2">/pluto-start</h3>
                <p className="text-star-dim">Begin tracking. Pluto automatically creates fibers as you code—capturing every change with full context.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-pluto text-space-900 flex items-center justify-center font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-star mb-2">/pluto-spin</h3>
                <p className="text-star-dim">Spin fibers into threads—meaningful commits that tell a clear story for your team.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-pluto text-space-900 flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-star mb-2">/pluto-weave</h3>
                <p className="text-star-dim">Weave everything together. Pull the latest from your target branch and prepare for PR—conflict-free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-space-800/50 relative z-10">
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
