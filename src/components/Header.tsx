import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AppStoreButton } from './AppStoreButton'

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={close} aria-label="NANU, ir al inicio">
        <img src="assets/nanu-logo.png" alt="" />
        <span>NANU</span>
      </a>

      <nav className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Navegación principal">
        <a href="#experiencias" onClick={close}>Experiencias</a>
        <a href="#metodo" onClick={close}>Cómo aprende</a>
        <a href="#familias" onClick={close}>Para familias</a>
        <div className="nav-store"><AppStoreButton compact /></div>
      </nav>

      <div className="header-cta"><AppStoreButton compact /></div>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}
