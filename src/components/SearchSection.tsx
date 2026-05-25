import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const platforms = [
  {
    icon: '/assets/icon-chatgpt.svg',
    name: 'ChatGPT',
    description:
      "The first stop for millions of daily questions. If your voice isn't there, someone else's already is.",
  },
  {
    icon: '/assets/icon-perplexity.svg',
    name: 'Perplexity',
    description:
      'Real-time answers with cited sources — replacing the search bar for anyone who wants depth over a list of links.',
  },
  {
    icon: '/assets/icon-google.svg',
    name: 'Google AI',
    description:
      'Search is becoming a conversation. Visibility now means being part of the answer, not just appearing in results.',
  },
]

export function SearchSection() {
  return (
    <section className="text-center px-4 md:px-8 pt-52 md:pt-64 pb-6 md:pb-9">
      {/* Heading */}
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-foreground mb-6 max-w-4xl mx-auto leading-tight"
      >
        Search has{' '}
        <span className="font-serif italic font-normal">changed.</span> Have
        you?
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.1)}
        className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24 leading-relaxed"
      >
        The way people discover information has fundamentally shifted.
        AI answers questions before anyone ever reaches your page — and that changes everything.
      </motion.p>

      {/* Platform cards */}
      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-5xl mx-auto">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(i * 0.1)}
            className="flex flex-col items-center gap-4"
          >
            <img
              src={platform.icon}
              alt={platform.name}
              className="w-[200px] h-[200px] object-contain"
            />
            <h3 className="font-semibold text-base text-foreground">
              {platform.name}
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.p
        {...fadeUp(0.4)}
        className="text-muted-foreground text-sm text-center"
      >
        If you don't shape the answer, someone else will.
      </motion.p>
    </section>
  )
}
