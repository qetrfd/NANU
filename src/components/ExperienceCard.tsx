import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Experience } from '../data/experiences'

export function ExperienceCard({
  experience,
  index,
  onOpen,
}: {
  experience: Experience
  index: number
  onOpen: (experience: Experience) => void
}) {
  const Icon = experience.icon

  return (
    <article
      className="experience-card"
      style={{ '--accent': experience.color, '--pale': experience.pale } as CSSProperties}
    >
      <button type="button" onClick={() => onOpen(experience)} aria-label={`Abrir ${experience.name}`}>
        <div className="experience-media">
          <video
            muted
            loop
            playsInline
            preload="metadata"
            onMouseEnter={(event) => event.currentTarget.play()}
            onMouseLeave={(event) => event.currentTarget.pause()}
          >
            <source src={experience.video} type="video/mp4" />
          </video>
          <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="experience-icon"><Icon size={21} /></span>
        </div>
        <div className="experience-body">
          <p>{experience.eyebrow}</p>
          <h3>{experience.name}</h3>
          <span className="experience-description">{experience.description}</span>
          <span className="experience-action">Descubrir <ArrowUpRight size={17} /></span>
        </div>
      </button>
    </article>
  )
}
