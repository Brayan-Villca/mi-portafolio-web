import { motion } from 'framer-motion'
import {
  FileCode2,
  Flame,
  Zap,
  Atom,
  Code2,
  Palette,
  Braces,
  Wind,
  Database,
  GitBranch,
  Github,
  Terminal,
  Code,
} from 'lucide-react'
import { skillGroups } from '../data/skills.js'
import { fadeUp, staggerContainer } from '../hooks/useReveal.js'

// Mapa explícito de íconos usados (evita importar toda la librería lucide-react,
// lo que aumentaría el bundle final considerablemente).
// 📌 Si agregas una tecnología nueva en data/skills.js con un ícono distinto,
// impórtalo arriba y agrégalo a este mapa.
const iconMap = {
  FileCode2,
  Flame,
  Zap,
  Atom,
  Code2,
  Palette,
  Braces,
  Wind,
  Database,
  GitBranch,
  Github,
  Terminal,
  Code,
}

export default function Skills() {
  return (
    <section id="tecnologias" className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.span variants={fadeUp} className="eyebrow">
          Stack técnico
        </motion.span>
        <motion.h2 variants={fadeUp} className="heading-md mt-3">
          Tecnologías
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <motion.div key={group.category} variants={fadeUp} className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-secondary">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => {
                  const Icon = iconMap[item.icon] || Code
                  return (
                    <li key={item.name} className="flex items-center gap-3 text-text-primary">
                      <Icon className="text-accent-cyan" size={18} aria-hidden="true" />
                      <span className="text-sm">{item.name}</span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
