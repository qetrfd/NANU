import type { LucideIcon } from 'lucide-react'
import { BrainCircuit, Brush, Eye, Footprints, Leaf, PencilLine } from 'lucide-react'

export type Experience = {
  slug: string
  name: string
  eyebrow: string
  description: string
  longDescription: string
  skills: string[]
  color: string
  pale: string
  video: string
  icon: LucideIcon
  model?: string
}

export const experiences: Experience[] = [
  {
    slug: 'caminarte',
    name: 'CaminArte',
    eyebrow: 'Cultura en movimiento',
    description: 'Viaja por el arte, la ciencia y la historia con piezas que puedes explorar en 3D.',
    longDescription: 'Una galería viva para observar de cerca, girar cada pieza y descubrir historias que conectan cultura, ciencia e imaginación.',
    skills: ['Curiosidad cultural', 'Observación', 'Exploración espacial'],
    color: '#FF6B5F',
    pale: '#FFF0E8',
    video: 'assets/preview-ar.mp4',
    model: 'assets/curiosity.glb',
    icon: Footprints,
  },
  {
    slug: 'cerebro-logico',
    name: 'Cerebro Lógico',
    eyebrow: 'Piensa, prueba, descubre',
    description: 'Patrones y retos breves que convierten el razonamiento en una aventura.',
    longDescription: 'Desafíos visuales con retroalimentación inmediata para practicar secuencias, comparación y resolución de problemas a su propio ritmo.',
    skills: ['Pensamiento lógico', 'Atención', 'Resolución de retos'],
    color: '#7659D6',
    pale: '#F0ECFF',
    video: 'assets/preview-logic2.mp4',
    icon: BrainCircuit,
  },
  {
    slug: 'senales',
    name: 'Señales',
    eyebrow: 'Mira y comprende',
    description: 'Reconoce símbolos cotidianos y aprende a interpretar el mundo visual.',
    longDescription: 'Una experiencia clara y progresiva para asociar señales, formas y significados presentes en la vida diaria.',
    skills: ['Percepción visual', 'Asociación', 'Autonomía'],
    color: '#2E9B83',
    pale: '#E8F8F3',
    video: 'assets/preview-signs.mp4',
    icon: Eye,
  },
  {
    slug: 'trazos',
    name: 'Trazos',
    eyebrow: 'Cada línea cuenta',
    description: 'Dibuja, repasa y fortalece la coordinación con ejercicios llenos de color.',
    longDescription: 'Actividades de trazo amables y visuales que acompañan el desarrollo de la motricidad fina sin presión.',
    skills: ['Motricidad fina', 'Coordinación', 'Control del trazo'],
    color: '#E9A11A',
    pale: '#FFF7DC',
    video: 'assets/preview-trazos.mp4',
    icon: PencilLine,
  },
  {
    slug: 'rincon-de-dali',
    name: 'Rincón de Dalí',
    eyebrow: 'Imagina sin límites',
    description: 'Un estudio creativo para jugar con color, forma y expresión artística.',
    longDescription: 'Un espacio seguro para experimentar, combinar ideas y crear libremente mientras se fortalece la confianza.',
    skills: ['Creatividad', 'Expresión', 'Coordinación'],
    color: '#DE4F88',
    pale: '#FDEAF2',
    video: 'assets/preview-dali.mp4',
    icon: Brush,
  },
  {
    slug: 'ecomagico',
    name: 'EcoMágico',
    eyebrow: 'Escucha la naturaleza',
    description: 'Sonidos, imágenes y pequeños hallazgos para conectar con el entorno.',
    longDescription: 'Exploraciones sensoriales para reconocer sonidos, relacionarlos con imágenes y despertar el cuidado por la naturaleza.',
    skills: ['Atención auditiva', 'Memoria sensorial', 'Conciencia ambiental'],
    color: '#3F9F5F',
    pale: '#EAF7E9',
    video: 'assets/preview-eco.mp4',
    icon: Leaf,
  },
]
