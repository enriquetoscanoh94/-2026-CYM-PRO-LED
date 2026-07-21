import { useEffect, useRef, useState } from 'react'

const WHATSAPP = 'https://wa.me/5215564496909?text=Hola%20CYM%20PRO%20LED%2C%20quiero%20informaci%C3%B3n'
const TEL = 'tel:+525527773341'
const EMAIL = 'mailto:cympro_54@hotmail.com'
const FACEBOOK = 'https://www.facebook.com/CYMPROLED'
const INSTAGRAM = 'https://www.instagram.com/cym.pro.54'
const YOUTUBE = 'https://www.youtube.com/channel/UCSAqHdUIk088nN3-UlJlXlw'

/* Iconos de redes con sus colores oficiales de marca */
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.4 0-1.9.9-1.9 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z" />
  </svg>
)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <defs>
      <radialGradient id="ig" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig)" />
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.3" fill="#fff" />
  </svg>
)
const IconYouTube = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path fill="#FF0000" d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5Z" />
    <path fill="#fff" d="M9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  </svg>
)
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path fill="#25D366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" />
    <path fill="#fff" d="M16.5 14.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.3-.5a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1 2.7 11.4 11.4 0 0 0 4.4 3.9 14.6 14.6 0 0 0 1.5.5 3.5 3.5 0 0 0 1.6.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3Z" />
  </svg>
)

/* Agrega la clase .visible cuando la seccion entra en pantalla */
function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
      <a href="#inicio" className="nav-logo">
        <img src="/img/logo.png" alt="CYM PRO LED" />
      </a>
      <nav className="nav-links">
        <a href="#productos">Productos</a>
        <a href="#showroom">Showroom</a>
        <a href="#compra-segura">Compra Segura</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-whatsapp nav-cta">
        WhatsApp
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <video className="hero-video" src="/video/hero.mp4" autoPlay muted loop playsInline />
      <div className="hero-overlay" />
      <div className="beam beam-1" />
      <div className="beam beam-2" />
      <div className="beam beam-3" />
      <div className="hero-content">
        <p className="hero-kicker mask-reveal">Pantallas de LED &middot; Iluminaci&oacute;n profesional</p>
        <h1 className="mask-reveal delay-1">
          ILUMINAMOS
          <br />
          <span className="text-gradient">TU EVENTO</span>
        </h1>
        <p className="hero-sub mask-reveal delay-2">
          Pantallas de LED exterior con procesadores Novastar, cabezas m&oacute;viles, wash y strobos.
          Entrega inmediata y env&iacute;os a toda la Rep&uacute;blica Mexicana.
        </p>
        <div className="hero-actions mask-reveal delay-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            Cotiza por WhatsApp
          </a>
          <a href="#productos" className="btn btn-ghost">
            Ver productos
          </a>
        </div>
        <ul className="hero-badges mask-reveal delay-3">
          <li>174 mil seguidores</li>
          <li>Garant&iacute;a 1 a&ntilde;o</li>
          <li>Certificaci&oacute;n NOM</li>
          <li>IP65 contra agua</li>
        </ul>
      </div>
    </section>
  )
}

function LedTicker() {
  const items =
    'ENVÍOS A TODA LA REPÚBLICA ● ENTREGA INMEDIATA ● GARANTÍA 1 AÑO ● CAPACITACIÓN INCLUIDA ● ASESORÍA TÉCNICA ● COMPRA SEGURA ● '
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <span>{items}</span>
        <span>{items}</span>
      </div>
    </div>
  )
}

/* ===== Ilustraciones SVG basadas en el equipo real ===== */

/* Cabeza movil beam: base + brazos (yugo) + cabeza redonda con lente
   y anillo de LEDs; la cabeza barre el haz de lado a lado (pan) */
function FixtureMovingHead() {
  return (
    <svg className="fx" viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="mhBeam" className="beamGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.6" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="mhBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b3b47" />
          <stop offset="1" stopColor="#131318" />
        </linearGradient>
        <linearGradient id="mhBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b2b35" />
          <stop offset="1" stopColor="#0e0e14" />
        </linearGradient>
      </defs>
      <rect x="76" y="140" width="68" height="30" rx="6" fill="url(#mhBase)" stroke="#050508" />
      <rect x="85" y="148" width="22" height="14" rx="2" fill="#04140c" />
      <rect className="mh-disp" x="87" y="150" width="18" height="10" rx="1" />
      <circle cx="118" cy="152" r="2.2" fill="#00e676" />
      <circle cx="126" cy="152" r="2.2" fill="#2f7bff" />
      <circle cx="134" cy="152" r="2.2" fill="#ff3b4d" />
      <g className="mh-head">
        <polygon className="mh-beam" points="99,98 121,98 150,2 70,2" fill="url(#mhBeam)" />
        <rect x="85" y="112" width="7" height="30" rx="3" fill="#20202a" />
        <rect x="128" y="112" width="7" height="30" rx="3" fill="#20202a" />
        <rect x="86" y="85" width="48" height="31" rx="11" fill="url(#mhBody)" stroke="#050508" />
        <ellipse cx="110" cy="99" rx="17" ry="10" fill="#07070d" />
        <ellipse className="mh-lens" cx="110" cy="99" rx="11" ry="6" />
        <g className="mh-ring">
          <circle cx="110" cy="88" r="1.6" fill="#ff3b4d" />
          <circle cx="121" cy="93" r="1.6" fill="#ffb020" />
          <circle cx="124" cy="99" r="1.6" fill="#00e676" />
          <circle cx="121" cy="105" r="1.6" fill="#2f7bff" />
          <circle cx="110" cy="110" r="1.6" fill="#d6249f" />
          <circle cx="99" cy="105" r="1.6" fill="#00e676" />
          <circle cx="96" cy="99" r="1.6" fill="#ffb020" />
          <circle cx="99" cy="93" r="1.6" fill="#2f7bff" />
        </g>
      </g>
    </svg>
  )
}

/* Wash: cabeza con cara de matriz de LEDs y flood ancho de color */
function FixtureWash() {
  return (
    <svg className="fx" viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="washCone" className="washGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="washBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b2b35" />
          <stop offset="1" stopColor="#0e0e14" />
        </linearGradient>
      </defs>
      <rect x="74" y="142" width="72" height="30" rx="6" fill="url(#washBase)" stroke="#050508" />
      <circle cx="120" cy="154" r="2.2" fill="#00e676" />
      <circle cx="128" cy="154" r="2.2" fill="#2f7bff" />
      <g className="wash-head">
        <polygon className="wash-cone" points="93,103 127,103 178,4 42,4" fill="url(#washCone)" />
        <rect x="86" y="116" width="7" height="28" rx="3" fill="#20202a" />
        <rect x="127" y="116" width="7" height="28" rx="3" fill="#20202a" />
        <circle cx="110" cy="101" r="26" fill="#0c0c14" stroke="#05050a" />
        <g className="wash-face">
          <circle cx="110" cy="101" r="6" fill="#00e676" />
          <circle cx="98" cy="93" r="5" fill="#2f7bff" />
          <circle cx="122" cy="93" r="5" fill="#ff3b4d" />
          <circle cx="97" cy="109" r="5" fill="#ffb020" />
          <circle cx="123" cy="109" r="5" fill="#d6249f" />
          <circle cx="110" cy="87" r="4.5" fill="#2f7bff" />
          <circle cx="110" cy="115" r="4.5" fill="#00e676" />
        </g>
      </g>
    </svg>
  )
}

/* Pantalla de LED: panel sobre soporte con contenido a color y scan */
function FixtureScreen() {
  return (
    <svg className="fx" viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="scrContent" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" stopColor="#00e676" />
          <stop offset="0.5" stopColor="#2f7bff" />
          <stop offset="1" stopColor="#ff3b4d" />
        </linearGradient>
        <pattern id="pixGrid" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="none" />
          <rect width="6" height="6" fill="none" stroke="#040406" strokeWidth="1.4" />
        </pattern>
        <clipPath id="scrClip">
          <rect x="36" y="30" width="148" height="92" rx="3" />
        </clipPath>
      </defs>
      <rect x="104" y="128" width="12" height="30" fill="#15151c" />
      <rect x="80" y="156" width="60" height="7" rx="3" fill="#20202a" />
      <rect x="30" y="24" width="160" height="104" rx="6" fill="#0a0a10" stroke="#23232d" />
      <g clipPath="url(#scrClip)">
        <rect className="scr-content" x="36" y="30" width="300" height="92" fill="url(#scrContent)" />
        <rect x="36" y="30" width="148" height="92" fill="url(#pixGrid)" opacity="0.55" />
        <rect className="scr-scan" x="0" y="30" width="46" height="92" fill="rgba(255,255,255,0.16)" />
      </g>
    </svg>
  )
}

/* Strobo MIXPRO: panel rectangular con matriz de celdas LED que destellan */
function FixtureStrobe() {
  const cells = []
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 6; c++) {
      const i = r * 6 + c
      cells.push(
        <rect
          key={i}
          className="str-cell"
          x={60 + c * 17}
          y={76 + r * 22}
          width="13"
          height="16"
          rx="2"
          style={{ animationDelay: `${c * 0.14 + r * 0.4}s` }}
        />,
      )
    }
  }
  return (
    <svg className="fx" viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="strBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b2b35" />
          <stop offset="1" stopColor="#101016" />
        </linearGradient>
      </defs>
      <rect x="56" y="58" width="10" height="30" rx="4" fill="#1a1a22" />
      <rect x="154" y="58" width="10" height="30" rx="4" fill="#1a1a22" />
      <rect x="50" y="66" width="120" height="62" rx="8" fill="url(#strBody)" stroke="#050508" />
      <g className="str-cells">{cells}</g>
    </svg>
  )
}

/* Procesador Novastar: unidad de rack con pantalla de senal, perillas y LEDs */
function FixtureProcessor() {
  return (
    <svg className="fx" viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="procBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#33333e" />
          <stop offset="1" stopColor="#121218" />
        </linearGradient>
        <linearGradient id="procSig" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#00e676" stopOpacity="0" />
          <stop offset="0.5" stopColor="#00e676" />
          <stop offset="1" stopColor="#2f7bff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="procScr">
          <rect x="40" y="90" width="48" height="24" rx="2" />
        </clipPath>
      </defs>
      <rect x="20" y="82" width="10" height="40" rx="2" fill="#20202a" />
      <rect x="190" y="82" width="10" height="40" rx="2" fill="#20202a" />
      <rect x="30" y="80" width="160" height="44" rx="5" fill="url(#procBody)" stroke="#050508" />
      <rect x="40" y="90" width="48" height="24" rx="2" fill="#050507" />
      <g clipPath="url(#procScr)">
        <rect className="proc-sig" x="40" y="90" width="26" height="24" fill="url(#procSig)" />
      </g>
      <circle cx="112" cy="102" r="8" fill="#1a1a22" stroke="#3a3a44" />
      <circle cx="136" cy="102" r="8" fill="#1a1a22" stroke="#3a3a44" />
      <circle className="proc-led" style={{ animationDelay: '0s' }} cx="162" cy="92" r="3" fill="#00e676" />
      <circle className="proc-led" style={{ animationDelay: '0.3s' }} cx="162" cy="102" r="3" fill="#2f7bff" />
      <circle className="proc-led" style={{ animationDelay: '0.6s' }} cx="162" cy="112" r="3" fill="#ffb020" />
      <circle className="proc-led" style={{ animationDelay: '0.9s' }} cx="174" cy="92" r="3" fill="#ff3b4d" />
      <circle className="proc-led" style={{ animationDelay: '1.2s' }} cx="174" cy="102" r="3" fill="#00e676" />
    </svg>
  )
}

/* Maquina de humo: cuerpo con boquilla y bocanadas de humo que suben */
function FixtureSmoke() {
  return (
    <svg className="fx" viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="smBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f2f39" />
          <stop offset="1" stopColor="#101016" />
        </linearGradient>
      </defs>
      <g className="sm-puffs">
        <circle className="sm-puff" style={{ animationDelay: '0s' }} cx="150" cy="118" r="12" />
        <circle className="sm-puff" style={{ animationDelay: '1.3s' }} cx="150" cy="118" r="10" />
        <circle className="sm-puff" style={{ animationDelay: '2.6s' }} cx="150" cy="118" r="14" />
        <circle className="sm-puff" style={{ animationDelay: '3.4s' }} cx="150" cy="118" r="9" />
      </g>
      <rect x="56" y="104" width="86" height="48" rx="6" fill="url(#smBody)" stroke="#050508" />
      <rect x="64" y="112" width="22" height="14" rx="2" fill="#04140c" />
      <rect className="mh-disp" x="66" y="114" width="18" height="10" rx="1" />
      <circle cx="96" cy="140" r="4" fill="#1a1a22" />
      <circle cx="112" cy="140" r="4" fill="#1a1a22" />
      <rect x="140" y="110" width="18" height="18" rx="2" fill="#15151c" stroke="#050508" />
      <circle cx="150" cy="119" r="5.5" fill="#0a0a10" />
    </svg>
  )
}

function Fixture({ type }) {
  switch (type) {
    case 'demo-pantalla':
      return <FixtureScreen />
    case 'demo-beam':
      return <FixtureMovingHead />
    case 'demo-wash':
      return <FixtureWash />
    case 'demo-strobo':
      return <FixtureStrobe />
    case 'demo-proc':
      return <FixtureProcessor />
    case 'demo-humo':
      return <FixtureSmoke />
    default:
      return null
  }
}

const productos = [
  {
    id: 'pantallas',
    nombre: 'Pantallas de LED',
    desc: 'Exterior 3.9mm y 5mm, planas, curvas y flex. Procesador Novastar, 6500 nits, 7680 Hz, IP65. Incluyen cases, cableado y capacitación.',
    visual: 'demo-pantalla',
  },
  {
    id: 'beam',
    nombre: 'Cabezas Móviles Beam',
    desc: 'ROMA 7R Plus con lámpara de descarga 230W, 7 prismas y librería Sharpy. Haz potente para escenarios y antros.',
    visual: 'demo-beam',
  },
  {
    id: 'wash',
    nombre: 'Wash',
    desc: 'Wash Aura con colores saturados y transiciones suaves para bañar de color escenarios, pistas y fachadas.',
    visual: 'demo-wash',
  },
  {
    id: 'strobo',
    nombre: 'Strobos',
    desc: 'MIXPRO 500W con 864 lámparas LED de 3 colores + 96 LED blanco. Secciones de cuadro de LED, teñido y flash.',
    visual: 'demo-strobo',
  },
  {
    id: 'procesadores',
    nombre: 'Procesadores de Video',
    desc: 'Procesadores Novastar VC2 y VC4 para controlar tus pantallas de LED. Resolución hasta 3840x1920, entradas HDMI y DVI.',
    visual: 'demo-proc',
  },
  {
    id: 'humo',
    nombre: 'Máquinas de Humo',
    desc: 'Máquinas de humo y niebla para realzar tus haces de luz y darle ambiente profesional a cualquier producción.',
    visual: 'demo-humo',
  },
]

function Productos() {
  return (
    <section id="productos" className="section">
      <Reveal>
        <p className="section-kicker">Lo que manejamos</p>
        <h2>
          Equipo profesional <span className="text-green">del ramo</span>
        </h2>
      </Reveal>
      <div className="product-grid">
        {productos.map((p) => (
          <Reveal key={p.id} className="product-card">
            <div className="product-visual">
              <Fixture type={p.visual} />
            </div>
            <div className="product-info">
              <h3>{p.nombre}</h3>
              <p>{p.desc}</p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="product-link">
                Cotizar &rarr;
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="product-extra">
        <p className="product-extra-lead">
          Manejamos <strong>las mejores marcas del mercado</strong> y todo para tus producciones.
        </p>
        <p>
          Adem&aacute;s de nuestro cat&aacute;logo: cases de transporte, soportes elevados, bumpers y
          todo el cableado para tu instalaci&oacute;n. <strong className="text-green">Compra 100%
          segura</strong> a trav&eacute;s de nuestras redes oficiales.
        </p>
      </Reveal>
    </section>
  )
}

const galeria = [
  { src: '/img/produccion-beams.jpg', alt: 'Cabezas móviles ROMA 7R Plus proyectando haces de colores' },
  { src: '/img/produccion-humo.jpg', alt: 'Show de luces con máquina de humo en plena producción' },
  { src: '/img/produccion-cabezas.jpg', alt: 'Batería de cabezas móviles listas para evento' },
  { src: '/img/produccion-marcas.jpg', alt: 'Beams de colores de las mejores marcas del mercado' },
  { src: '/img/showroom-globos.jpg', alt: 'Pantallas de LED encendidas en el showroom' },
  { src: '/img/showroom-cocacola.jpg', alt: 'Demo de pantallas de LED con publicidad' },
  { src: '/img/showroom-colores.jpg', alt: 'Pantallas de LED a todo color con cases CYM PRO LED' },
  { src: '/img/showroom-acuario.jpg', alt: 'Pantallas curvas de LED en demostración' },
  { src: '/img/evento-escenario.jpg', alt: 'Escenario de evento con estructura e iluminación' },
  { src: '/img/estructura-gabinetes.jpg', alt: 'Estructura trasera de gabinetes de LED' },
  { src: '/img/showroom-globos2.jpg', alt: 'Pantallas de LED de gran formato' },
  { src: '/img/showroom-logo.jpg', alt: 'Showroom CYM PRO LED' },
]

function Carousel({ items }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = items.length
  const go = (i) => setIndex((i + count) % count)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 4500)
    return () => clearInterval(id)
  }, [paused, count])

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-stage">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((foto) => (
            <figure className="carousel-slide" key={foto.src}>
              <img src={foto.src} alt={foto.alt} loading="lazy" />
              <figcaption>{foto.alt}</figcaption>
            </figure>
          ))}
        </div>
        <button className="carousel-arrow prev" onClick={() => go(index - 1)} aria-label="Anterior">
          &#8249;
        </button>
        <button className="carousel-arrow next" onClick={() => go(index + 1)} aria-label="Siguiente">
          &#8250;
        </button>
        <div className="carousel-counter">
          <span>{String(index + 1).padStart(2, '0')}</span> / {String(count).padStart(2, '0')}
        </div>
      </div>
      <div className="carousel-thumbs">
        {items.map((foto, i) => (
          <button
            key={foto.src}
            className={`carousel-thumb ${i === index ? 'active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Ver foto ${i + 1}`}
          >
            <img src={foto.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}

function Showroom() {
  return (
    <section id="showroom" className="section">
      <Reveal>
        <p className="section-kicker">Nuestra bodega</p>
        <h2>
          Ven y m&iacute;ralo <span className="text-green">encendido</span>
        </h2>
        <p className="section-sub">
          Todo nuestro equipo est&aacute; en existencia. Agenda tu visita al showroom y comprueba la
          calidad de imagen antes de comprar, o pide una demostraci&oacute;n en video por WhatsApp.
        </p>
      </Reveal>
      <Reveal>
        <Carousel items={galeria} />
      </Reveal>
    </section>
  )
}

const confianza = [
  {
    titulo: 'WhatsApp directo',
    desc: 'Cotiza y compra con atención personal. Te mandamos video del equipo funcionando antes de tu compra.',
    link: { href: WHATSAPP, texto: '+52 1 55 6449 6909' },
  },
  {
    titulo: 'Llámanos',
    desc: 'Atención directa por teléfono para resolver todas tus dudas técnicas.',
    link: { href: TEL, texto: '+52 55 2777 3341' },
  },
  {
    titulo: 'Correo',
    desc: 'Escríbenos para cotizaciones formales y facturación.',
    link: { href: EMAIL, texto: 'cympro_54@hotmail.com' },
  },
  {
    titulo: 'Redes oficiales',
    desc: 'Cuenta verificada de Facebook con 174 mil seguidores y recomendación del 100% de nuestros clientes.',
    link: { href: FACEBOOK, texto: 'facebook.com/CYMPROLED' },
  },
  {
    titulo: 'Envíos a todo México',
    desc: 'Enviamos a toda la República Mexicana con empaque profesional en cases de transporte.',
    link: null,
  },
  {
    titulo: 'Garantía real',
    desc: '1 año de garantía, certificación NOM y protección IP65. Capacitación y asesoría técnica incluidas.',
    link: null,
  },
]

function CompraSegura() {
  return (
    <section id="compra-segura" className="section section-dark">
      <Reveal>
        <p className="section-kicker">Compra segura</p>
        <h2>
          Compra con <span className="text-green">total confianza</span>
        </h2>
        <p className="section-sub">
          Todo para tus producciones, con <strong className="text-green">compra 100% segura</strong>{' '}
          &uacute;nicamente a trav&eacute;s de nuestras redes oficiales. Cuenta verificada, WhatsApp,
          llamada, correo y env&iacute;os a todo M&eacute;xico.
        </p>
      </Reveal>
      <div className="trust-grid">
        {confianza.map((item) => (
          <Reveal key={item.titulo} className="trust-card">
            <h3>{item.titulo}</h3>
            <p>{item.desc}</p>
            {item.link && (
              <a href={item.link.href} target="_blank" rel="noreferrer">
                {item.link.texto}
              </a>
            )}
            {item.titulo === 'Redes oficiales' && (
              <div className="socials socials-row">
                <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"><IconFacebook /></a>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram /></a>
                <a href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="YouTube"><IconYouTube /></a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"><IconWhatsApp /></a>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="beam beam-1" />
      <div className="beam beam-3" />
      <Reveal>
        <h2>
          &iquest;Listo para hacer brillar
          <br />
          <span className="text-gradient">tu proyecto?</span>
        </h2>
        <p>Entrega inmediata. Te asesoramos para armar el equipo ideal seg&uacute;n tu presupuesto.</p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-big">
          Cotizar ahora por WhatsApp
        </a>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer-grid">
        <div>
          <img src="/img/logo.png" alt="CYM PRO LED" className="footer-logo" />
          <p className="footer-desc">
            Venta de pantallas de LED e iluminaci&oacute;n profesional para eventos en M&eacute;xico.
          </p>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp: +52 1 55 6449 6909</a>
          <a href={TEL}>Tel: +52 55 2777 3341</a>
          <a href={EMAIL}>cympro_54@hotmail.com</a>
        </div>
        <div>
          <h4>Redes oficiales</h4>
          <div className="socials">
            <a href={FACEBOOK} target="_blank" rel="noreferrer" className="social" aria-label="Facebook">
              <IconFacebook />
              <span>Facebook</span>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="social" aria-label="Instagram">
              <IconInstagram />
              <span>Instagram</span>
            </a>
            <a href={YOUTUBE} target="_blank" rel="noreferrer" className="social" aria-label="YouTube">
              <IconYouTube />
              <span>YouTube</span>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="social" aria-label="WhatsApp">
              <IconWhatsApp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} CYM PRO LED. Todos los derechos reservados.</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LedTicker />
        <Productos />
        <Showroom />
        <CompraSegura />
        <CtaFinal />
      </main>
      <Footer />
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="fab-whatsapp" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.3-.5a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1 2.7 11.4 11.4 0 0 0 4.4 3.9 14.6 14.6 0 0 0 1.5.5 3.5 3.5 0 0 0 1.6.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3Z" />
        </svg>
      </a>
    </>
  )
}
