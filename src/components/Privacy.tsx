import { Baby, Camera, Database, ExternalLink, ShieldCheck } from 'lucide-react'

export function Privacy() {
  return (
    <section className="privacy section-wrap" id="privacidad">
      <div className="privacy-heading">
        <div>
          <p className="section-kicker">Privacidad por diseño</p>
          <h2>Aprender con tranquilidad.</h2>
        </div>
        <p>
          NANU está diseñada para ofrecer una experiencia educativa segura,
          clara y respetuosa con la información de niñas, niños y familias.
        </p>
      </div>

      <div className="privacy-summary">
        <div><ShieldCheck /><strong>Sin venta de datos</strong><span>No comercializamos información personal.</span></div>
        <div><Database /><strong>Datos mínimos</strong><span>Usamos solamente lo necesario para operar la experiencia.</span></div>
        <div><Camera /><strong>Permisos con propósito</strong><span>Cámara y almacenamiento se usan sólo cuando una actividad los requiere.</span></div>
        <div><Baby /><strong>Experiencia familiar</strong><span>Las decisiones sensibles deben contar con acompañamiento adulto.</span></div>
      </div>

      <div className="privacy-policy">
        <div className="privacy-policy__intro">
          <span>Política de privacidad</span>
          <h3>Cómo cuidamos tu información</h3>
          <p>Última actualización: 29 de julio de 2026</p>
        </div>
        <div className="privacy-policy__content">
          <article>
            <h4>1. Información que utilizamos</h4>
            <p>
              Este sitio informativo no incluye formularios, cuentas ni herramientas de seguimiento.
              Dentro de la aplicación, algunas actividades pueden guardar progreso o preferencias
              en el dispositivo para mantener la continuidad de aprendizaje.
            </p>
          </article>
          <article>
            <h4>2. Cámara y almacenamiento</h4>
            <p>
              Algunas experiencias pueden solicitar cámara, realidad aumentada o almacenamiento.
              El permiso se usa exclusivamente para ejecutar la función elegida y puede revocarse
              desde los ajustes del dispositivo.
            </p>
          </article>
          <article>
            <h4>3. Uso y divulgación</h4>
            <p>
              NANU no vende información personal ni la comparte con terceros para publicidad.
              Si un servicio técnico fuera indispensable, se limitaría al propósito operativo
              y a las medidas de protección correspondientes.
            </p>
          </article>
          <article>
            <h4>4. Privacidad infantil</h4>
            <p>
              La experiencia evita solicitar datos personales sensibles directamente a menores.
              Recomendamos que madres, padres o tutores acompañen el uso y administren permisos,
              compras y configuración del dispositivo.
            </p>
          </article>
          <article>
            <h4>5. Conservación y control</h4>
            <p>
              La información local permanece en el dispositivo hasta que se elimina la aplicación,
              se borran sus datos o se usa la opción correspondiente del sistema operativo.
            </p>
          </article>
          <article>
            <h4>6. Consultas</h4>
            <p>
              Para preguntas relacionadas con privacidad, permisos o eliminación de información,
              utiliza los datos de contacto disponibles en la ficha oficial de NANU en App Store.
            </p>
            <a href="https://apps.apple.com/vn/app/nanu/id6761140863" target="_blank" rel="noreferrer">
              Abrir ficha oficial <ExternalLink />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
