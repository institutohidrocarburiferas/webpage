/* eslint-disable import/no-anonymous-default-export */
import type {NextApiRequest, NextApiResponse} from 'next'

interface Equipo {
  name: string
  image: string,
  role: string,
  title: string | JSX.Element | null,
  description: string[]
}

export const equipo: Equipo[] = [
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
    role: 'research technique',
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

export const investigadores: Equipo[] = [
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

type Data = {
  equipo: Equipo[]
  investigadores: Equipo[]
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({equipo, investigadores})
}
