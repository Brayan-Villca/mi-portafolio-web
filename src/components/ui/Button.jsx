import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-glow hover:brightness-110',
  ghost: 'glass glass-hover text-text-primary',
}

/**
 * Botón reutilizable. Puede renderizarse como <a> (si recibe `href`) o <button>.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon: Icon,
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-cyan ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon size={16} aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
