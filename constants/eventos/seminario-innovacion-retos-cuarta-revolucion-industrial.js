
const path = '/eventos/seminario-innovacion-retos-cuarta-revolucion-industrial'

export const sideItems = [
  {
    label: 'Inicio',
    url: '#content',
    image: <svg className="icon icon-tabler icon-tabler-home-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <polyline points="5 12 3 12 12 3 21 12 19 12" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
      <rect height="4" width="4" x="10" y="12" />
    </svg>

  },
  {
    label: 'Descripción',
    url: '#descripcion',
    image: <svg className="icon icon-tabler icon-tabler-question-mark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
      <line x1="12" x2="12" y1="19" y2="19.01" />
    </svg>

  },
  {
    label: 'Ejes temáticos',
    url: '#ejes-tematicos',
    image: <svg className="icon icon-tabler icon-tabler-presentation-analytics" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M9 12v-4" />
      <path d="M15 12v-2" />
      <path d="M12 12v-1" />
      <path d="M3 4h18" />
      <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
      <path d="M12 16v4" />
      <path d="M9 20h6" />
    </svg>
  },
  {
    label: 'Agenda',
    url: '#agenda',
    image: <svg className="icon icon-tabler icon-tabler-calendar-time" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
      <circle cx="18" cy="18" r="4" />
      <path d="M15 3v4" />
      <path d="M7 3v4" />
      <path d="M3 11h16" />
      <path d="M18 16.496v1.504l1 1" />
    </svg>

  },
  {
    label: 'Organizadores',
    url: '#organizadores',
    image: <svg className="icon icon-tabler icon-tabler-briefcase" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <rect height="13" rx="2" width="18" x="3" y="7" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <line x1="12" x2="12" y1="12" y2="12.01" />
      <path d="M3 13a20 20 0 0 0 18 0" />
    </svg>

  },
  {
    label: 'Patrocinadores',
    url: '#patrocinadores',
    image: <svg className="icon icon-tabler icon-tabler-ticket" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <line x1="15" x2="15" y1="5" y2="7" />
      <line x1="15" x2="15" y1="11" y2="13" />
      <line x1="15" x2="15" y1="17" y2="19" />
      <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
    </svg>
  },
  {
    label: 'Objetivos',
    url: '#objetivos',
    image: <svg className="icon icon-tabler icon-tabler-link" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
    </svg>

  },

  // {
  //   label: 'Ponentes',
  //   url: '#ponentes',
  //   image: <svg className="icon icon-tabler icon-tabler-speakerphone" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M0 0h24v24H0z" fill="none" stroke="none" />
  //     <path d="M18 8a3 3 0 0 1 0 6" />
  //     <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
  //     <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
  //   </svg>

  // },
  // {
  //   label: 'Descarga las ponencias',
  //   url: '#expositions',
  //   image: <svg className="icon icon-tabler icon-tabler-file-search" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M0 0h24v24H0z" fill="none" stroke="none" />
  //     <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  //     <path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" />
  //     <circle cx="16.5" cy="17.5" r="2.5" />
  //     <line x1="18.5" x2="21" y1="19.5" y2="22" />
  //   </svg>

  // },
  // {
  //   label: 'Regístrate',
  //   url: '#registro',
  //   image: <svg className="icon icon-tabler icon-tabler-file-search" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M0 0h24v24H0z" fill="none" stroke="none" />
  //     <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  //     <path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" />
  //     <circle cx="16.5" cy="17.5" r="2.5" />
  //     <line x1="18.5" x2="21" y1="19.5" y2="22" />
  //   </svg>

  // },
  {
    label: 'Fotos del Evento',
    url: '#photos',
    image: <svg className="icon icon-tabler icon-tabler-photo" fill="none" stroke="#2c3e50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
    <line x1="15" x2="15.01" y1="8" y2="8" />
    <rect height="16" rx="3" width="16" x="4" y="4" />
    <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
    <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
  </svg>

  },

  {
    label: 'Lugar del evento',
    url: '#ubicacion',
    image: <svg className="icon icon-tabler icon-tabler-map-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <line x1="18" x2="18" y1="6" y2="6.01" />
      <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
      <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
      <line x1="9" x2="9" y1="4" y2="17" />
      <line x1="15" x2="15" y1="15" y2="20" />
    </svg>

  },
]

export const sponsors = [
  {
    title: 'Logo del Ministerio de Energía y Minas',
    image: '/eventos/foro-internacional-prospectiva-energetica/ministerio-energia-minas.jpg',
  },
]

export const organizers = [
  {
    title: 'Logo de la Universidad Central',
    image: '/UCE-logo.png',
  },
  {
    title: 'Logo de la FIGEMPA',
    image: '${path}/sponsors/figempa.png',
  },
  {
    title: 'Logo de Ingeniería en Petróleos de Universidad Central del Ecuador',
    image: '${path}/sponsors/petroleos-uce.png',
  },
]

export const programItems = [
  {
    time: 'Lunes 2 de diciembre, 08H30 - 09H00',
    label: 'Registro',
    expositor: 'Auditorio Máster del Centro de Información Integral',
    institution: 'Universidad Central del Ecuador',
  },
  {
    time: '09H00 - 09H40',
    label: 'Ceremonia de Inauguración',
    expositor: 'Gustavo Pinto Arteaga',
    institution: 'Decano de la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental. Universidad Central del Ecuador.'
  },
  {
    expositor: 'José Augusto Briones',
    institution: 'Ministro de Energía y Recursos Naturales No Renovables',
  },
  {
    expositor: 'Fernando Sempértegui O.',
    institution: 'Rector de la Universidad Central del Ecuador',
  },
  {
    time: '09H40 - 10H20',
    label: 'Conferencia magistral. Tema: Transición hacia la cuarta revolución industrial',
    expositor: 'Carlos Maynor',
    institution: 'Universidad Nacional Autónoma de México',
  },
  {
    time: '10H20 - 11H00',
    label: 'Conferencia magistral. Tema: Perspectivas de la gestión energética en el contexto regional y global',
    expositor: 'Alfonso Blanco',
    institution: 'Uruguay. Secretario Ejecutivo de OLADE',
  },
  {
    time: '11H00 - 11H30',
    label: 'Receso',
  },
  {
    time: '11H30 - 13H00',
    label: 'Sesión 1: Visión del sector energético hacia la transformación digital',
    expositor: 'Javier Goyes',
    institution: 'Director de Análisis de Información Estratégica de Hidrocarburos. Ministro de Energía y Recursos Naturales No Renovables',
  },
  {
    expositor: 'Fernando Benalcázar',
    institution: 'Presidente Society Petroleum Enginners Ecuador Section ',
  },
  {
    expositor: 'Susan Velasco',
    institution: 'Miembro del Grupo de Políticas Públicas Comparadas de la Asociación Latinoamericana de Ciencia Política ALACIP',
  },
  {
    time: '13H00 - 14H00',
    label: 'Almuerzo (Salón 2)',
  },
  {
    time: '14H00 - 15H30',
    label: 'Sesión 2: Investigación y Desarrollo',
    expositor: 'Andrés Mantilla',
    institution: 'Director Ejecutivo del Instituto Colombiano del Petróleo - ICP',
  },
  {
    expositor: 'Gina Maestre',
    institution: 'Investigadora de Colciencias - Universidad Cooperativa de Colombia',
  },
  {
    expositor: 'Ronny Parra',
    institution: 'Instituto de Investigaciones Hidrocarburíferas - Universidad Central del Ecuador',
  },
  {
    time: '15H30 - 16H00',
    label: 'Receso',
  },
  {
    time: '16H00 - 18H00',
    label: 'Sesión 3: Innovación tecnológica',
    expositor: 'Savio Lima',
    institution: 'Gerente General de Halliburton - Ecuador',
  },
  {
    expositor: 'CELEC EP',
  },
  {
    expositor: 'Ramiro Páez',
    institution: 'Gerente General de Repsol - Ecuador',
  },
  {
    expositor: 'Pablo Flores',
    institution: 'Gerente General de EP Petroecuador',
  },
  {
    time: 'Martes 3 de diciembre, 08H30 - 09H00',
    label: 'Registro de participantes',
  },
  {
    time: '09H00 - 11H00',
    label: 'Sesión 4: Retos y escenarios del sector energético',
    expositor: 'Martín Cordovez',
    institution: 'Director del Instituto de Investigación Geológico Energético - Ecuador',
  },
  {
    expositor: 'Jefferson Jiménez',
    institution: 'Agencia de Regulación y Control de Electricidad - Ecuador',
  },
  {
    expositor: 'Bernardo Traversari',
    institution: 'Gerente General de SERTECPEC - Ecuador',
  },
  {
    expositor: 'Lenín Pozo',
    institution: 'Gerente General de Petroamazonas EP',
  },
  {
    time: '11H00 - 12H00',
    label: 'Mesas de trabajo: Definición de una agenda común entre actores de instituciones públicas, empresas privadas y academia',
    expositor: 'Instituciones públicas',
  },
  {
    expositor: 'Empresas privadas',
  },
  {
    expositor: 'Academia',
  },
  {
    time: '12H00 - 13H00',
    label: 'Ceremonia de clausura',
    expositor: 'José Augusto Rosero',
    institution: 'Director de Doctorados e Innovación de la Universidad Central del Ecuador',
  },
  {
    expositor: 'Jackson Torres',
    institution: 'Viceministro de Producción e Industrias',
  },
  {
    expositor: 'María Mercedes Gavilánez',
    institution: 'Vicerrectora de Investigación, Doctorados e Innovación de la Universidad Central del Ecuador',
  },
]

export const speakers = [
  {
    name: 'PhD. Nazarychev Alexander Nikolaevich',
    image: `${path}/speakers/Nazarychev-Alexander-Nikolaevich.png`,
    role: 'Profesor del Departamento de Energía Eléctrica y Electromecánica',
    institute: 'Universidad de Minería de San Petersburgo'
  },
  {
    name: 'Ing. Enith Carrión, MSc',
    image: `${path}/speakers/Enith-Carrion.png`,
    role: 'Viceministra de Electricidad y Energía Renovable',
    institute: 'Ministerio de Energía y Minas'
  },
  {
    name: 'Ing. Medardo Cadena, MSc',
    image: `${path}/speakers/Medardo-Cadena.png`,
    role: 'Director de Estudios, Proyectos e Información',
    institute: 'Organización Latinoamericana de Energía'
  },
  {
    name: 'Ing. Ignacio Sagradoy, MSc',
    image: `${path}/speakers/Ignacio-Sagradoy.png`,
    role: 'Investigador',
    institute: 'Fundación Bariloche',
  },
  {
    name: 'Ing. Juan I. Navarrete, MSc',
    image: `${path}/speakers/Juan-I-Navarrete.png`,
    role: 'Director de Políticas y Programas',
    institute: 'Comisión para el Uso Eficiente de la Energía',
  },
  {
    name: 'Ing. Rony Parra, PhD',
    image: '/integrantes/Rony-Parra.png',
    role: 'Director Instituto de Investigaciones Hidrocarburíferas',
    institute: 'Universidad Central del Ecuador'
  },
  {
    name: 'Ing. Francisco Terneus, PhD(c) ',
    image: `${path}/speakers/Francisco-Terneus.png`,
    role: 'Docente Facultad de Ciencias Administrativas',
    institute: 'Escuela Politécnica Nacional'
  },
  {
    name: 'Ing. Ghem Carvajal, MSc',
    image: '/integrantes/Ghem-Carvajal.png',
    role: 'Facultad de Ingeniería Química',
    institute: 'Universidad Central del Ecuador'
  },
  {
    name: 'Rafael Espinoza',
    image: `${path}/speakers/Rafael-Espinoza.png`,
    role: 'Socio',
    institute: 'McKinsey & Company',
  },
  {
    name: 'Moderadora: Rebeca Illescas',
    image: `${path}/speakers/Rebeca-Illescas.png`,
    role: 'Consultora en Energía y Desarrollo',
    institute: null,
  },
]

const expos = '/eventos/foro-internacional-prospectiva-energetica/expositions'

export const expositions = [
  {
    title: 'Seguridad y sostenibilidad de los sistemas futuros de energía (fósil y electricidad)',
    image: `${path}/speakers/Nazarychev-Alexander-Nikolaevich.png`,
    // url: '',
    expositor: 'PhD. Nazarychev Alexander Nikolaevich',
    role: 'Profesor del Departamento de Energía Eléctrica y Electromecánica - Universidad de Minería de San Petersburgo',
    download: `${expos}/01_Презентация_Назарычев_АН_23.11.2022.pdf`,
  },
  {
    title: 'Visión a largo plazo del sistema energético de Ecuador',
    image: `${path}/speakers/Enith-Carrion.png`,
    // url: '',
    expositor: 'Ing. Enith Carrión, MSc',
    role: 'Viceministra de Electricidad y Energía Renovable - Ministerio de Energía y Minas',
    download: `${expos}/02_PRESENTACION_CONGRESO_UCENTRAL_23-11-2022.pdf`,
  },
  {
    title: 'Visualización y retos de la transición energética en ALC a mediano y largo plazo (uso de herramientas de prospectiva de OLADE)',
    image: `${path}/speakers/Medardo-Cadena.png`,
    // url: '',
    expositor: 'Ing. Medardo Cadena, MSc',
    role: 'Director de Estudios, Proyectos e Información - Organización Latinoamericana de Energía (OLADE)',
    download: `${expos}/03U_Presentación_OLADE.pdf`,
  },
  {
    title: 'Prospectiva energética para el Ecuador con MuSIASEM o Multi-Scale Integrated Analysis and Ecosystem Metabolism',
    image: '/integrantes/Rony-Parra.png',
    // url: '',
    expositor: 'Ing. Rony Parra, PhD',
    role: 'Director Instituto de Investigaciones Hidrocarburíferas IIH - Universidad Central del Ecuador',
    download: `${expos}/05_PPT_IIH_23-11-2022.pdf`,
  },
  {
    title: 'Visión a largo plazo del sistema energético (oferta y demanda de combustibles y electricidad) con la transformación del mercado hacia equipos energéticamente eficientes.',
    image: `${path}/speakers/Ignacio-Sagradoy.png`,
    // url: '',
    expositor: 'Ing. Ignacio Sagardoy, MSc',
    role: 'Investigador - Fundación Bariloche de Argentina',
    download: `${expos}/06_2022_11_Presentacion_Ecuador.pdf`,
  },
  {
    title: 'Estudio de prospectiva en el sector transporte de Ecuador',
    image: `${path}/speakers/Francisco-Terneus.png`,
    // url: '',
    expositor: 'Ing, Francisco Terneus, PhD(c)',
    role: 'Facultad de Ciencias Administrativas - Escuela Politécnica Nacional',
    download: `${expos}/07_Foro_Prospectiva_Energetica_171122_1800.pdf`,
  },
  {
    title: 'Modelo de prospectiva energética para México',
    image: `${path}/speakers/Juan-I-Navarrete.png`,
    // url: '',
    expositor: 'Ing. Juan I. Navarrete, MSc',
    role: 'Director de Políticas y Programas - Comisión Nacional para el Uso Eficiente de la Energía (CONUEE-SENER)',
    download: `${expos}/08_ProspectivaMX_Ecuador.pdf`,
  },
  {
    title: 'Tasas biofísicas de retorno energético en el uso de biocombustibles para el Ecuador',
    image: '/integrantes/Ghem-Carvajal.png',
    // url: '',
    expositor: 'Ing. Ghem Carvajal, MSc',
    role: 'Facultad de Ingeniería Química - Universidad Central del Ecuador',
    download: `${expos}/09_tre_biocombustibles_nov22.pdf`,
  },
]
