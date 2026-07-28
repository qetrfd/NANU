import { ArrowDown, Sparkles } from 'lucide-react'
import { AppStoreButton } from './AppStoreButton'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={16} /> Aprendizaje que enciende la curiosidad</div>
        <h1>Aprender también puede sentirse como <em>jugar.</em></h1>
        <p>
          NANU reúne arte, lógica, movimiento y exploración en experiencias diseñadas
          para que cada descubrimiento se sienta propio.
        </p>
        <div className="hero-actions">
          <AppStoreButton />
          <a className="text-link" href="#experiencias">
            Conoce las experiencias <ArrowDown size={18} />
          </a>
        </div>
        <div className="trust-row" aria-label="Características">
          <span><i /> Sin anuncios</span>
          <span><i /> Ritmo propio</span>
          <span><i /> Hecha con intención</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Vista previa de la aplicación NANU">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="video-shell">
          <div className="video-top">
            <span className="video-brand"><img src="assets/nanu-logo.png" alt="" /> NANU</span>
            <span className="video-pill">Explora</span>
          </div>
          <video autoPlay muted loop playsInline preload="metadata" aria-label="Recorrido por NANU">
            <source src="assets/about.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="float-card float-card--top">✦ Curiosidad</div>
        <div className="float-card float-card--bottom">6 mundos para descubrir</div>
      </div>
    </section>
  )
}
