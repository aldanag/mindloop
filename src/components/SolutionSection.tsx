import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4'

const features = [
  {
    title: 'Curated Feed',
    description:
      'A hand-tuned stream of voices worth your time — no engagement bait, no sponsored noise, just signal.',
  },
  {
    title: 'Writer Tools',
    description:
      'Write, publish and understand your readers from one place. Analytics that tell you what resonated, not just what got clicked.',
  },
  {
    title: 'Community',
    description:
      'Conversations between people who actually read. Real exchange between writers and readers, not just reactions.',
  },
  {
    title: 'Distribution',
    description:
      'Your writing, beyond your existing list. Smart discovery that connects your best work with the right readers.',
  },
]

export function SolutionSection() {
  return (
    <section className="py-32 md:py-44 border-t border-border/30 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          {...fadeUp(0)}
          className="text-xs tracking-[3px] uppercase text-muted-foreground mb-6"
        >
          SOLUTION
        </motion.p>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-medium tracking-[-1.5px] text-foreground mb-16 max-w-2xl leading-tight"
        >
          The platform for{' '}
          <span className="font-serif italic font-normal">meaningful</span>{' '}
          content
        </motion.h2>

        {/* Video */}
        <motion.div {...fadeUp(0.2)} className="mb-16">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl aspect-[3/1] object-cover"
            src={VIDEO_URL}
          />
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div key={feature.title} {...fadeUp(0.1 + i * 0.08)}>
              <h3 className="font-semibold text-base text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
