import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Button from '../components/ui/Button.jsx'
import { fadeUp, staggerContainer } from '../hooks/useReveal.js'

const socials = [
  { label: 'GitHub', icon: Github, href: 'https://github.com/brayanvillca' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/brayan-herlan-villca/' },
  { label: 'Correo', icon: Mail, href: 'mailto:brayanvillca246@gmail.com' },
]

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        'service_y5z5u1s',
        'template_vrh6fi7',
        formRef.current,
        'w9tDDHAIiTzTtOvT4k5OG'
      )
      setStatus('sent')
      formRef.current.reset() // Limpia el formulario automáticamente
      setTimeout(() => setStatus('idle'), 5000) // Restablece el estado tras 5s
    } catch (error) {
      console.error('Error al enviar:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-10 md:grid-cols-2"
      >
        <motion.div variants={fadeUp}>
          <span className="eyebrow text-accent-cyan">Contacto</span>
          <h2 className="heading-md mt-3">Hablemos de tu proyecto</h2>
          <p className="body-text mt-4 max-w-md">
            Si tienes un proyecto en mente o quieres conversar sobre backend, automatización o
            docencia, escríbeme.
          </p>

          <div className="mt-8 flex gap-4">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-full transition-all hover:text-accent-cyan"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="glass flex flex-col gap-4 rounded-2xl p-6 border border-white/5"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-text-secondary">Nombre</label>
            <input id="name" name="name" type="text" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent-cyan/50 transition-all" placeholder="Tu nombre" />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-text-secondary">Correo</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent-cyan/50 transition-all" placeholder="tu@correo.com" />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-text-secondary">Mensaje</label>
            <textarea id="message" name="message" required rows={4} className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent-cyan/50 transition-all" placeholder="Cuéntame sobre tu proyecto..." />
          </div>

          <Button type="submit" disabled={status === 'sending'} className="mt-2 justify-center gap-2">
            {status === 'sending' ? 'Enviando...' : status === 'sent' ? <>Enviado <CheckCircle size={18}/></> : <>Enviar mensaje <Send size={18}/></>}
          </Button>

          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm text-red-400"><AlertCircle size={16}/> Algo salió mal. Intenta de nuevo.</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  )
}