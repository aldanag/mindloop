import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4'

export function HeroSection() {
  const [email, setEmail] = useState('')

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
      />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 pt-28 md:pt-32 pb-32 md:pb-40">
        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-foreground mb-6 max-w-5xl leading-tight"
        >
          Get{' '}
          <span className="font-serif italic font-normal">Inspired</span>{' '}
          with Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg max-w-xl mb-12 leading-relaxed"
          style={{ color: 'hsl(var(--hero-subtitle))', textShadow: '0 2px 24px rgba(0,0,0,0.9)' }}
        >
          A fictional newsletter platform built to explore dark UI systems,
          scroll-driven animation, and AI-assisted design.
        </motion.p>

        {/* Email subscribe form */}
        <motion.div
          {...fadeUp(0.3)}
          className="liquid-glass rounded-full p-2 max-w-lg w-full flex items-center gap-2"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm px-4 outline-none min-w-0"
          />
          <motion.button
            className="bg-foreground text-background rounded-full px-8 py-3 text-sm font-semibold tracking-widest whitespace-nowrap flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
