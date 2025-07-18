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
    title: "Trapped on a Hard Drive",
    description: "Your team's work is stalled by manual uploads and files trapped on one person's computer.",
    image: "assets/LoneHdd.png"
  },
  {
    icon: Cloud,
    title: "The One-Way Workflow",
    description: "Work happens in sequence—everyone waits their turn, wasting time and delaying delivery.",
    image: "assets/SequentialWorkflow.png"
  },
  {
    icon: MessageCircle,
    title: "The Graveyard of 'Finals'",
    description: "Without versioning, your project folder is a maze of confusing files—no history, no safety net, no certainty.",
    image: "assets/Graveyard.png"
  },
  {
    icon: Users,
    title: "The Chaos of Comments",
    description: "Feedback is scattered across emails, chats, and docs—making it easy to miss and hard to manage.",
    image: "assets/Communication.png"
  },
]

export const COMPANY_INFO = {
  name: 'rkivee',
  tagline: 'Edit. Collaborate. Archive.',
  description: 'A media-collab platform that tracks every cut, keeps assets in cloud lockstep, and makes team feedback feel like a breeze.',
  earlyAccess: 'Early access coming Q4 2025',
  signupCount: '10+ creators already signed up'
} 