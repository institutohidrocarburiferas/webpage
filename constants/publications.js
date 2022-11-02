const publi = '/publicaciones'
const revistas = '/externalLinks/revistas'
const images = {
  con_ciencia: `${revistas}/con-ciencia.jpg`,
  energy_policy: `${revistas}/energy-policy.jpg`,
  florida_state_uni: `${revistas}/florida-state-university.png`,
  heliyon: `${revistas}/heliyon.jpg`,
  IJRASET: `${revistas}/IJRASET.png`,
  mdpi: `${revistas}/mdpi.png`,
  science_total_environment: `${revistas}/science-total-environment.png`,
  siembra_uce: `${revistas}/siembra-uce.jpg`,
  olade: `${revistas}/oladeorg-logo.jpg`,
}

export const publications = [
  {
    title: 'Construcción de Escenarios Energéticos para la Extracción de petróleo en el Bloque 43 de la Amazonía Ecuatoriana (pág 58 -71)',
    image: images.olade,
    url: 'https://enerlac.olade.org/index.php/ENERLAC/article/view/165/251',
    download: `${publi}/escenarios-energeticos.pdf`,
    date: '2021-12-01',
  },
  {
    title: 'Exploration of the environmental implications of ageing conventional oil reserves with relational analysis',
    image: images.science_total_environment,
    url: 'https://www.sciencedirect.com/science/article/pii/S0048969720359003',
    download: `${publi}/exploration-environmental-implications.pdf`,
    date: '2020-12-20',
  },
  {
    title: 'Understanding The Future Metabolism of Ecuador’s Energy System Using MuSIASEM (pág 109 - 110)',
    image: images.florida_state_uni,
    url: 'https://samo2022.math.fsu.edu/sites/g/files/upcbnu3196/files/2022-03/booklet.pdf#page=111',
    download: `${publi}/future-metabolism-ecuador.pdf`,
    date: '2022-03-14',
  },
  {
    title: 'Comportamiento del margen de refinación en el sector hidrocarburífero del Ecuador en el 2018',
    image: 'https://revistadigital.uce.edu.ec/public/journals/6/cover_issue_274_es_ES.jpg',
    url: 'https://revistadigital.uce.edu.ec/index.php/RevFIG/article/view/2630',
    download: `${publi}/comportamiento-margen-refinacion.pdf`,
    date: '2021-07-31',
  },

]

export const otherPublications = [
  {
    title: 'Valoración económica ambiental, producción de biomasa y carbono de un bosque nativo andino, frente a plantaciones forestales eucalyptus globulus y pinus patula, en la Provincia de Loja.',
    image: 'https://revistadigital.uce.edu.ec/public/journals/6/cover_issue_167_es_ES.jpg',
    url: 'https://revistadigital.uce.edu.ec/index.php/RevFIG/article/view/1801',
    download: `${publi}/valoración económica-ambiental-producción-de biomasa.pdf`,
    date: '2019-06-28',
  },
  {
    title: 'Land-use changes and precipitation cycles to understand hydrodynamic responses in semiarid Mediterranean karstic watersheds',
    image: images.science_total_environment,
    url: 'https://www.sciencedirect.com/science/article/pii/S0048969722002728?via%3Dihub',
    download: `${publi}/land-use-changes-and-precipitation-cycles-hydrodynamic.pdf`,
    date: '2022-05-01',
  },
  {
    title: 'Harnessing of geothermal energy for a greenhouse in Ecuador employing a heat pump: design, construction, and feasibility assessment',
    image: images.heliyon,
    url: 'https://www.sciencedirect.com/science/article/pii/S2405844021027110',
    download: `${publi}/harnessing-of-geothermal-energy-for-a-greenhouse-in-Ecuador.pdf`,
    date: '2021-12-01',
  },
  {
    title: 'Energy Return on Investment (EROI) and Life Cycle Analysis (LCA) of biofuels in Ecuador',
    image: images.heliyon,
    url: 'https://www.cell.com/heliyon/fulltext/S2405-8440(20)31057-4',
    download: `${publi}/energy-return-EROI-LCA-biofuels-Ecuador.pdf`,
    date: '2020-06-28',
  },
  {
    title: 'The Associated Decision and Management Factors on Cattle Tick Level of Infestation in Two Tropical Areas of Ecuador',
    image: images.mdpi,
    url: 'https://www.mdpi.com/2076-0817/11/4/403',
    download: `${publi}/the-associated-decision-management-factors-two-tropical-areas-Ecuador.pdf`,
    date: '2022-03-26',
  },
  {
    title: 'Microbiological quality of water of the Quilotoa volcanic Lake Cotopaxi-Ecuador',
    image: images.con_ciencia,
    url: 'http://farbio.edu.bo/csegc/conciencia/index.php/ojs/article/view/155',
    download: `${publi}/microbiological-quality-water-Quilotoa-volcanic-Lake-Cotopaxi.pdf`,
    date: '2021-07-01',
  },
  {
    title: 'Calidad bacteriológica de la leche cruda bovina almacenada en el centro de acopio Mocha, Tungurahua, Ecuador',
    image: images.siembra_uce,
    url: 'https://revistadigital.uce.edu.ec/index.php/SIEMBRA/article/view/3176',
    download: `${publi}/calidad-bacteriologica-leche-cruda-bovina-almacenada-Mocha-Tungurahua.pdf`,
    date: '2021-10-28',
  },

]
