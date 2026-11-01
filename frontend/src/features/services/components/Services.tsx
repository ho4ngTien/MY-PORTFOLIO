import { motion } from 'framer-motion'
import { Blocks, CodeXml, PanelsTopLeft, WandSparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

const serviceIcons = [PanelsTopLeft, Blocks, CodeXml, WandSparkles]

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-inner">
        <SectionHeading
          description="Technical capabilities across full-stack application development, robust backend systems, and scalable data workflows."
          eyebrow="How I can help"
          title="Services"
        />
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <motion.article
                className="service-item"
                initial={{ opacity: 0, y: 18 }}
                key={service.title}
                transition={{ duration: 0.3, delay: index * 0.08, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="service-icon"><Icon size={25} strokeWidth={1.7} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="service-link" to={`/services/${service.slug}`}>Service details <span aria-hidden="true">↗</span></Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
