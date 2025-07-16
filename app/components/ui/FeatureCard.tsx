import type { Feature } from '@/types'

interface FeatureCardProps {
  feature: Feature
  index: number
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div className="p-8 backdrop-blur-sm rounded-2xl transition-all duration-300 bg-light-primary border border-light-border hover:border-accent-primary">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-accent-primary">
        <feature.icon size={24} className="text-accent-text-on-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-light-text">
        {feature.title}
      </h3>
      <p className="leading-relaxed text-light-text-secondary">
        {feature.description}
      </p>
    </div>
  )
} 