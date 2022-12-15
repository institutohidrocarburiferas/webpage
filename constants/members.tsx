export interface Equipo {
  name: string
  image: string,
  role: string,
  title: string | JSX.Element | null,
  description: string[]
}

// Spanish Version
export const equipo: Equipo[] = [
  {
    name: 'Ing. Rony Parra, PhD',
    image: '/integrantes/Rony-Parra.png',
    role: 'Director del Instituto',
    title: 'Estudio de la energía en sistemas complejos desde el análisis biofísico',
    description: ['Es profesor/investigador de la Universidad Central del Ecuador, con experiencia adicional en la gestión y formulación de políticas públicas aplicadas en el sector energético del Ecuador. Fue investigador doctoral en el ICTA-UAB de 2015 a 2020, mi investigación doctoral analizó las RESTRICCIONES BIOFÍSICAS DE LOS SISTEMAS DE ENERGÍA FÓSIL-ESTUDIANDO EL METABOLISMO DE LA EXTRACCIÓN DE PETRÓLEO DE ECUADOR. Durante este tiempo también fue investigador en el proyecto "Moving towards Adaptive Governance in Complexity: Informing Nexus Security" (MAGIC) en la Unión Europea. Anteriormente, obtuvo una Maestría en Gobernanza Energética de la Facultad Latinoamericana de Ciencias Sociales-FLACSO y una Ingeniería de Petróleo de la Universidad Central del Ecuador. Autor de varios artículos científicos sobre sostenibilidad, energía y petróleo; Su interés de investigación se basa en ampliar el conocimiento sobre la relación de la sociedad, la economía y los ecosistemas para el aprovechamiento de recursos energéticos.']
  },
  {
    name: 'Ing. Génesis Yánez',
    image: '/integrantes/Genesis-Yanez.png',
    role: 'Técnica de investigación',
    title: null,
    description: ['Ingeniera Ambiental graduada en la Universidad Central del Ecuador, con un Diplomado en Economía Circular de la Universidad del Medio Ambiente, México. Actualmente, se desempeña como Técnica de Investigación del Instituto de Investigaciones Hidrocarburíferas de la Universidad Central del Ecuador, en las áreas de sostenibilidad y teledetección. Forma parte de equipos de investigación multidisciplinarios enfocados al análisis de consumo de energía y cuantificación de servicios ambientales. Su área de investigación está enfocada al estudio de la reflectancia espectral e imágenes satelitales.'],
  },
  {
    name: 'Ing. Fernando Lucero, MSc.',
    image: '/integrantes/Fernando-Lucero.png',
    role: 'Docente Investigador',
    title: null,
    description: [
      'Docente de la Carrera de Petróleos y Coordinador de la Unidad de Titulación en la Universidad Central del Ecuador. Fue secretario de SPE Sección Ecuador durante el período 2020-2022 y en la actualidad es el Faculty Advisor de la Sección Ecuador.',

      'Es Ingeniero de Petróleos por la Universidad Central del Ecuador y Máster de Petróleos por la Universidad de Miskolc-Hungría con experiencia en la industria petrolera en el área de producción y levantamiento artificial en operaciones de campo para la empresa pública y privada. Ha participado en varios congresos relacionados con la energía y la transición energética. Su interés es trabajar en temas relacionados a prospectiva energética y proyectos de Captura y Almacenamiento de Carbono.'
    ]
  },
  {
    name: 'Ing. Luis Mejía, MSc.',
    image: '/integrantes/Luis-Mejia.png',
    role: 'Docente Investigador',
    title: null,
    description: ['Es profesor de la Universidad Central del Ecuador, obtuvo un título de Ingeniero de Petróleos en la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental de la Universidad Central del Ecuador y una Maestría en Salud y Seguridad Ocupacional con mención en Prevención de Riesgos Laborales de la Universidad Internacional SEK. Posee experiencia como Ingeniero de Operaciones en el área de perforación y reacondicionamiento de pozos; Técnico de Seguridad en programas de identificación, medición, evaluación y control de los riesgos laborales. Adicionalmente, se encuentra coordinando el programa de Maestría en Ingeniería de Petróleos con mención en Recuperación Mejorada.']
  },
  {
    name: 'Ing. Christian Mejía E., PhD(c)',
    image: '/integrantes/Christian-Mejia-Escobar.png',
    role: 'Docente Investigador',
    title: null,
    description: ['Docente en las áreas de Software y Estadística de la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental de la Universidad Central del Ecuador desde el 2013. Recibió el título de Ingeniero de Sistemas de Computación e Informática de la Escuela Politécnica Nacional (EPN), Quito, Ecuador, en 1999, y el título de Maestría en Ciencias de la Computación, del Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV), México D.F., México, en 2007. Actualmente cursa un doctorado en Informática de la Universidad de Alicante, España. Su investigación se centra en el uso de Deep Learning en tareas de visión por computadora. Autor y revisor de varios artículos científicos sobre Computación, Inteligencia Artificial, Redes Neuronales Artificiales, Machine Learning y Geoestadística aplicadas a problemas de Ciencias de la Tierra y aprovechamiento de recursos naturales.']
  },
]

export const investigadores: Equipo[] = [
  {
    name: 'Ing. Susana Arciniegas, PhD',
    image: '/integrantes/Susana-Arciniegas-Ortega.png',
    role: 'Docente Investigador',
    // https://orcid.org/0000-0002-0878-2612
    title: <a href='https://geotecambiente5.wixsite.com/geotecambiente/miembros' rel="noreferrer" style={{color: 'blue'}}target="_blank">Grupo de Investigación</a>,
    description: [
      'Docente-Investigadora en la Carrera de Ingeniería Ambiental de la Facultad de Geología, Minas, Petróleo y Ambiental, Universidad Central del Ecuador. Así como, profesora en posgrado en Universidad Nacional de Loja, Universidad del Azuay, Universidad de Posgrado del Estado-IAEN.',

      'Directora del grupo de investigación "Geotecnologías aplicadas a Ciencias Ambientales".',

      'Miembro de la "Red Latinoamericana de Ciencias Ambientales".',

      'Coordinadora de la Comisión de Investigación de la Facultad de Geología, Minas, Petróleo y Ambiental, Universidad Central del Ecuador.',

      'Líneas de investigación: Cambio Climático, Epidemiología Ambiental, Modelización aplicada a Ciencias de la Tierra y Ciencias Ambientales.',
    ]
  },
  {
    name: 'Ing. Gustavo Pinto, MSc.',
    image: '/integrantes/Gustavo-Pinto-Arteaga.png',
    role: 'Docente Investigador',
    title: null,
    description: [
      'Gustavo Pinto Arteaga, Ingeniero de Petróleos de la Universidad Central del Ecuador, tiene un Diplomado Superior en Alta Gerencia de Negociación Petrolera, Especialización en Administración y Control de la Contaminación Ambiental y Maestría en Producción de Hidrocarburos. Fue Ingeniero del Departamento de Ingeniería de Petróleos del Consorcio CEPE – Texaco. Se desempeñó como Consultor. Asesor Técnico y Gerente General de varias empresas consultoras y de asistencia técnica para las industrias petrolera y minera.',

      'Ha sido Profesor de programas en Maestría en varias Universidades del Ecuador, participado en congresos y dictado conferencias en algunos países, ha publicado textos y artículos en revistas indexadas y merecedor de un sinnúmero de reconocimientos por su gestión y Diplomas al Mérito Científico. Actualmente es Director General - Editor de la revista FIGEMPA: Investigación y Desarrollo y se desempeña como Decano de la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental de la Universidad Central del Ecuador.'
    ]
  },
  {
    name: 'Blgo. Felix D. Andueza L., PhD.',
    image: '/integrantes/Felix-Daniel-Andueza.png',
    role: 'Docente Investigador',
    title: null,
    description: ['Es profesor/investigador de la carrera de Ingeniería Ambiental de la FIGEMPA-Universidad Central del Ecuador. Biólogo con maestría en Biologia Molecular y Fermentaciones, Diploma de Estudios Avanzado en Microbiología y PhD en Microbiología y Parasitología por la Universidad Complutense de Madrid, España. Ha sido profesor investigador de la Escuela Superior Politecnica del Chimborazo (Ecuador) y de la Universidad de los Andes (Venezuela). Profesor invitado de la Universidad de la Salle (Colombia). Investigador en el area de la Microbiología y Biotecnología, acreditado como investigador Agregado II en el RNI-SENESCYT (Ecuador), investigador senior en el CONCYTEC (Perú) e investigador PPI Nivel B del FONACIT (Venezuela). Miembro del Comité Científico de la Universidad Central del Ecuador. Director del grupo de investigaciones en Microbiología y Biotecnología Aplicada de la FIGEMPA-UCE. Ha dirigido más de 100 tesis de doctorado, maestría y grado. Autor y coautor de más de 80 publicaciones académicas y de más de 300 ponencias en eventos nacionales e internacionales. Director de 30 proyectos de investigación científica nacionales e internacionales en el area de la Microbiología y Biotecnología. Miembro del comité editorial de la revista FIGEMPA. Evaluador de proyectos de investigación científica de DI-UCE, IIV-ESPOCH, DI-UNACH, DI-UTA, DI-UC, CEDIA, REDU, OIE, COLCIENCIA, CDCHT-ULA.']
  },
  {
    name: 'Ing. Teresa Palacios, PhD(c)',
    image: '/integrantes/Teresa-Palacios-Cabrera.png',
    role: 'Docente Investigador',
    title: null,
    description: [
      'Directora de la Carrera de Ingeniería Ambiental de la Facultad de Geología, Minas, Petróleos y Ambiental desde el 2019 hasta la actualidad. Docente a tiempo completo e investigadora de la Universidad Central del Ecuador desde 2014. Candidata a Doctora de la Universidad de Alicante (España), su investigación se centra en el abandono de las zonas agrícolas tradicionales y su impacto en la respuesta hidrológica de una cuenca mediterránea bajo condiciones climáticas semiáridas. Caso de estudio la cuenca vertiente al embalse del río Guadalest, sur este de España.',

      'Desde el año 2003 hasta el 2012, trabajó en el Ministerio del Ambiente en la Subsecretaría de Calidad Ambiental y la Subsecretaría de Cambio Climático, en esta última en calidad de Coordinadora de la Autoridad Nacional para proyectos de un mecanismo de desarrollo limpio, punto focal por el Ecuador al Panel Intergubernamental de Expertos sobre Cambio Climático. Anteriormente trabajó en calidad de consultora ambiental y en la construcción del inventario de emisiones de gases de efecto invernadero en el sector residuos. Ingeniera Química de la Universidad Central del Ecuador, cuenta con una maestría en Gestión y Auditorías Ambientales con énfasis en el manejo integral del agua de la Universidad de Catalunya de España y la Universidad Central del Ecuador. Autora de varios artículos y documentos científicos sobre diversas problemáticas ambientales, en especial de cambio climático y recursos hídricos. Sus investigaciones se enfocan en el tema de cambio de uso de suelo, modelación hidrológica y cambio climático.']
  },
  {
    name: 'Blgo. Byron Medina, PhD(c)',
    image: '/integrantes/Byron-Medina-Torres.png',
    role: 'Docente Investigador',
    title: 'Estudio de la distribución, conservación y restauración ecológica de ecosistemas del Ecuador.',
    description: ['Docente e investigador de la Universidad Central del Ecuador desde 2014. Doctorante de la Universidad católica de Louvain-la-Neuve (Bélgica), su investigación se centra en los efectos de la intervención humana sobre los páramos y ensayos de restauración. Anteriormente, fue parte del equipo del Ministerio del Ambiente del Ecuador que desarrolló, escribió y editó el Sistema de Clasificación de los Ecosistemas del Ecuador continental. Posee una licenciatura en Ciencias Biológicas de la Universidad Central del Ecuador y una maestría de la Universidad Internacional Menéndez Pelayo de España. Autor y editor de varios artículos y documentos científicos sobre registros de especies, bases de datos de vegetación, efectos de la intervención humana en los ecosistemas y estado de conservación y restauración de ecosistemas del Ecuador. Sus investigaciones se enfocan en distribución de especies y ecosistemas, así como su respuesta a acciones humanas y su restauración ecológica.']
  },
  {
    name: 'Ing. Javier Miranda, MSc.',
    image: '/integrantes/Javier-Miranda.png',
    role: 'Docente Investigador',
    title: null,
    description: ['Ingeniero de Petróleos graduado en la Universidad Central del Ecuador, cuenta con una Maestría en Producción e Industrialización de Hidrocarburos por la Universidad UTE. Actualmente, se desempeña como Técnico Docente de la Carrera de Petróleos de la Universidad Central del Ecuador. Ha publicado y presentado artículos en la revista Petróleo y Gas, de la Asociación de la lndustria Hidrocarburífera del Ecuador (AIHE), en el Enhanced Oil Recovery Technology Collaboration Programme 2019 de la Agencia Internacional de Energía (IEA), en el Latin American and Caribbean Petroleum Engineering Conference 2020 de la Sociedad de Ingenieros Petroleros (SPE), y en la Revista FIGEMPA: Investigación y Desarrollo. Su área de investigación está enfocada al modelamiento estático y dinámico de yacimientos petroleros.']
  },
  {
    name: 'Ing. Carlos Carrillo, MSc.',
    image: '/integrantes/Carlos-Carrillo.png',
    role: 'Investigador asociado',
    title: 'Integración de procesos hidrocaburíferos y energéticos con ciencia de datos y desarrollo de algoritmos en lenguaje de programación Python y R para análisis de la información.',
    description: ['Es Ingeniero de Implementación Digital de activos en la empresa Schlumberger, fue profesor de las carreras de Desarrollo de Software y Redes y Telecomunicaciones, donde se desempeñó como líder de investigación y director de vinculación con la sociedad en el Instituto Tecnológico Superior Quito Metropolitano. En la Universidad IEXE – México obtuvo el grado de Máster en Tecnologías de la Información y Comunicación. En Ecuador obtuvo una Ingeniera de Petróleo en la Universidad Central del Ecuador. Es Investigador independiente y participe de proyectos ambientales, económicos, hidrocarburíferos, geotérmicos, de digitalización y automatización. Con su experiencia ha desarrollado cursos de formación y aprendizaje basado en proyectos del lenguaje de programación Python dictado a estudiantes universitarios, jóvenes profesionales y profesionales senior para su actualización de conocimientos.']
  },
  {
    name: 'Econ. Edgar Benítez Herrera',
    image: '/integrantes/Edgar-Benitez-Herrera.png',
    role: 'Investigador asociado',
    title: null,
    description: ['Economista por la Universidad Central del Ecuador (UCE). Me he desempeñado como consultor e investigador en temas de Economía Popular y Solidaria en el Institutito Superior de Investigaciones y Postgrado (ISIP-UCE) y en el Instituto de Altos Estudios Nacionales (IAEN). Coautor del libro Investigar la economía popular y solidaria: metodologías, métodos, técnicas y su aplicación en casos ecuatorianos. Forma parte del grupo de investigación de Economía Social y Solidara de la Universidad Central del Ecuador y parte del grupo de investigación del Colegio de Economistas de Pichincha. Actualmente me desempeño como Consultor de Proyecto en la DGRV de Ecuador- Honduras, en el área de Finanzas Sostenibles y Finanzas Verdes enfocadas para el sector financiero Cooperativista.',]
  },
  {
    name: 'Ing. Rodrigo López, MSc',
    image: '/integrantes/Rodrigo-Lopez.png',
    role: 'Docente Investigador',
    title: null,
    description: ['Ingeniero Ambiental con estudios de postgrado en cambio climático y Gobernanza Energética. Actualmente se desempeña como profesor en FIGEMPA y cuenta con algunas publicaciones sobre conflictos socio ambientales como derechos colectivos. ']
  },
  {
    name: 'Ing. Gonzalo Chiriboga, PhD(c) ',
    image: '/integrantes/Gonzalo-Chiriboga.png',
    role: 'Docente Investigador',
    title: null,
    description: ['Ingeniero químico de la Universidad Central del Ecuador, master en sistemas energéticos por la Universidad de Melbourne y cursante de doctorado en gases de efecto invernadero en aguas continentales por la Universidad de Liège. Docente titular de termodinámica e ingeniería termodinámica en la Universidad Central y miembro del CO2 Group de la Unidad de Oceanografía Química de la Universidad de Liège. Investigador certificado en áreas de energía y cambio climático REG-INV-15-01312. Intereses investigativos enfocados al desarrollo de sistemas energéticos renovables, descarbonización y gases de efecto invernadero.']
  },
  {
    name: 'Ing. Ghem Carvajal C., MSc ',
    image: '/integrantes/Ghem-Carvajal.png',
    role: 'Docente Investigador',
    title: null,
    description: [
      'Ingeniero Químico con formación de cuarto nivel en Ciencias Ambientales y formación en Estadística Aplicada y Diseño Experimental para la investigación científica. Docente de las cátedras de Estadística Aplicada y Balance de Materia y Energía en la Facultad de Ingeniería Química de la UCE. Director del Departamento de Petróleos, Energía y Contaminación de la Universidad Central del Ecuador.',

      'Experto en estudios y auditorías ambientales y energéticas y en técnicas de prevención de la contaminación, particularmente en los sectores industrial y de manufactura. Experto de sistemas de gestión de calidad, seguridad y salud, ambiente y energía.  Experto en validación, y acreditación de laboratorios ambientales y de hidrocarburos.'
    ]
  },
]

// English Version
export const team: Equipo[] = [
  {
    name: 'Ing. Rony Parra, PhD',
    image: '/integrantes/Rony-Parra.png',
    role: 'Director of the institute',
    title: 'Study of energy in complex systems from biophysical analysis',
    description: ['He is a professor/researcher at the Central University of Ecuador, with additional experience in the management and formulation of public policies applied in the energy sector of Ecuador. He was a doctoral researcher at ICTA-UAB from 2015 to 2020, my doctoral research analyzed the BIOPHYSICAL RESTRICTIONS OF FOSSIL ENERGY SYSTEMS-STUDYING THE METABOLISM OF PETROLEUM EXTRACTION IN ECUADOR. During this time he was also a researcher in the project "Moving towards Adaptive Governance in Complexity: Informing Nexus Security" (MAGIC) in the European Union. Previously, he obtained a Master\'s Degree in Energy Governance from the Latin American Faculty of Social Sciences-FLACSO and a Petroleum Engineering from the Central University of Ecuador. He is the author of several scientific articles on sustainability, energy and oil; His research interest is based on expanding knowledge about the relationship between society, the economy and ecosystems for the use of energy resources.']
  },
  {
    name: 'Ing. Génesis Yánez',
    image: '/integrantes/Genesis-Yanez.png',
    role: 'Research technique',
    title: null,
    description: ['Environmental Engineer graduated from the Central University of Ecuador, with a Diploma in Circular Economy from the University of the Environment, Mexico. Currently, she works as a Research Technician at the Hydrocarbon Research Institute of the Central University of Ecuador, in the areas of sustainability and remote sensing. She is part of multidisciplinary research teams focused on the analysis of energy consumption and quantification of environmental services. Her research area is focused on the study of spectral reflectance and satellite images.'],
  },
  {
    name: 'Ing. Fernando Lucero, MSc.',
    image: '/integrantes/Fernando-Lucero.png',
    role: 'Teaching researcher',
    title: null,
    description: [
      'Professor of the Petroleum Career and Coordinator of the Degree Unit at the Central University of Ecuador. He was secretary of the SPE Ecuador Section during the period 2020-2022 and is currently the Faculty Advisor of the Ecuador Section.',

      'He is a Petroleum Engineer from the Central University of Ecuador and has a Master\'s Degree in Petroleum from the University of Miskolc-Hungary with experience in the oil industry in the area of production and artificial lift in field operations for public and private companies. He has participated in various conferences related to energy and the energy transition. His interest is to work on issues related to energy prospective and Carbon Capture and Storage projects.'
    ]
  },
  {
    name: 'Ing. Luis Mejía, MSc.',
    image: '/integrantes/Luis-Mejia.png',
    role: 'Teaching researcher',
    title: null,
    description: ['He is a professor at the Central University of Ecuador, obtained a degree in Petroleum Engineering from the Faculty of Geology, Mines, Petroleum and Environmental Engineering of the Central University of Ecuador and a Master\'s Degree in Occupational Health and Safety with a mention in Occupational Risk Prevention SEK International University. He has experience as an Operations Engineer in the area of well drilling and workover; Safety Technician in identification, measurement, evaluation and control programs of occupational hazards. Additionally, he is coordinating the Master\'s program in Petroleum Engineering with a major in Enhanced Recovery.']
  },
  {
    name: 'Ing. Christian Mejía E., PhD(c)',
    image: '/integrantes/Christian-Mejia-Escobar.png',
    role: 'Teaching researcher',
    title: null,
    description: ['Professor in the areas of Software and Statistics at the Faculty of Geology, Mining, Petroleum and Environmental Engineering of the Central University of Ecuador since 2013. He received the title of Computer Systems Engineer from the National Polytechnic School (EPN) , Quito, Ecuador, in 1999, and a Master\'s degree in Computer Science, from the Center for Research and Advanced Studies of the National Polytechnic Institute (CINVESTAV), Mexico City, Mexico, in 2007. He is currently pursuing a PhD in Computer Science from the University of Alicante, Spain. His research focuses on the use of Deep Learning in computer vision tasks. He is the author and reviewer of several scientific articles on Computing, Artificial Intelligence, Artificial Neural Networks, Machine Learning and Geostatistics applied to Earth Science problems and the use of natural resources.']
  },
]

export const researchers: Equipo[] = [
  {
    name: 'Ing. Susana Arciniegas, PhD',
    image: '/integrantes/Susana-Arciniegas-Ortega.png',
    role: 'Teaching researcher',
    title: <a href='https://orcid.org/0000-0002-0878-2612' rel="noreferrer" target="_blank">https://orcid.org/0000-0002-0878-2612</a>,
    description: [
      'Professor-Researcher in the Environmental Engineering Career of the Faculty of Geology, Mines, Petroleum and Environment, Central University of Ecuador. As well as, she is a postgraduate professor at the National University of Loja, University of Azuay, State Postgraduate University-IAEN.',

      'Director of the research group "Geotechnologies applied to Environmental Sciences".',

      'Member of the "Latin American Network of Environmental Sciences".',

      'Coordinator of the Research Commission of the Faculty of Geology, Mines, Petroleum and Environment, Central University of Ecuador.',

      'Research lines: Climate Change, Environmental Epidemiology, Modeling applied to Earth Sciences and Environmental Sciences.',
    ]
  },
  {
    name: 'Ing. Gustavo Pinto, MSc.',
    image: '/integrantes/Gustavo-Pinto-Arteaga.png',
    role: 'Teaching researcher',
    title: null,
    description: [
      'Gustavo Pinto Arteaga, Petroleum Engineer from the Central University of Ecuador, has a Higher Diploma in Senior Management of Oil Negotiation, Specialization in Administration and Control of Environmental Pollution and a Master\'s Degree in Hydrocarbon Production. He was an Engineer in the Petroleum Engineering Department of the CEPE – Texaco Consortium. He served as a Consultant. He is Technical Advisor and General Manager of various consulting and technical assistance companies for the oil and mining industries.',

      'He has been Professor of Master\'s programs at several Ecuadorian Universities, participated in congresses and lectured in some countries, has published texts and articles in indexed journals and has received countless awards for his management and Diplomas of Scientific Merit. He is currently General Director-Editor of the magazine FIGEMPA: Investigation and Development and works as Dean of the Faculty of Engineering in Geology, Mines, Petroleum and Environment of the Central University of Ecuador.'
    ]
  },
  {
    name: 'Blgo. Felix D. Andueza L., PhD.',
    image: '/integrantes/Felix-Daniel-Andueza.png',
    role: 'Teaching researcher',
    title: null,
    description: ['He is a professor/researcher of the Environmental Engineering career at FIGEMPA-Central University of Ecuador. Biologist with a Master\'s degree in Molecular Biology and Fermentations, Advanced Studies Diploma in Microbiology and PhD in Microbiology and Parasitology from the Complutense University of Madrid, Spain. He has been a research professor at the Escuela Superior Politecnica del Chimborazo (Ecuador) and the Universidad de los Andes (Venezuela). Visiting professor at the University of La Salle (Colombia). Researcher in the area of ​​Microbiology and Biotechnology, accredited as Associate II researcher at RNI-SENESCYT (Ecuador), senior researcher at CONCYTEC (Peru) and PPI Level B researcher at FONACIT (Venezuela). Member of the Scientific Committee of the Central University of Ecuador. Director of the Microbiology and Applied Biotechnology research group at FIGEMPA-UCE. He has directed more than 100 doctoral, master\'s and degree theses. He is the author and co-author of more than 80 academic publications and more than 300 presentations at national and international events. Director of 30 national and international scientific research projects in the area of ​​Microbiology and Biotechnology. Member of the editorial committee of the FIGEMPA magazine. Evaluator of scientific research projects for DI-UCE, IIV-ESPOCH, DI-UNACH, DI-UTA, DI-UC, CEDIA, REDU, OIE, COLCIENCIA, CDCHT-ULA.']
  },
  {
    name: 'Ing. Teresa Palacios, PhD(c)',
    image: '/integrantes/Teresa-Palacios-Cabrera.png',
    role: 'Teaching researcher',
    title: null,
    description: [
      'Director of the Environmental Engineering Career of the Faculty of Geology, Mines, Petroleum and Environment from 2019 to the present. Full-time professor and researcher at the Central University of Ecuador since 2014. PhD candidate at the University of Alicante (Spain), her research focuses on the abandonment of traditional agricultural areas and its impact on the hydrological response of a Mediterranean basin. under semi-arid climatic conditions. It is a case study of the catchment basin of the Guadalest river reservoir, south-eastern Spain.',

      'From 2003 to 2012, she worked in the Ministry of the Environment in the Subsecretariat for Environmental Quality and the Subsecretariat for Climate Change, in the latter as Coordinator of the National Authority for clean development mechanism projects, focal point for Ecuador to the Intergovernmental Panel of Experts on Climate Change. She previously worked as an environmental consultant and in the construction of the inventory of greenhouse gas emissions in the waste sector. She is a Chemical Engineer from the Central University of Ecuador, she has a master\'s degree in Environmental Management and Audits with an emphasis on integrated water management from the University of Catalonia in Spain and the Central University of Ecuador. She is the author of several articles and scientific documents on various environmental issues, especially climate change and water resources. Her research focuses on the topic of land use change, hydrological modeling and climate change.']
  },
  {
    name: 'Blgo. Byron Medina, PhD(c)',
    image: '/integrantes/Byron-Medina-Torres.png',
    role: 'Teaching researcher',
    title: 'Estudio de la distribución, conservación y restauración ecológica de ecosistemas del Ecuador.',
    description: ['Professor and researcher at the Central University of Ecuador since 2014. PhD candidate at the Catholic University of Louvain-la-Neuve (Belgium), his research focuses on the effects of human intervention on moors and restoration trials. Previously, she was part of the team at the Ecuadorian Ministry of the Environment that developed, wrote, and edited the Ecosystem Classification System for Continental Ecuador. She holds a bachelor\'s degree in Biological Sciences from the Central University of Ecuador and a master\'s degree from the Menéndez Pelayo International University of Spain. He is the author and editor of several articles and scientific documents on species records, vegetation databases, effects of human intervention on ecosystems, and the state of conservation and restoration of Ecuador\'s ecosystems. His research focuses on the distribution of species and ecosystems, as well as their response to human actions and their ecological restoration.']
  },
  {
    name: 'Ing. Javier Miranda, MSc.',
    image: '/integrantes/Javier-Miranda.png',
    role: 'Teaching researcher',
    title: null,
    description: ['Petroleum Engineer graduated from the Central University of Ecuador, has a Master\'s Degree in Production and Industrialization of Hydrocarbons from the UTE University. Currently, he works as a Teaching Technician of the Petroleum Career at the Central University of Ecuador. He has published and presented articles in the magazine Petróleo y Gas, of the Association of the Hydrocarbon Industry of Ecuador (AIHE), in the Enhanced Oil Recovery Technology Collaboration Program 2019 of the International Energy Agency (IEA), in the Latin American and Caribbean Petroleum Engineering Conference 2020 of the Society of Petroleum Engineers (SPE), and in the FIGEMPA Magazine: Research and Development. His research area is focused on static and dynamic modeling of oil fields.']
  },
  {
    name: 'Ing. Carlos Carrillo, MSc.',
    image: '/integrantes/Carlos-Carrillo.png',
    role: 'Research associate',
    title: 'Integration of hydrocarbon and energy processes with data science and development of algorithms in Python and R programming language for information analysis.',
    description: ['He is a Digital Implementation Engineer of assets at the Schlumberger company, he was a professor of the Software Development and Networks and Telecommunications careers, where he served as research leader and director of outreach with society at the Instituto Tecnológico Superior Quito Metropolitano. At the IEXE University - Mexico he obtained a Master\'s degree in Information and Communication Technologies. In Ecuador he obtained a Petroleum Engineer at the Central University of Ecuador. He is an independent researcher and participates in environmental, economic, hydrocarbon, geothermal, digitization and automation projects. With his experience, he has developed training courses and project-based learning of the Python programming language for university students, young professionals and senior professionals to update their knowledge.']
  },
  {
    name: 'Econ. Edgar Benítez Herrera',
    image: '/integrantes/Edgar-Benitez-Herrera.png',
    role: 'Research associate',
    title: null,
    description: ['Economist from the Central University of Ecuador (UCE). I have worked as a consultant and researcher on issues of Popular and Solidarity Economy at the Higher Institute of Research and Postgraduate Studies (ISIP-UCE) and at the Institute of Higher National Studies (IAEN). Co-author of the book Investigating the popular and solidarity economy: methodologies, methods, techniques and their application in Ecuadorian cases. He is part of the Social and Solidarity Economy research group of the Central University of Ecuador and part of the research group of the College of Economists of Pichincha. I am currently working as a Project Consultant at the DGRV of Ecuador-Honduras, in the area of Sustainable Finance and Green Finance focused on the Cooperative financial sector.',]
  },
  {
    name: 'Ing. Rodrigo López, MSc',
    image: '/integrantes/Rodrigo-Lopez.png',
    role: 'Teaching researcher',
    title: null,
    description: ['Environmental Engineer with postgraduate studies in climate change and Energy Governance. He currently works as a professor at FIGEMPA and has some publications on socio-environmental conflicts such as collective rights.']
  },
  {
    name: 'Ing. Gonzalo Chiriboga, PhD(c) ',
    image: '/integrantes/Gonzalo-Chiriboga.png',
    role: 'Teaching researcher',
    title: null,
    description: ['Chemical engineer from the Central University of Ecuador, master\'s degree in energy systems from the University of Melbourne and doctoral student in greenhouse gases in continental waters from the University of Liège. Professor of thermodynamics and thermodynamic engineering at the Central University and member of the CO2 Group of the Chemical Oceanography Unit of the University of Liège. Certified researcher in the areas of energy and climate change REG-INV-15-01312. Research interests focused on the development of renewable energy systems, decarbonization and greenhouse gases.']
  },
  {
    name: 'Ing. Ghem Carvajal C., MSc ',
    image: '/integrantes/Ghem-Carvajal.png',
    role: 'Teaching researcher',
    title: null,
    description: [
      'Chemical Engineer with fourth level training in Environmental Sciences and training in Applied Statistics and Experimental Design for scientific research. Professor of Applied Statistics and Mass and Energy Balance at the Faculty of Chemical Engineering of the UCE. Director of the Department of Oil, Energy and Pollution of the Central University of Ecuador.',

      'Expert in environmental and energy studies and audits and in pollution prevention techniques, particularly in the industrial and manufacturing sectors. Expert in quality management systems, health and safety, environment and energy. Expert in validation and accreditation of environmental and hydrocarbon laboratories.'
    ]
  },
]
