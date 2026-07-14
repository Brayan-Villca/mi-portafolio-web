import { motion } from 'framer-motion'
import { ArrowRight, Mail, Terminal, Database, Braces } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import miFoto from "../assets/imgs/mi-foto.webp"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Glow ambiental de fondo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="section grid items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Backend Developer · Python · Linux</span>

          <h1 className="heading-lg mt-4">
            Backend <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">Developer</span>
          </h1>

          <p className="body-text mt-6 max-w-md">
            Construyo soluciones enfocadas en arquitectura backend, bases de datos y automatización.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#proyectos" icon={ArrowRight}>
              Ver proyectos
            </Button>
            <Button href="#contacto" variant="ghost" icon={Mail}>
              Contactarme
            </Button>
          </div>
        </motion.div>

        {/* Elementos flotantes tipo "glass" con íconos técnicos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden h-96 md:block"
          aria-hidden="true"
        >
          <div className="glass absolute left-4 top-4 animate-float rounded-2xl p-5 shadow-glass">
            <Terminal className="text-accent-cyan" size={28} />
          </div>
          <div
            className="glass absolute right-8 top-24 animate-float rounded-2xl p-5 shadow-glass"
            style={{ animationDelay: '1.5s' }}
          >
            <Database className="text-accent-blue" size={28} />
          </div>
          <div
            className="glass absolute bottom-8 left-16 animate-float rounded-2xl p-5 shadow-glass"
            style={{ animationDelay: '3s' }}
          >
            <Braces className="text-accent-orange" size={28} />
          </div>
          <div className="glass absolute inset-0 m-auto flex h-48 w-48 items-center justify-center rounded-full border-2 border-accent-cyan/20 overflow-hidden">
            <img 
            src={miFoto} 
            alt="Brayan Villca"
            className='h-full w-full object-cover'/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
