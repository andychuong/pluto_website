export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-space-800 border border-space-600 hover:border-pluto/30 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-space-700 flex items-center justify-center mb-4">
        <Icon size={24} className="text-pluto" />
      </div>
      <h3 className="text-lg font-semibold text-star mb-2">{title}</h3>
      <p className="text-star-dim leading-relaxed">{description}</p>
    </div>
  )
}
