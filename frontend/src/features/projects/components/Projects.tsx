import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

const filters = ['All', 'Frontend', 'Full Stack', 'Product']

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="section projects-section" id="projects">
      <div className="section-inner">
        <SectionHeading
          description="Selected projects demonstrating end-to-end full-stack architectures, practical systems, and data workflows."
          eyebrow="Selected work"
          title="Portfolio"
        />
        <div aria-label="Filter projects" className="project-filters" role="group">
          {filters.map((filter) => (
            <motion.button
              aria-pressed={activeFilter === filter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              transition={{ duration: 0.15 }}
              type="button"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
        <motion.div aria-live="polite" className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                animate={{ opacity: 1, scale: 1 }}
                className="project-card"
                exit={{ opacity: 0, scale: 0.96 }}
                initial={{ opacity: 0, scale: 0.96 }}
                key={project.slug}
                layout
                transition={{
                  duration: 0.22,
                  ease: 'easeOut',
                  layout: { duration: 0.25, ease: 'easeOut' },
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link aria-label={`View details for ${project.title}`} className="project-image" to={`/portfolio/${project.slug}`}>
                  <img alt={`${project.title} project preview`} height="675" loading="lazy" src={project.image} width="1200" />
                  <span><ExternalLink size={17} /></span>
                </Link>
                <div className="project-info">
                  <div className="project-meta"><span>{project.label}</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tech.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <div className="project-actions">
                    <Link className="project-link" to={`/portfolio/${project.slug}`}>Project details <ArrowUpRight size={15} /></Link>
                    <a className="project-link" href={project.githubUrl} rel="noreferrer" target="_blank">GitHub <ExternalLink size={14} /></a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
