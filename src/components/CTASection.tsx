import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Hls from 'hls.js'
import { fadeUp } from '@/lib/animations'

const HLS_URL =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls({ autoStartLoad: true })
      hls.loadSource(HLS_URL)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
      return () => hls.destroy()
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS
      video.src = HLS_URL
      video.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden">
      {/* HLS background video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Concentric circles logo */}
        <motion.div
          {...fadeUp(0)}
          className="w-10 h-10 rounded-full border-2 border-foreground/60 flex items-center justify-center mb-8 flex-shrink-0"
        >
          <div className="w-5 h-5 rounded-full border border-foreground/60" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-medium tracking-[-1.5px] text-foreground mb-4 leading-tight"
        >
          Start Your{' '}
          <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed"
        >
          For the reader tired of scrolling past noise.
          For the writer who's ready to be found.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <motion.button
            className="bg-foreground text-background rounded-lg px-8 py-3.5 font-semibold text-sm cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe Now
          </motion.button>
          <motion.button
            className="liquid-glass rounded-lg px-8 py-3.5 text-foreground font-semibold text-sm cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
