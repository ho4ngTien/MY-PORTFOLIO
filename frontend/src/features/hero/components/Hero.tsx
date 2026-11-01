import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
    y: 0,
  },
}

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <motion.div
          animate="visible"
          className="hero-copy"
          initial="hidden"
          variants={containerVariants}
        >
          <motion.p className="eyebrow" variants={itemVariants}>
            Hoàng Tiến · Full-Stack & Data Engineering
          </motion.p>
          <motion.h1 variants={itemVariants}>
            End-to-end engineering, <span>from UI to data systems.</span>
          </motion.h1>
          <motion.p className="hero-role" variants={itemVariants}>
            I build <strong>Full-Stack & Data-Driven Applications</strong>
          </motion.p>
          <motion.p className="hero-description" variants={itemVariants}>
            Computer Science student with strong foundations across frontend, backend, and databases (React, TypeScript, Java, Spring Boot, PostgreSQL, Docker). Applying system thinking to scalable web platforms and data pipelines.
          </motion.p>
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              className="button"
              href="#projects"
              transition={{ duration: 0.15 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore my work <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              className="button button-outline"
              href="#contact"
              transition={{ duration: 0.15 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.a
          animate={{ opacity: 1 }}
          className="hero-note"
          href="#about"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <span /> Based in Ho Chi Minh City <ArrowDown size={15} />
        </motion.a>
      </div>
    </section>
  )
}
