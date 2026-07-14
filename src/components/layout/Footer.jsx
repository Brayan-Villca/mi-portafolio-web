export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="section flex flex-col items-center gap-2 py-10 text-center">
        <p className="font-semibold text-text-primary">Brayan Villca</p>
        <p className="text-sm text-text-secondary">Backend Developer</p>
        <p className="mt-4 text-xs text-text-secondary/70">
          © {year} Brayan Villca. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
