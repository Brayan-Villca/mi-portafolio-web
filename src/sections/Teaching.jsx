import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { algCourses, bitRootCourses } from '../data/skills.js'
import { fadeUp, staggerContainer } from '../hooks/useReveal.js'

export default function Teaching() {
  return (
    <section id="docencia" className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="glass rounded-3xl p-8 md:p-12"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <GraduationCap className="text-accent-yellow" size={28} aria-hidden="true" />
          <span className="eyebrow">Docencia</span>
        </motion.div>

        <motion.h2 variants={fadeUp} className="heading-md mt-3">
          BitRoot Academy
        </motion.h2>

        <motion.p variants={fadeUp} className="body-text mt-4 max-w-2xl">
          Fundador de BitRoot Academy. Diseño rutas de aprendizaje intensivas orientadas a la práctica, ayudando a entusiastas a dominar tecnologías desde cero.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          {bitRootCourses.map((course) => (
            <span
              key={course}
              className="rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-text-secondary"
            >
              {course}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="glass rounded-3xl p-8 md:p-12 mt-5"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <GraduationCap className="text-accent-yellow" size={28} aria-hidden="true" />
          <span className="eyebrow">Docencia</span>
        </motion.div>

        <motion.h2 variants={fadeUp} className="heading-md mt-3">
          Algorithmics Academy
        </motion.h2>

        <motion.p variants={fadeUp} className="body-text mt-4 max-w-2xl">
          Formador en Algorithmics Academy. Me enfoco en desarrollar el pensamiento lógico y las habilidades técnicas de mis alumnos mediante una metodología educativa comprobada.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          {algCourses.map((course) => (
            <span
              key={course}
              className="rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-text-secondary"
            >
              {course}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>

    
  )
}
