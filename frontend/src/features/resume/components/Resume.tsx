import { motion } from 'framer-motion'
import { GraduationCap, BriefcaseBusiness } from 'lucide-react'
import { educationItems, experienceItems } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

export function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="section-inner">
        <SectionHeading
          description="Solid academic foundations in Computer Science paired with hands-on full-stack and systems engineering."
          eyebrow="The path so far"
          title="Resume"
        />
        <div className="resume-grid">
          <motion.div
            className="resume-column"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3><BriefcaseBusiness size={19} /> Experience</h3>
            <div className="timeline">
              {experienceItems.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <h4>{item.title}</h4>
                  <span className="timeline-meta">{item.year}</span>
                  <p><em>{item.company}</em></p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="resume-column"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3><GraduationCap size={20} /> Education</h3>
            <div className="timeline">
              {educationItems.map((item) => (
                <article className="timeline-item" key={item.degree}>
                  <h4>{item.degree}</h4>
                  <span className="timeline-meta">{item.year}</span>
                  <p><em>{item.institution}</em></p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
