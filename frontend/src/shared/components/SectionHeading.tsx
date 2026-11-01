import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      className={`section-heading${align === 'left' ? ' section-heading-left' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
