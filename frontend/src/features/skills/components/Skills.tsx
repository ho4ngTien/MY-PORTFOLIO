import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { skillGroups } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

interface SkillRowProps {
  name: string
  value: number
  delay?: number
}

function SkillRow({ name, value, delay = 0 }: SkillRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(rowRef, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : 0)

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value)
      return
    }

    if (!isInView) return

    const controls = animate(0, value, {
      duration: 0.85,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplayValue(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [isInView, shouldReduceMotion, value, delay])

  return (
    <div className="skill-row" ref={rowRef}>
      <div className="skill-label">
        <span>{name}</span>
        <span>{displayValue}%</span>
      </div>
      <div aria-label={`${name}: ${value}%`} className="skill-track" role="img">
        <motion.span
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          style={{
            width: `${value}%`,
            transformOrigin: 'left',
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            delay: shouldReduceMotion ? 0 : delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <SectionHeading
          description="The technologies and system practices I use to architect robust web platforms and scalable data solutions."
          eyebrow="What I work with"
          title="Skills"
        />
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              className="skill-group"
              initial={{ opacity: 0, y: 18 }}
              key={group.title}
              transition={{ duration: 0.35, delay: groupIndex * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-40px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3>{group.title}</h3>
              <p>{group.subtitle}</p>
              {group.skills.map((skill, skillIndex) => (
                <SkillRow
                  delay={groupIndex * 0.08 + skillIndex * 0.04}
                  key={skill.name}
                  name={skill.name}
                  value={skill.value}
                />
              ))}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
