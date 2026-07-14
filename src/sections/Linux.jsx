import { motion } from 'framer-motion'
import { Terminal, Cpu, ShieldCheck, Layers } from 'lucide-react' // Importamos más iconos
import { linuxDistros } from '../data/skills.js'
import { fadeUp, staggerContainer } from '../hooks/useReveal.js'

// Mapeo de iconos para cada distro (puedes ajustar según tus necesidades)
const getIcon = (name) => {
  const icons = {
    'Debian': Layers,
    'Manjaro': Cpu,
    'Parrot OS': ShieldCheck,
  }
  return icons[name] || Terminal
}

export default function Linux() {
  return (
    <section id="linux" className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span variants={fadeUp} className="eyebrow">
          Entorno de trabajo
        </motion.span>
        <motion.h2 variants={fadeUp} className="heading-md mt-3">
          Linux & Power User
        </motion.h2>
        <motion.p variants={fadeUp} className="body-text mt-4 max-w-2xl">
          Mi sistema operativo principal es Linux, donde optimizo mi flujo de trabajo.
          Disfruto trabajar en entornos eficientes, rápidos y altamente personalizados.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {linuxDistros.map((distro) => {
            const Icon = getIcon(distro.name)
            return (
              <motion.div
                key={distro.name}
                variants={fadeUp}
                className="glass glass-hover group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:border-accent-cyan/30"
              >
                <div className="mb-4 text-accent-cyan transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-white">{distro.name}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-text-secondary">
                  {distro.description}
                </p>
                {/* Indicador visual inferior */}
                <div className="mt-6 h-1 w-12 rounded-full bg-accent-cyan/20 group-hover:bg-accent-cyan transition-colors" />
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}