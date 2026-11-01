import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 16 : -16,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -16 : 16,
  }),
}

export function Testimonials() {
  const [[activeIndex, direction], setActiveTestimonial] = useState<[number, number]>([0, 0])
  const testimonial = testimonials[activeIndex]

  const changeTestimonial = (newDirection: number) => {
    setActiveTestimonial(([current]) => {
      const nextIndex = (current + newDirection + testimonials.length) % testimonials.length
      return [nextIndex, newDirection]
    })
  }

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-inner">
        <SectionHeading eyebrow="Kind words" title="Testimonials" description="Feedback from collaborators on the experience and the work." />
        <figure aria-live="polite" className="testimonial-card">
          <Quote aria-hidden="true" className="testimonial-quote-icon" size={33} />
          <div style={{ minHeight: '140px', overflow: 'hidden' }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                animate="center"
                custom={direction}
                exit="exit"
                initial="enter"
                key={activeIndex}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                variants={slideVariants}
              >
                <blockquote className="testimonial-quote">“{testimonial.quote}”</blockquote>
                <figcaption className="testimonial-person">
                  <img alt="" height="56" loading="lazy" src={testimonial.image} width="56" />
                  <div><strong>{testimonial.name}</strong><span>{testimonial.role} · {testimonial.company}</span></div>
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="testimonial-controls">
            <motion.button
              aria-label="Previous testimonial"
              onClick={() => changeTestimonial(-1)}
              transition={{ duration: 0.15 }}
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <ChevronLeft size={18} />
            </motion.button>
            <span>{activeIndex + 1} / {testimonials.length}</span>
            <motion.button
              aria-label="Next testimonial"
              onClick={() => changeTestimonial(1)}
              transition={{ duration: 0.15 }}
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </figure>
      </div>
    </section>
  )
}
