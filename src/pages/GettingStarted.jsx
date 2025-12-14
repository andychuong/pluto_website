import CodeBlock from '../components/CodeBlock'

export default function GettingStarted() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-star mb-4">Getting Started</h1>
        <p className="text-xl text-star-dim mb-12">
          Get Pluto up and running in your project in under a minute.
        </p>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-star mb-4">Installation</h2>
          <p className="text-star-dim mb-4">
            Install Pluto globally using the install script:
          </p>
          <CodeBlock>
            curl -fsSL https://raw.githubusercontent.com/andychuong/pluto/main/install.sh | bash
          </CodeBlock>
          <p className="text-star-dim mt-4 text-sm">
            To install from a specific branch, modify the URL accordingly.
          </p>
        </section>

        {/* Initialize */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-star mb-4">Initialize in Your Project</h2>
          <p className="text-star-dim mb-4">
            Navigate to your project directory and initialize Pluto:
          </p>
          <CodeBlock>pluto init</CodeBlock>
          <p className="text-star-dim mt-4">
            This sets up the necessary configuration files and hooks to start tracking your changes.
          </p>
        </section>

        {/* Basic Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-star mb-4">Basic Usage</h2>
          <p className="text-star-dim mb-6">
            Once initialized, Pluto integrates with your AI coding agent through slash commands. Here's the typical workflow:
          </p>

          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-space-800 border border-space-600">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-pluto font-bold">1</span>
                <h3 className="font-mono text-pluto">/pluto-start</h3>
              </div>
              <p className="text-star-dim text-sm">Begin tracking your work. As you code, Pluto automatically creates micro-commits called <span className="text-pluto font-semibold">fibers</span>—capturing every change with full context.</p>
            </div>

            <div className="p-4 rounded-lg bg-space-800 border border-space-600">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-pluto font-bold">2</span>
                <h3 className="font-mono text-pluto">/pluto-spin</h3>
              </div>
              <p className="text-star-dim text-sm">Spin your fibers into <span className="text-pluto font-semibold">threads</span>. Groups related micro-commits into meaningful, well-documented commits ready for your team.</p>
            </div>

            <div className="p-4 rounded-lg bg-space-800 border border-space-600">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-pluto font-bold">3</span>
                <h3 className="font-mono text-pluto">/pluto-weave</h3>
              </div>
              <p className="text-star-dim text-sm">Weave everything together for your PR. Pulls the latest from your target branch and prepares your threads for seamless integration.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
