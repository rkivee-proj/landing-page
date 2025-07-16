import { 
  Video, 
  Users, 
  GitBranch, 
  Clock, 
  Layers, 
  Share2,
  Cloud,
  MessageCircle,
  Archive
} from 'lucide-react'
import type { Feature } from '@/types'

export const FEATURES: Feature[] = [
  {
    icon: Video,
    title: "Track Every Cut",
    description: "Monitor every edit, revision, and creative decision in your video projects with precision timeline tracking."
  },
  {
    icon: Cloud,
    title: "Cloud Asset Lockstep",
    description: "Keep all your media assets synchronized across your team in real-time with secure cloud storage."
  },
  {
    icon: MessageCircle,
    title: "Breeze-Like Feedback",
    description: "Make team feedback effortless with contextual comments, annotations, and streamlined approval workflows."
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Work together in real-time with your creative team, seeing changes and updates as they happen."
  },
  {
    icon: Archive,
    title: "Smart Archiving",
    description: "Automatically organize and archive your project versions, assets, and creative iterations for easy retrieval."
  },
  {
    icon: Layers,
    title: "Asset Management",
    description: "Organize, version, and share video assets, clips, and resources across all your projects effortlessly."
  }
]

export const COMPANY_INFO = {
  name: 'rkivee',
  tagline: 'Edit. Collaborate. Archive.',
  description: 'A media-collab platform that tracks every cut, keeps assets in cloud lockstep, and makes team feedback feel like a breeze.',
  earlyAccess: 'Early access coming Q4 2025',
  signupCount: '10+ creators already signed up'
} 