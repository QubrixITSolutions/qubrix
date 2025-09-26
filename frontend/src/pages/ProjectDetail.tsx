import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'

interface ProjectDetailProps { onOpenQuote: () => void }

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onOpenQuote }) => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-6">The project you are looking for may have been renamed or is coming soon.</p>
        <button onClick={() => navigate('/')} className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold">Go Home</button>
      </div>
    )
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} text-white min-h-screen flex items-center`}>
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur text-sm tracking-wide mb-4">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-brand">
              {project.heroTitle}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">{project.heroDescription}</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={onOpenQuote} className="bg-white text-primary-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">Get a Quote</button>
              <button
                onClick={() => {
                  // Save slug for scroll targeting
                  try { if (slug) sessionStorage.setItem('scrollToProject', slug) } catch {}
                  // Navigate home, then scroll to that project card specifically
                  navigate('/', { replace: false });
                  const attemptScroll = (retries = 12) => {
                    const targetSlug = sessionStorage.getItem('scrollToProject');
                    if (!targetSlug) return;
                    const card = document.querySelector(`[data-project-slug="${targetSlug}"]`);
                    if (card) {
                      (card as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });
                      (card as HTMLElement).classList.add('ring-4','ring-white','ring-offset-2','ring-offset-gray-900');
                      setTimeout(() => {
                        (card as HTMLElement).classList.remove('ring-4','ring-white','ring-offset-2','ring-offset-gray-900');
                      }, 1800);
                      try { sessionStorage.removeItem('scrollToProject') } catch {}
                      return;
                    }
                    if (retries > 0) setTimeout(() => attemptScroll(retries - 1), 60);
                  };
                  setTimeout(() => attemptScroll(), 40);
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-white/5 backdrop-blur flex items-center justify-center h-80 lg:h-96">
              {/* Placeholder for hero image */}
              {project.heroImage ? (
                <img src={project.heroImage} alt={project.shortTitle} className="h-full w-full object-cover" />
              ) : (
                <div className="text-7xl opacity-30">📱</div>
              )}
            </div>
            {project.gallery && project.gallery.length > 0 && (
              <div className="hidden lg:flex gap-4 mt-4">
                {project.gallery.slice(0,2).map((g,i) => (
                  <div key={i} className="flex-1 h-32 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10 backdrop-blur">
                    <img src={g} alt={`Screenshot ${i+1}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Platform Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((f,i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group">
                <div className="text-3xl mb-4">{f.icon || '✨'}</div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Challenges & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {project.challenges.map((c,i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <h3 className="font-semibold text-primary-700 mb-2">Challenge {i+1}</h3>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">{c.challenge}</p>
                <div className="text-gray-600 text-sm"><span className="font-semibold text-green-600">Solution:</span> {c.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Technologies Used</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {project.technologies.map((t,i) => (
              <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl mb-2">{t.icon || '🛠️'}</div>
                <span className="text-sm font-medium text-gray-700">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className={`py-20 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} text-white`}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="text-5xl mb-8 opacity-30">“”</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light mb-6">{project.testimonial.quote}</blockquote>
            <div className="font-semibold">{project.testimonial.author}</div>
            {project.testimonial.role && <div className="text-blue-200 text-sm mt-1">{project.testimonial.role}</div>}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Exceptional?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Let’s turn your product vision into a scalable, high-performance digital experience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onOpenQuote} className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Start Your Project</button>
            <button onClick={() => navigate('/#contact')} className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
