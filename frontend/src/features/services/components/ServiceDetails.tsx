import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { services } from '@/shared/constants'

export function ServiceDetails() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return <main className="detail-page"><div className="detail-container"><span className="eyebrow">Service not found</span><h1>This service is unavailable.</h1><Link className="button" to="/#services"><ArrowLeft size={15} /> Back to services</Link></div></main>
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <div className="detail-breadcrumb"><Link to="/#services"><ArrowLeft size={15} /> Services</Link><span>/</span><span>{service.title}</span></div>
        <div className="service-detail-grid">
          <aside className="service-detail-sidebar">
            <span className="eyebrow">Services</span>
            <nav aria-label="Services">
              {services.map((item) => <Link aria-current={item.slug === service.slug ? 'page' : undefined} className={item.slug === service.slug ? 'active' : ''} key={item.slug} to={`/services/${item.slug}`}>{item.title}<ArrowRight size={15} /></Link>)}
            </nav>
            <p>Have a project in mind? Let's talk about what you need and where to start.</p>
            <Link className="text-link" to="/#contact">Contact me <ArrowRight size={15} /></Link>
          </aside>
          <article className="service-detail-content">
            <img alt="A modern workspace for digital product work" src="/images/services.jpg" />
            <span className="eyebrow">What I can help with</span>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <ul>
              <li><Check size={17} /> End-to-end implementation from frontend interfaces to backend services.</li>
              <li><Check size={17} /> Robust architecture, database modeling (PostgreSQL), and Docker containerization.</li>
              <li><Check size={17} /> Clean system contracts, data pipeline scalability, and thoughtful interaction polish.</li>
            </ul>
            <p>We start by aligning on the people using the product, the important tasks, and the scope that makes sense. From there, I build and refine the interface in clear, reviewable steps.</p>
            <Link className="button" to="/#contact">Discuss this service <ArrowRight size={16} /></Link>
          </article>
        </div>
      </div>
    </main>
  )
}