import { useEffect } from 'react'
import type { CSSProperties } from 'react'
import { Check, X } from 'lucide-react'
import type { Experience } from '../data/experiences'
import { AppStoreButton } from './AppStoreButton'

export function ExperienceModal({
  experience,
  onClose,
}: {
  experience: Experience
  onClose: () => void
}) {
  const Icon = experience.icon

  useEffect(() => {
    if (experience.model) void import('@google/model-viewer')
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="experience-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        style={{ '--accent': experience.color, '--pale': experience.pale } as CSSProperties}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar">
          <X />
        </button>
        <div className="modal-media">
          {experience.model ? (
            <model-viewer
              src={experience.model}
              alt="Modelo 3D del rover Curiosity"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              interaction-prompt="auto"
            />
          ) : (
            <video autoPlay muted loop playsInline controls>
              <source src={experience.video} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="modal-copy">
          <span className="modal-icon"><Icon /></span>
          <p className="modal-eyebrow">{experience.eyebrow}</p>
          <h2 id="modal-title">{experience.name}</h2>
          <p className="modal-description">{experience.longDescription}</p>
          <h3>Habilidades que acompaña</h3>
          <ul>
            {experience.skills.map((skill) => (
              <li key={skill}><Check size={17} /> {skill}</li>
            ))}
          </ul>
          <AppStoreButton />
        </div>
      </section>
    </div>
  )
}
