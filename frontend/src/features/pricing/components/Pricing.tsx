import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { collaborationOptions } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

export function Pricing() {
  return (
    <section className="section pricing-section" id="approach">
      <div className="section-inner">
        <SectionHeading
          description="A simple process keeps the scope clear and the finished experience useful."
          eyebrow="A clear way to work"
          title="How I collaborate"
        />
        <div className="collaboration-grid">
          {collaborationOptions.map((option, index) => (
            <motion.article
              className="collaboration-item"
              initial={{ opacity: 0, y: 16 }}
              key={option.name}
              transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-40px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="collaboration-number">0{index + 1}</span>
              <h3>{option.name}</h3>
              <p>{option.detail}</p>
              <a href="#contact">Discuss a project <ArrowRight size={15} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
