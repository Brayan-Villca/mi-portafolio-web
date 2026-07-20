import { motion } from 'framer-motion'
import { Github, ExternalLink, ImageOff } from 'lucide-react'
import { hobbies } from '../data/hobbies.js'
import { fadeUp, staggerContainer } from '../hooks/useReveal.js'

export default function Hobbies() {
  return (
    <section id="juegos" className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.span variants={fadeUp} className="eyebrow">
          Proyectos por Hobby
        </motion.span>
        <motion.h2 variants={fadeUp} className="heading-md mt-3">
          Cosas que hice por diversion
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {hobbies.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass glass-hover flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="flex h-44 items-center justify-center border-b border-border bg-white/[0.03]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Captura del proyecto ${project.name}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-text-secondary/50">
                    <ImageOff size={28} aria-hidden="true" />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-text-primary">{project.name}</h3>
                {project.slogan && (
                  <p className="mt-1 text-sm italic text-accent-cyan">"{project.slogan}"</p>
                )}
                <p className="body-text mt-3">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.githubUrl || '#'}
                    target='_black'
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                    aria-disabled={!project.githubUrl}
                  >
                    <Github size={16} aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl || '#'}
                    target='_black'
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                    aria-disabled={!project.demoUrl}
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
