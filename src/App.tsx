import { useCallback, useEffect, useState } from 'react'
import { ArrowRight, Heart, ShieldCheck, Sparkles, Waves } from 'lucide-react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ExperienceCard } from './components/ExperienceCard'
import { ExperienceModal } from './components/ExperienceModal'
import { AppStoreButton } from './components/AppStoreButton'
import { Privacy } from './components/Privacy'
import { experiences, type Experience } from './data/experiences'

function App() {
  const [selected, setSelected] = useState<Experience | null>(null)

  const closeModal = useCallback(() => {
    setSelected(null)
    history.replaceState(null, '', `${location.pathname}${location.search}#experiencias`)
  }, [])

  const openExperience = useCallback((experience: Experience) => {
    setSelected(experience)
    history.replaceState(null, '', `${location.pathname}${location.search}#experiencia/${experience.slug}`)
  }, [])

  useEffect(() => {
    const slug = location.hash.match(/^#experiencia\/(.+)$/)?.[1]
    if (slug) setSelected(experiences.find((item) => item.slug === slug) ?? null)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="experiences section-wrap" id="experiencias">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Un mundo para cada forma de aprender</p>
              <h2>Seis experiencias.<br />Infinitas maneras de descubrir.</h2>
            </div>
            <p>
              Cada espacio invita a experimentar sin miedo a equivocarse,
              con actividades cortas, visuales y llenas de intención.
            </p>
          </div>
          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.slug} experience={experience} index={index} onOpen={openExperience} />
            ))}
          </div>
        </section>

        <section className="method section-wrap" id="metodo">
          <div className="method-visual">
            <div className="method-ring">
              <div className="method-center"><Sparkles /> NANU</div>
              <span className="method-node node-one"><Waves /> Explora</span>
              <span className="method-node node-two"><Heart /> Crea</span>
              <span className="method-node node-three"><ShieldCheck /> Confía</span>
            </div>
          </div>
          <div className="method-copy">
            <p className="section-kicker">Aprendizaje amable</p>
            <h2>Curiosidad primero.<br />Confianza después.</h2>
            <p>
              NANU no apresura ni compara. Propone, acompaña y celebra cada intento
              para que aprender sea una experiencia positiva y personal.
            </p>
            <div className="principles">
              <div><span>01</span><strong>Explorar</strong><p>Actividades que invitan a tocar, observar y probar.</p></div>
              <div><span>02</span><strong>Comprender</strong><p>Retroalimentación clara para conectar cada hallazgo.</p></div>
              <div><span>03</span><strong>Crear</strong><p>Espacios abiertos para expresar ideas con libertad.</p></div>
            </div>
          </div>
        </section>

        <section className="families section-wrap" id="familias">
          <div className="families-card">
            <div className="families-copy">
              <p className="section-kicker">Para crecer juntos</p>
              <h2>Una pantalla que abre conversaciones.</h2>
              <p>
                NANU convierte el tiempo digital en momentos de descubrimiento
                que pueden continuar fuera de la app, en casa o en el aula.
              </p>
              <a href="#experiencias" className="family-link">Explorar los mundos <ArrowRight /></a>
            </div>
            <div className="families-quote">
              <span>“</span>
              <p>La tecnología se vuelve valiosa cuando despierta preguntas, no cuando entrega todas las respuestas.</p>
            </div>
          </div>
        </section>

        <Privacy />

        <section className="download section-wrap">
          <div className="download-card">
            <img src="assets/nanu-logo.png" alt="" />
            <div>
              <p className="section-kicker">La aventura empieza aquí</p>
              <h2>Descubre NANU en iPhone y iPad.</h2>
            </div>
            <AppStoreButton />
          </div>
        </section>
      </main>

      <footer>
        <a className="brand brand--footer" href="#inicio"><img src="assets/nanu-logo.png" alt="" /><span>NANU</span></a>
        <p><a href="#privacidad">Política de privacidad</a></p>
        <p>© {new Date().getFullYear()} NANU</p>
      </footer>

      {selected && <ExperienceModal experience={selected} onClose={closeModal} />}
    </>
  )
}

export default App
