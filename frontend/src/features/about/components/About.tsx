import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '@/shared/components'

const technologies = [
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'Docker',
  'React',
  'TypeScript',
  'Data Pipelines',
  'Tailwind CSS',
]

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-inner">
        <SectionHeading
          description="A software engineer building reliable end-to-end applications with a long-term focus on Data Engineering."
          eyebrow="A little about me"
          title="About"
        />
        <div className="about-grid">
          <motion.div
            aria-label="Hoàng Tiến, software engineer"
            className="about-visual"
            initial={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              alt="Hoàng Tiến"
              className="about-visual-photo"
              height="1356"
              src="/images/profile-img.png"
              width="1159"
            />
          </motion.div>
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3>Full-Stack Developer · Aspiring Data Engineer</h3>
            <p>
              I am a Computer Science student at the University of Transport Ho Chi Minh City with a strong foundation across both Frontend and Backend Development. Right from the start of university, my study has embraced end-to-end system thinking rather than client-side interfaces alone.
            </p>
            <p>
              I build complete web applications from intuitive interfaces to resilient server-side services, database modeling, and containerized deployment with <strong>React, TypeScript, Java, Spring Boot, PostgreSQL, and Docker</strong>.
            </p>
            <p>
              Driven by architectural curiosity, my long-term ambition is in <strong>Data Engineering</strong>—designing scalable data pipelines, efficient data processing workflows, and robust Data Warehouses by leveraging my solid Software Engineering background.
            </p>
            <div className="about-details">
              <p><Check size={16} /><span><strong>Location:</strong> Ho Chi Minh City, Vietnam</span></p>
              <p><Check size={16} /><span><strong>Core Stack:</strong> React, Spring Boot, PostgreSQL, Docker</span></p>
              <p><Check size={16} /><span><strong>Focus:</strong> Full-Stack & Scalable Data Systems</span></p>
              <p><Check size={16} /><span><strong>Education:</strong> Computer Science</span></p>
            </div>
            <a className="text-link" href="#resume">More about my experience & education <ArrowRight size={16} /></a>
            <div aria-label="Technologies" className="tech-list">
              {technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
