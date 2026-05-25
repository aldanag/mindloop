import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4'

const P1_HIGHLIGHTED = new Set(['curiosity', 'meets', 'clarity'])

interface WordSpanProps {
  word: string
  progress: MotionValue<number>
  start: number
  end: number
  highlighted?: boolean
}

function WordSpan({ word, progress, start, end, highlighted = false }: WordSpanProps) {
  const opacity = useTransform(progress, [start, end], [0.15, 1])
  return (
    <motion.span
      style={{
        opacity,
        color: highlighted
          ? 'hsl(var(--foreground))'
          : 'hsl(var(--hero-subtitle))',
      }}
      className="inline"
    >
      {word}{' '}
    </motion.span>
  )
}

interface ScrollRevealProps {
  text: string
  className?: string
  progress: MotionValue<number>
  startOffset: number
  totalWords: number
  highlightedSet?: Set<string>
}

function ScrollReveal({
  text,
  className,
  progress,
  startOffset,
  totalWords,
  highlightedSet,
}: ScrollRevealProps) {
  const words = text.split(' ')
  return (
    <p className={className}>
      {words.map((word, i) => {
        const globalI = startOffset + i
        const start = Math.max(0, globalI / totalWords - 0.02)
        const end = Math.min(1, (globalI + 6) / totalWords)
        const clean = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
        return (
          <WordSpan
            key={i}
            word={word}
            progress={progress}
            start={start}
            end={end}
            highlighted={highlightedSet?.has(clean)}
          />
        )
      })}
    </p>
  )
}

const P1 =
  "We're imagining a space where curiosity meets clarity — where readers find writing that actually moves them, and writers discover the reach their work has always deserved."
const P2 =
  'A platform where content, community and intention flow together — less algorithm, less noise, more of the writing that makes you stop and think.'

export function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 25%'],
  })

  const words1 = P1.split(' ')
  const words2 = P2.split(' ')
  const totalWords = words1.length + words2.length

  return (
    <section className="pt-0 pb-32 md:pb-44 px-4 md:px-8">
      {/* Video */}
      <div className="flex justify-center mb-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[800px] aspect-square object-cover rounded-2xl"
          src={VIDEO_URL}
        />
      </div>

      {/* Scroll-driven word reveal */}
      <div ref={containerRef} className="max-w-4xl mx-auto text-center">
        <ScrollReveal
          text={P1}
          className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight"
          progress={scrollYProgress}
          startOffset={0}
          totalWords={totalWords}
          highlightedSet={P1_HIGHLIGHTED}
        />
        <ScrollReveal
          text={P2}
          className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-snug"
          progress={scrollYProgress}
          startOffset={words1.length}
          totalWords={totalWords}
        />
      </div>
    </section>
  )
}
