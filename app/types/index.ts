import { Variants } from 'framer-motion'

export interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
  image: string
}

export interface WaitlistFormData {
  email: string
}

export type AnimationVariants = Variants 