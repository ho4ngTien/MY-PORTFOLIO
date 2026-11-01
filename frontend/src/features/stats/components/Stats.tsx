import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { BriefcaseBusiness, Code2, MonitorSmartphone } from 'lucide-react'

const figures = [
  { value: '04', label: 'Featured projects', icon: BriefcaseBusiness },
  { value: '06+', label: 'Tools in my daily stack', icon: Code2 },
  { value: '100%', label: 'Responsive by default', icon: MonitorSmartphone },
]

function parseStatValue(raw: string) {
  const match = raw.match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, pad: 0, suffix: raw }
  const numStr = match[1]
  const suffix = match[2]
  const hasLeadingZero = numStr.length > 1 && numStr.startsWith('0')
  return {
    target: parseInt(numStr, 10),
    pad: hasLeadingZero ? numStr.length : 0,
    suffix,
  }
}

interface StatItemProps {
  value: string
  label: string
  icon: typeof BriefcaseBusiness
  index: number
}

function StatItem({ value, label, icon: Icon, index }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion()
  const { target, pad, suffix } = parseStatValue(value)
  const initialDisplay = pad ? '0'.repeat(pad) + suffix : '0' + suffix
  const [displayValue, setDisplayValue] = useState(initialDisplay)

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value)
      return
    }

    if (!isInView) return

    const controls = animate(0, target, {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        const rounded = Math.round(latest)
        const formatted = pad ? String(rounded).padStart(pad, '0') : String(rounded)
        setDisplayValue(formatted + suffix)
      },
    })

    return () => controls.stop()
  }, [isInView, shouldReduceMotion, target, pad, suffix, value])

  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, y: 12 }}
      key={label}
      ref={ref}
      transition={{ duration: 0.25, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Icon aria-hidden="true" size={23} strokeWidth={1.6} />
      <strong>{displayValue}</strong>
      <span>{label}</span>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section aria-label="Portfolio highlights" className="stats-band">
      <div className="stats-grid">
        {figures.map((figure, index) => (
          <StatItem
            icon={figure.icon}
            index={index}
            key={figure.label}
            label={figure.label}
            value={figure.value}
          />
        ))}
      </div>
    </section>
  )
}
