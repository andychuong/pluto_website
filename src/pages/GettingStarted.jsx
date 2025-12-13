import CodeBlock from '../components/CodeBlock'

export default function GettingStarted() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-star mb-4">Getting Started</h1>
        <p className="text-xl text-star-dim mb-12">
          Get Pluto up and running in your project in under a minute.
        </p>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-star mb-4">Prerequisites</h2>
          <ul className="space-y-3 text-star-dim">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-pluto"></span>
              Node.js 18 or higher
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-pluto"></span>
              npm (comes with Node.js)
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-pluto"></span>
              Git repository (initialized)
            </li>
          </ul>
        </section>

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
            Once initialized, Pluto works automatically with your AI coding agents. Here are the main commands:
          </p>

          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-space-800 border border-space-600">
              <h3 className="font-mono text-pluto mb-2">pluto init</h3>
              <p className="text-star-dim text-sm">Initialize Pluto in your current project</p>
            </div>

            <div className="p-4 rounded-lg bg-space-800 border border-space-600">
              <h3 className="font-mono text-pluto mb-2">pluto list</h3>
              <p className="text-star-dim text-sm">Display all available commands</p>
            </div>

            <div className="p-4 rounded-lg bg-space-800 border border-space-600">
              <h3 className="font-mono text-pluto mb-2">pluto update</h3>
              <p className="text-star-dim text-sm">Update agents to the latest versions</p>
            </div>

            <div className="p-4 rounded-lg bg-space-800 border border-space-600">
              <h3 className="font-mono text-pluto mb-2">pluto update --branch [name]</h3>
              <p className="text-star-dim text-sm">Update from a specific branch</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-6 rounded-lg bg-space-800 border border-pluto/30">
          <h2 className="text-xl font-semibold text-star mb-3">Next Steps</h2>
          <p className="text-star-dim mb-4">
            Now that Pluto is set up, start a coding session with your AI agent. Every file change will be automatically tracked with micro-commits.
          </p>
          <p className="text-star-dim">
            When you're ready to ship, consolidate your micro-commits into clean, meaningful commits for your main branch.
          </p>
        </section>
      </div>
    </div>
  )
}
