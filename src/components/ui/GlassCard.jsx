import { motion } from 'framer-motion'

/**
 * Tarjeta base con efecto "Liquid Glass".
 * Úsala como contenedor para cualquier bloque de contenido (proyectos, skills, distros, etc).
 */
export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`glass ${hover ? 'glass-hover' : ''} rounded-2xl shadow-glass ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
