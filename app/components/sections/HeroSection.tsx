'use client'

import { motion } from 'framer-motion'
import { Star, Users, ArrowDown } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import WaitlistForm from '@/components/ui/WaitlistForm'
import ScrollIndicator from '../ui/ScrollIndicator'
import { useEffect } from 'react'
import Mask from '../ui/Mask'

export default function HeroSection() {

  return (
    <section className="min-h-screen relative overflow-hidden text-dark-text">
      {/* Background Video */}
      <div className="absolute inset-0 z-20">
        <Mask/>
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
        >
          <source src="/bg.mp4" type="video/mp4" />
          <source src="/bg.webm" type="video/webm" /> */}
        {/* Fallback image if video doesn't load */}
        {/* <img
          src="/bg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        {/* </video> */}
      </div>

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-dark-canvas/30" />

      
    </section>
  )
} 