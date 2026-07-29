import type { LucideIcon } from 'lucide-react'
import { BrainCircuit, Brush, Eye, Footprints, Leaf, PencilLine } from 'lucide-react'

export type Experience = {
  slug: string
  name: string
  eyebrow: string
  description: string
  longDescription: string
  skills: string[]
  objective: string
  interaction: string
  focus: string
  sections: {
    key: 'que' | 'como' | 'beneficios' | 'contenido'
    label: string
    description: string
    items: string[]
  }[]
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
    objective: 'Aprender con exploración visual',
    interaction: 'Realidad aumentada + objetos 3D',
    focus: 'Curiosidad, cultura y juego',
    sections: [
      {
        key: 'que',
        label: 'Qué hace',
        description: 'CaminArte crea mini museos en realidad aumentada con piezas 3D y datos breves para explorar sin saturación de texto.',
        items: ['Exploración de objetos 3D y realidad aumentada.', 'Fichas breves con nombre, época y datos interesantes.', 'Interacción para rotar, acercar y observar.', 'Recorridos de arte, ciencia e historia.'],
      },
      {
        key: 'como',
        label: 'Cómo se usa',
        description: 'Elige una colección, coloca o abre una pieza y muévete alrededor para observar sus detalles.',
        items: ['Selecciona una colección o mini museo.', 'Abre la pieza en 3D o colócala en tu espacio.', 'Rota, acerca y toca puntos de interés.', 'Avanza por el recorrido a tu ritmo.'],
      },
      {
        key: 'beneficios',
        label: 'Beneficios',
        description: 'La interacción espacial convierte la información en una experiencia concreta y memorable.',
        items: ['Favorece el aprendizaje visual.', 'Mejora atención y observación guiada.', 'Conecta datos con objetos reales.', 'Motiva el descubrimiento autónomo.'],
      },
      {
        key: 'contenido',
        label: 'Contenido',
        description: 'El catálogo puede crecer con nuevas colecciones, narraciones y recorridos temáticos.',
        items: ['Arte, animales, inventos y cultura local.', 'Piezas con fichas cortas y puntos de interés.', 'Audio narrado opcional.', 'Rutas guiadas de tres a cinco piezas.'],
      },
    ],
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
    objective: 'Razonamiento y agilidad mental',
    interaction: 'Minijuegos + retos breves',
    focus: 'Claridad, progreso y motivación',
    sections: [
      {
        key: 'que',
        label: 'Qué hace',
        description: 'Cerebro Lógico reúne minijuegos de patrones, secuencias, comparación, conteo y problemas cortos.',
        items: ['Retos de patrones y secuencias.', 'Problemas de conteo y comparación.', 'Dificultad progresiva.', 'Retroalimentación clara y motivante.'],
      },
      {
        key: 'como',
        label: 'Cómo se usa',
        description: 'Una pregunta por pantalla, opciones grandes y una explicación inmediata mantienen el foco.',
        items: ['Inicia un reto nuevo.', 'Elige entre tres o cuatro respuestas.', 'Descubre la regla correcta.', 'Repite para mejorar tu racha.'],
      },
      {
        key: 'beneficios',
        label: 'Beneficios',
        description: 'Fortalece razonamiento, atención y memoria de trabajo sin penalizar el error.',
        items: ['Análisis de patrones y reglas.', 'Atención sostenida y memoria.', 'Agilidad para tomar decisiones.', 'Confianza mediante progreso visible.'],
      },
      {
        key: 'contenido',
        label: 'Contenido',
        description: 'Los retos se organizan en paquetes de números, formas, secuencias y lógica visual.',
        items: ['Niveles básico, medio y reto.', 'Práctica libre o contrarreloj.', 'Secuencias, sumas y comparación.', 'Registro local de aciertos y rachas.'],
      },
    ],
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
    objective: 'Comunicación y práctica constante',
    interaction: 'Guías visuales + ejercicios',
    focus: 'Accesibilidad, memoria y confianza',
    sections: [
      {
        key: 'que',
        label: 'Qué hace',
        description: 'Señales que hablan permite practicar letras, palabras y gestos mediante una experiencia visual guiada.',
        items: ['Práctica por letra, palabra o secuencia.', 'Ejemplos visuales claros.', 'Sesiones cortas para evitar fatiga.', 'Metas pequeñas y repetibles.'],
      },
      {
        key: 'como',
        label: 'Cómo se usa',
        description: 'El usuario elige un reto, observa la guía y practica el gesto siguiendo pasos sencillos.',
        items: ['Selecciona una letra o palabra.', 'Observa el ejemplo visual.', 'Practica siguiendo el ritmo sugerido.', 'Revisa la guía y avanza.'],
      },
      {
        key: 'beneficios',
        label: 'Beneficios',
        description: 'Refuerza coordinación, memoria gestual e inclusión comunicativa.',
        items: ['Coordinación y control motriz.', 'Atención al detalle.', 'Comunicación alternativa e inclusión.', 'Confianza mediante práctica constante.'],
      },
      {
        key: 'contenido',
        label: 'Contenido',
        description: 'La biblioteca se amplía por temas sin cambiar la forma de uso.',
        items: ['Ejercicios por letra y palabra.', 'Secuencias y retos opcionales.', 'Guías paso a paso.', 'Indicadores de avance por sesión.'],
      },
    ],
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
    objective: 'Reconocer números y formas',
    interaction: 'Trazar con dedo o mouse',
    focus: 'Coordinación y memoria visual',
    sections: [
      {
        key: 'que',
        label: 'Qué hace',
        description: 'Trazos Mágicos permite aprender números dibujándolos directamente sobre una guía.',
        items: ['Guía visual para cada número.', 'Interacción con dedo, lápiz o mouse.', 'Práctica repetible.', 'Progreso de un número al siguiente.'],
      },
      {
        key: 'como',
        label: 'Cómo se usa',
        description: 'Sigue la forma del número, borra cuando lo necesites y repite hasta sentir seguridad.',
        items: ['Observa el número punteado.', 'Traza siguiendo su forma.', 'Borra para volver a intentar.', 'Avanza al siguiente número.'],
      },
      {
        key: 'beneficios',
        label: 'Beneficios',
        description: 'El trazado desarrolla motricidad fina, memoria visual y reconocimiento numérico temprano.',
        items: ['Coordinación mano-ojo.', 'Reconocimiento de números.', 'Aprendizaje activo y visual.', 'Repetición sin presión.'],
      },
      {
        key: 'contenido',
        label: 'Contenido',
        description: 'La base admite números, letras, caminos y formas progresivamente más complejas.',
        items: ['Números del uno al cinco.', 'Práctica libre con borrado.', 'Indicador de progreso.', 'Base para letras y figuras.'],
      },
    ],
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
    objective: 'Expresión y creatividad guiada',
    interaction: 'Dibujo, colores y trazos',
    focus: 'Motricidad, calma y juego',
    sections: [
      {
        key: 'que',
        label: 'Qué hace',
        description: 'Rincón de Dalí es un espacio para dibujar libremente, colorear y explorar trazos sin miedo a equivocarse.',
        items: ['Dibujo libre con trazos suaves.', 'Colores y grosores fáciles de elegir.', 'Retos creativos cortos.', 'Lienzo que se puede limpiar y repetir.'],
      },
      {
        key: 'como',
        label: 'Cómo se usa',
        description: 'Elige una herramienta y crea; todos los controles son grandes para no interrumpir la concentración.',
        items: ['Escoge pincel o borrador.', 'Selecciona un color.', 'Dibuja con el dedo o mouse.', 'Limpia el lienzo y comienza otra idea.'],
      },
      {
        key: 'beneficios',
        label: 'Beneficios',
        description: 'La práctica artística fortalece coordinación, planificación y regulación emocional.',
        items: ['Control motor fino y precisión.', 'Atención sostenida.', 'Creatividad y autoestima.', 'Una actividad calmante y repetible.'],
      },
      {
        key: 'contenido',
        label: 'Contenido',
        description: 'Las propuestas creativas pueden crecer por temas, técnicas y dificultad.',
        items: ['Dibujo libre y retos rápidos.', 'Paletas de color.', 'Pincel y borrador.', 'Galería personal dentro de la app.'],
      },
    ],
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
    objective: 'Reconocer y asociar sonidos',
    interaction: 'Audio + tarjetas visuales',
    focus: 'Percepción, calma y curiosidad',
    sections: [
      {
        key: 'que',
        label: 'Qué hace',
        description: 'EcoMágico vincula sonidos del hogar, la naturaleza y la ciudad con tarjetas visuales.',
        items: ['Exploración libre de sonidos.', 'Retos para descubrir qué objeto suena.', 'Repetición segura y sin presión.', 'Niveles cortos de asociación.'],
      },
      {
        key: 'como',
        label: 'Cómo se usa',
        description: 'Escucha, compara y elige; pocos controles permiten concentrarse en el estímulo auditivo.',
        items: ['Selecciona una categoría.', 'Reproduce o repite el sonido.', 'Elige la tarjeta correspondiente.', 'Descubre la respuesta y continúa.'],
      },
      {
        key: 'beneficios',
        label: 'Beneficios',
        description: 'Refuerza discriminación auditiva, atención, memoria y vocabulario.',
        items: ['Identificación de timbres y patrones.', 'Memoria de trabajo auditiva.', 'Asociación entre sonido y palabra.', 'Control personal del ritmo.'],
      },
      {
        key: 'contenido',
        label: 'Contenido',
        description: 'La biblioteca se organiza por entornos y aumenta gradualmente su dificultad.',
        items: ['Hogar, escuela, ciudad y naturaleza.', 'Instrumentos y onomatopeyas.', 'Sonidos contrastados o similares.', 'Nuevos paquetes temáticos.'],
      },
    ],
    color: '#3F9F5F',
    pale: '#EAF7E9',
    video: 'assets/preview-eco.mp4',
    icon: Leaf,
  },
]
