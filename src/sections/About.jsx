import { motion } from 'framer-motion'
import { Server, Terminal, Cpu, GraduationCap } from 'lucide-react'
import { fadeUp, staggerContainer } from '../hooks/useReveal.js'

// Definimos los puntos como objetos para mayor control visual
const points = [
  {
    title: 'Desarrollo Backend',
    text: 'Diseño arquitecturas robustas y escalables, priorizando la eficiencia y la mantenibilidad del código.',
    icon: Server,
    color: 'text-accent-cyan'
  },
  {
    title: 'Entorno Linux',
    text: 'Opero mi flujo de trabajo sobre sistemas Linux, aprovechando su control total y flexibilidad.',
    icon: Terminal,
    color: 'text-accent-blue'
  },
  {
    title: 'Optimización',
    text: 'Enfocado en reducir la complejidad técnica mediante soluciones limpias, simples y escalables.',
    icon: Cpu,
    color: 'text-accent-orange'
  },
  {
    title: 'Docencia',
    text: 'Mentor apasionado, enfocado en compartir conocimiento y democratizar el aprendizaje técnico.',
    icon: GraduationCap,
    color: 'text-accent-purple'
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span variants={fadeUp} className="eyebrow">
          Sobre mí
        </motion.span>
        <motion.h2 variants={fadeUp} className="heading-md mt-3">
          Software simple, limpio y escalable.
        </motion.h2>
        <motion.p variants={fadeUp} className="body-text mt-4 max-w-2xl">
          Soy un desarrollador especializado en backend apasionado por construir software
          robusto, mantenible y eficiente. Mi enfoque está en arquitectura backend, bases de
          datos, automatización y optimización de procesos.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="glass glass-hover flex gap-4 rounded-2xl p-6 transition-all duration-300"
              >
                <div className={`mt-1 ${point.color}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{point.title}</h4>
                  <p className="text-sm leading-relaxed text-text-secondary">{point.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}