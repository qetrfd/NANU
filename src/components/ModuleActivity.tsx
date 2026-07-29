import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Brush,
  Check,
  CircleHelp,
  Eraser,
  Lightbulb,
  Play,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Volume2,
} from 'lucide-react'
import type { Experience } from '../data/experiences'

function DrawingStudio() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const [color, setColor] = useState('#7659D6')
  const [eraser, setEraser] = useState(false)
  const colors = ['#7659D6', '#FF6B5F', '#E9A11A', '#2E9B83', '#241B45']

  const point = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height),
    }
  }

  const start = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const context = canvas.getContext('2d')!
    const current = point(event)
    drawing.current = true
    canvas.setPointerCapture(event.pointerId)
    context.beginPath()
    context.moveTo(current.x, current.y)
  }

  const draw = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return
    const context = canvasRef.current!.getContext('2d')!
    const current = point(event)
    context.lineWidth = eraser ? 34 : 9
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.strokeStyle = eraser ? '#ffffff' : color
    context.lineTo(current.x, current.y)
    context.stroke()
  }

  const stop = () => {
    drawing.current = false
    canvasRef.current?.getContext('2d')?.beginPath()
  }

  const clear = () => {
    const canvas = canvasRef.current!
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div className="play-lab drawing-lab">
      <div className="lab-heading">
        <div><span>Estudio creativo</span><h3>Dibuja una idea imposible</h3></div>
        <p>Prueba colores, inventa formas y vuelve a empezar cuando quieras.</p>
      </div>
      <canvas
        ref={canvasRef}
        width="760"
        height="460"
        aria-label="Lienzo de dibujo libre"
        onPointerDown={start}
        onPointerMove={draw}
        onPointerUp={stop}
        onPointerCancel={stop}
      />
      <div className="drawing-tools">
        <button className={!eraser ? 'active' : ''} onClick={() => setEraser(false)} type="button"><Brush /> Pincel</button>
        <button className={eraser ? 'active' : ''} onClick={() => setEraser(true)} type="button"><Eraser /> Borrador</button>
        <div className="color-tools" aria-label="Colores">
          {colors.map((item) => (
            <button
              key={item}
              className={color === item && !eraser ? 'selected' : ''}
              style={{ backgroundColor: item }}
              onClick={() => { setColor(item); setEraser(false) }}
              type="button"
              aria-label={`Elegir color ${item}`}
            />
          ))}
        </div>
        <button onClick={clear} type="button"><RotateCcw /> Limpiar</button>
      </div>
    </div>
  )
}

type Question = { prompt: string; answer: string; options: string[]; rule: string }

function createQuestion(): Question {
  const type = Math.floor(Math.random() * 3)
  if (type === 0) {
    const start = Math.floor(Math.random() * 6) + 1
    const step = Math.floor(Math.random() * 4) + 1
    const answer = start + step * 3
    const options = new Set([answer])
    while (options.size < 4) options.add(answer + Math.floor(Math.random() * 9) - 4)
    return {
      prompt: `Completa: ${start}, ${start + step}, ${start + step * 2}, ¿?`,
      answer: String(answer),
      options: [...options].sort(() => Math.random() - 0.5).map(String),
      rule: `La secuencia aumenta de ${step} en ${step}.`,
    }
  }
  if (type === 1) {
    const a = Math.floor(Math.random() * 9) + 1
    const b = Math.floor(Math.random() * 9) + 1
    const answer = a + b
    const options = new Set([answer])
    while (options.size < 4) options.add(Math.max(0, answer + Math.floor(Math.random() * 9) - 4))
    return {
      prompt: `¿Cuánto es ${a} + ${b}?`,
      answer: String(answer),
      options: [...options].sort(() => Math.random() - 0.5).map(String),
      rule: `Al juntar ${a} y ${b} obtenemos ${answer}.`,
    }
  }
  const left = Math.floor(Math.random() * 9) + 1
  const right = Math.floor(Math.random() * 9) + 1
  const answer = left > right ? '>' : left < right ? '<' : '='
  return {
    prompt: `Compara: ${left}  ¿?  ${right}`,
    answer,
    options: ['>', '<', '='],
    rule: answer === '=' ? 'Los dos números son iguales.' : `${Math.max(left, right)} es el número mayor.`,
  }
}

function LogicGame() {
  const [question, setQuestion] = useState(createQuestion)
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  const choose = (option: string) => {
    if (picked) return
    setPicked(option)
    setScore((value) => ({ correct: value.correct + Number(option === question.answer), total: value.total + 1 }))
  }
  const next = () => {
    setQuestion(createQuestion())
    setPicked(null)
  }

  return (
    <div className="play-lab logic-lab">
      <div className="lab-heading">
        <div><span>Reto rápido · Nivel {Math.floor(score.correct / 3) + 1}</span><h3>Entrena tu cerebro</h3></div>
        <div className="score-pill">{score.correct} de {score.total} correctos</div>
      </div>
      <div className="question-card">
        <CircleHelp />
        <p>{question.prompt}</p>
        <div className="answer-grid">
          {question.options.map((option) => {
            const state = picked
              ? option === question.answer ? 'correct' : option === picked ? 'incorrect' : ''
              : ''
            return <button type="button" className={state} key={option} onClick={() => choose(option)}>{option}</button>
          })}
        </div>
        {picked && (
          <div className={`answer-feedback ${picked === question.answer ? 'is-correct' : ''}`}>
            <Lightbulb /> <span><strong>{picked === question.answer ? '¡Muy bien!' : 'Casi.'}</strong> {question.rule}</span>
          </div>
        )}
      </div>
      <button className="lab-primary" type="button" onClick={next}><RefreshCw /> Nuevo reto</button>
    </div>
  )
}

function TraceGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const points = useRef(0)
  const [numberIndex, setNumberIndex] = useState(0)
  const [message, setMessage] = useState('Sigue la guía punteada')
  const numbers = ['1', '2', '3', '4', '5']

  const drawGuide = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')!
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.font = '320px Arial Rounded MT Bold, Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.strokeStyle = 'rgba(36,27,69,.20)'
    context.lineWidth = 5
    context.setLineDash([15, 13])
    context.strokeText(numbers[numberIndex], canvas.width / 2, canvas.height / 2 + 14)
    context.setLineDash([])
    points.current = 0
    setMessage('Sigue la guía punteada')
  }

  useEffect(drawGuide, [numberIndex])

  const point = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height }
  }
  const start = (event: React.PointerEvent<HTMLCanvasElement>) => {
    drawing.current = true
    canvasRef.current!.setPointerCapture(event.pointerId)
    const current = point(event)
    const context = canvasRef.current!.getContext('2d')!
    context.beginPath()
    context.moveTo(current.x, current.y)
  }
  const draw = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return
    const current = point(event)
    const context = canvasRef.current!.getContext('2d')!
    context.strokeStyle = '#7659D6'
    context.lineWidth = 24
    context.lineCap = 'round'
    context.lineTo(current.x, current.y)
    context.stroke()
    points.current += 1
    if (points.current === 65) setMessage('¡Gran trazo! Puedes avanzar')
  }
  const stop = () => {
    drawing.current = false
    canvasRef.current?.getContext('2d')?.beginPath()
  }
  const change = (delta: number) => setNumberIndex((numberIndex + delta + numbers.length) % numbers.length)

  return (
    <div className="play-lab trace-lab">
      <div className="lab-heading">
        <div><span>Número {numberIndex + 1} de {numbers.length}</span><h3>Traza el número {numbers[numberIndex]}</h3></div>
        <p>{message}</p>
      </div>
      <canvas
        ref={canvasRef}
        width="640"
        height="430"
        aria-label={`Lienzo para trazar el número ${numbers[numberIndex]}`}
        onPointerDown={start}
        onPointerMove={draw}
        onPointerUp={stop}
        onPointerCancel={stop}
      />
      <div className="trace-controls">
        <button type="button" onClick={() => change(-1)}><ArrowLeft /> Anterior</button>
        <button type="button" onClick={drawGuide}><RotateCcw /> Borrar</button>
        <button className="lab-primary" type="button" onClick={() => change(1)}>Siguiente <ArrowRight /></button>
      </div>
    </div>
  )
}

const signChallenges = [
  { prompt: 'Saludo amable', hint: 'Abre la mano y muévela suavemente de lado a lado.', options: ['Hola', 'Gracias', 'Casa'], answer: 'Hola' },
  { prompt: 'Mostrar gratitud', hint: 'Lleva la mano desde la barbilla hacia adelante.', options: ['Amigo', 'Gracias', 'Agua'], answer: 'Gracias' },
  { prompt: 'Pedir agua', hint: 'Forma una W y toca dos veces la barbilla.', options: ['Agua', 'Comer', 'Ayuda'], answer: 'Agua' },
]

function SignsGame() {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const current = signChallenges[index]
  const next = () => { setIndex((index + 1) % signChallenges.length); setPicked(null) }

  return (
    <div className="play-lab signs-lab">
      <div className="signs-video">
        <video controls playsInline preload="metadata">
          <source src="assets/preview-signs.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="sign-challenge">
        <span>Práctica guiada · {index + 1}/{signChallenges.length}</span>
        <h3>{current.prompt}</h3>
        <p>{current.hint}</p>
        <div className="sign-options">
          {current.options.map((option) => (
            <button
              type="button"
              key={option}
              className={picked ? option === current.answer ? 'correct' : option === picked ? 'incorrect' : '' : ''}
              onClick={() => !picked && setPicked(option)}
            >
              {option} {picked && option === current.answer && <Check />}
            </button>
          ))}
        </div>
        {picked && <button className="lab-primary" type="button" onClick={next}>Siguiente práctica <ArrowRight /></button>}
      </div>
    </div>
  )
}

const soundChallenges = [
  { name: 'Pájaro', icon: '🐦', frequencies: [1100, 1450, 1200] },
  { name: 'Lluvia', icon: '🌧️', frequencies: [240, 180, 260] },
  { name: 'Campana', icon: '🔔', frequencies: [760, 980, 760] },
]

function playPattern(frequencies: number[]) {
  const AudioContextClass = window.AudioContext
  if (!AudioContextClass) return
  const audio = new AudioContextClass()
  frequencies.forEach((frequency, index) => {
    const oscillator = audio.createOscillator()
    const gain = audio.createGain()
    oscillator.type = index % 2 ? 'sine' : 'triangle'
    oscillator.frequency.value = frequency
    gain.gain.setValueAtTime(0.0001, audio.currentTime + index * .22)
    gain.gain.exponentialRampToValueAtTime(.14, audio.currentTime + index * .22 + .02)
    gain.gain.exponentialRampToValueAtTime(.0001, audio.currentTime + index * .22 + .18)
    oscillator.connect(gain).connect(audio.destination)
    oscillator.start(audio.currentTime + index * .22)
    oscillator.stop(audio.currentTime + index * .22 + .2)
  })
  window.setTimeout(() => void audio.close(), 1200)
}

function SoundGame() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * soundChallenges.length))
  const [picked, setPicked] = useState<number | null>(null)
  const challenge = soundChallenges[target]
  const next = () => { setTarget(Math.floor(Math.random() * soundChallenges.length)); setPicked(null) }

  return (
    <div className="play-lab sound-lab">
      <div className="lab-heading">
        <div><span>Reto de escucha</span><h3>¿Qué sonido escuchas?</h3></div>
        <p>Puedes reproducirlo todas las veces que necesites.</p>
      </div>
      <button className="sound-player" type="button" onClick={() => playPattern(challenge.frequencies)}>
        <span><Volume2 /></span><strong>Reproducir sonido</strong><Play fill="currentColor" />
      </button>
      <div className="sound-options">
        {soundChallenges.map((sound, index) => (
          <button
            type="button"
            key={sound.name}
            className={picked !== null ? index === target ? 'correct' : index === picked ? 'incorrect' : '' : ''}
            onClick={() => picked === null && setPicked(index)}
          >
            <span>{sound.icon}</span>{sound.name}
          </button>
        ))}
      </div>
      {picked !== null && (
        <div className="sound-result">
          <p>{picked === target ? '¡Lo reconociste!' : `Era: ${challenge.name}. Escúchalo otra vez.`}</p>
          <button className="lab-primary" type="button" onClick={next}>Otro sonido <RefreshCw /></button>
        </div>
      )}
    </div>
  )
}

const curiosityFacts = [
  'Curiosity aterrizó en Marte para estudiar si el planeta tuvo condiciones adecuadas para la vida microbiana.',
  'El rover cuenta con cámaras, un brazo robótico y un laboratorio químico dentro de su cuerpo.',
  'Sus ruedas dejan una marca en código Morse que ayuda a medir la distancia recorrida.',
  'Curiosity explora el cráter Gale y la montaña Sharp, donde las capas de roca cuentan la historia de Marte.',
]

function MuseumLab() {
  const [fact, setFact] = useState(0)
  return (
    <div className="play-lab museum-lab">
      <div className="museum-viewer">
        <model-viewer
          src="assets/curiosity.glb"
          alt="Modelo 3D del rover Curiosity"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          interaction-prompt="auto"
        />
        <span>Arrastra para girar · Pellizca para acercar</span>
      </div>
      <div className="museum-fact">
        <span><Sparkles /> Punto de descubrimiento</span>
        <h3>Curiosity, laboratorio sobre ruedas</h3>
        <p>{curiosityFacts[fact]}</p>
        <button className="lab-primary" type="button" onClick={() => setFact((fact + 1) % curiosityFacts.length)}>
          Otro dato <RefreshCw />
        </button>
      </div>
    </div>
  )
}

export function ModuleActivity({ experience }: { experience: Experience }) {
  return useMemo(() => {
    switch (experience.slug) {
      case 'caminarte': return <MuseumLab />
      case 'cerebro-logico': return <LogicGame />
      case 'senales': return <SignsGame />
      case 'trazos': return <TraceGame />
      case 'rincon-de-dali': return <DrawingStudio />
      case 'ecomagico': return <SoundGame />
      default: return null
    }
  }, [experience.slug])
}
