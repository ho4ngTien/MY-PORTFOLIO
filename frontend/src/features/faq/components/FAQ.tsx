import { motion } from 'framer-motion'
import { faqs } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

export function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-inner">
        <SectionHeading
          description="A little more detail on the work, tools, and process."
          eyebrow="A few answers"
          title="Frequently asked questions"
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.details
              className="faq-item"
              initial={{ opacity: 0, y: 14 }}
              key={faq.question}
              open={index === 0}
              transition={{ duration: 0.25, delay: index * 0.06, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-30px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}
