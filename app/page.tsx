import { Suspense } from 'react'
import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import SocialProof from '@/components/sections/SocialProof'
import USPSection from '@/components/sections/USPSection'
import DemoVideoSection from '@/components/sections/DemoVideoSection'
import DeveloperSection from '@/components/sections/DeveloperSection'
import Footer from '@/components/sections/Footer'
import TimelineDemo from './components/sections/timeline-demo'
import SmoothScroll from './components/ui/SmoothScroll'

// Loading components for better UX
function HeroSkeleton() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <div className="w-64 h-8 bg-white/10 rounded mb-6 animate-pulse" />
      <div className="w-96 h-16 bg-white/10 rounded mb-6 animate-pulse" />
      <div className="w-80 h-6 bg-white/10 rounded mb-12 animate-pulse" />
      <div className="w-72 h-12 bg-white/10 rounded animate-pulse" />
    </div>
  )
}

function USPSkeleton() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-80 h-12 bg-gray-200 rounded mb-6 mx-auto animate-pulse" />
          <div className="w-96 h-6 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-8 bg-gray-100 rounded-2xl">
              <div className="w-12 h-12 bg-gray-200 rounded-xl mb-6 animate-pulse" />
              <div className="w-32 h-6 bg-gray-200 rounded mb-4 animate-pulse" />
              <div className="w-full h-16 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VideoSkeleton() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center mb-16">
        <div className="w-80 h-12 bg-white/10 rounded mb-6 mx-auto animate-pulse" />
        <div className="w-96 h-6 bg-white/10 rounded mx-auto animate-pulse" />
      </div>
      <div className="max-w-5xl w-full aspect-video bg-white/10 rounded-2xl animate-pulse" />
    </div>
  )
}

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-hidden">
        {/* Fully Transparent Header */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>

        <main className="">
          {/* Section 1: Hero - Pitch Black with Dense Dotted Grid + Blue Gradient */}
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection />
          </Suspense>

          {/* Section 3: USPs - Pure White (Clean, No Grid) */}
          <Suspense fallback={<USPSkeleton />}>
            <USPSection />
          </Suspense>
          {/* Section 2: Social Proof - Tool Integrations */}
          <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
            <SocialProof />
          </Suspense>
          {/* Section 4: Workflow Features - Interactive Split Screen */}
          <Suspense fallback={<div className="h-full relative" />}>
            <TimelineDemo />
          </Suspense>

          {/* Section 5: Demo Video - Pitch Black with Dense Dotted Grid + Blue Gradient */}
          <Suspense fallback={<VideoSkeleton />}>
            <DemoVideoSection />
          </Suspense>

          {/* Section 7: Developer Recruitment - Dark Background */}
          <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
            <DeveloperSection />
          </Suspense>

        </main>

        {/* Footer - Black */}
        <div className="bg-black">
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  )
}
