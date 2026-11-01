import type { FormEvent } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CodeXml, Mail, MapPin, Send } from 'lucide-react'
import { contactEmail } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject || `Portfolio inquiry from ${name}`)}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner">
        <SectionHeading
          description="Have a project, opportunity, or question? Send a note and tell me a little about it."
          eyebrow="Let's connect"
          title="Contact"
        />
        <div className="contact-grid">
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3>Let's connect & collaborate.</h3>
            <p>I am open to software engineering internships, junior full-stack / data engineering opportunities, and project collaboration. Reach out through whichever channel is easiest.</p>
            <div className="contact-detail"><span className="contact-icon"><MapPin size={19} /></span><div><strong>Location</strong><span>Ho Chi Minh City, Vietnam</span></div></div>
            <div className="contact-detail"><span className="contact-icon"><Mail size={19} /></span><div><strong>Email</strong><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div></div>
            <div className="contact-detail"><span className="contact-icon"><CodeXml size={19} /></span><div><strong>GitHub</strong><a href="https://github.com/ho4ngTien" rel="noreferrer" target="_blank">github.com/ho4ngTien</a></div></div>
          </motion.div>
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            onSubmit={handleSubmit}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <label>Name<input autoComplete="name" name="name" placeholder="Your name" required /></label>
            <label>Email<input autoComplete="email" name="email" placeholder="you@example.com" required type="email" /></label>
            <label>Subject<input name="subject" placeholder="What would you like to discuss?" required /></label>
            <label>Message<textarea name="message" placeholder="A little context about your project or question..." required rows={5} /></label>
            <div className="form-submit-row">
              <motion.button
                className="button form-submit"
                transition={{ duration: 0.15 }}
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={15} /> Open email draft <ArrowUpRight size={15} />
              </motion.button>
              <span aria-live="polite">{sent ? 'Your email draft is ready.' : 'Opens your default email app.'}</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
