import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { Check, Gamepad2, X } from 'lucide-react'
import type { Experience } from '../data/experiences'
import { AppStoreButton } from './AppStoreButton'
import { ModuleActivity } from './ModuleActivity'

type SectionKey = 'jugar' | 'que' | 'como' | 'beneficios' | 'contenido'

export function ExperienceModal({
  experience,
  onClose,
}: {
  experience: Experience
  onClose: () => void
}) {
  const Icon = experience.icon
  const [active, setActive] = useState<SectionKey>('jugar')
  const section = experience.sections.find((item) => item.key === active)

  useEffect(() => {
    if (experience.model) void import('@google/model-viewer')
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [experience.model, onClose])

  return (
    <div className="module-page" role="dialog" aria-modal="true" aria-labelledby="module-title">
      <div className="module-page__top">
        <div className="module-page__identity">
          <span className="module-page__icon" style={{ background: experience.pale, color: experience.color }}><Icon /></span>
          <div><small>{experience.eyebrow}</small><strong>{experience.name}</strong></div>
        </div>
        <button className="module-page__close" type="button" onClick={onClose} aria-label="Cerrar módulo">
          <X /> <span>Cerrar</span>
        </button>
      </div>

      <div
        className="module-page__hero"
        style={{ '--accent': experience.color, '--pale': experience.pale } as CSSProperties}
      >
        <div>
          <p className="module-page__eyebrow">Explora el módulo</p>
          <h2 id="module-title">{experience.name}</h2>
          <p>{experience.longDescription}</p>
        </div>
        <div className="module-metrics">
          <div><span>Objetivo</span><strong>{experience.objective}</strong></div>
          <div><span>Interacción</span><strong>{experience.interaction}</strong></div>
          <div><span>Enfoque</span><strong>{experience.focus}</strong></div>
        </div>
      </div>

      <nav className="module-tabs" aria-label={`Apartados de ${experience.name}`}>
        <button type="button" className={active === 'jugar' ? 'active' : ''} onClick={() => setActive('jugar')}>
          <Gamepad2 /> Jugar demo
        </button>
        {experience.sections.map((item) => (
          <button type="button" className={active === item.key ? 'active' : ''} onClick={() => setActive(item.key)} key={item.key}>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="module-page__content">
        {active === 'jugar' ? (
          <ModuleActivity experience={experience} />
        ) : section ? (
          <section className="module-info" key={section.key}>
            <div>
              <p className="section-kicker">{section.label}</p>
              <h3>{section.description}</h3>
            </div>
            <ul>
              {section.items.map((item) => <li key={item}><Check /> <span>{item}</span></li>)}
            </ul>
          </section>
        ) : null}
      </div>

      <div className="module-page__footer">
        <div>
          <strong>Continúa la experiencia completa en NANU</strong>
          <span>Todos los módulos, progreso y actividades en tu dispositivo.</span>
        </div>
        <AppStoreButton />
      </div>
    </div>
  )
}
