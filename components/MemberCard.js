import Image from 'next/image'

export default function MemberCard ({ name = 'Ing', image = '/prueba.png' }) {
  return <section className="relative overflow-y-scroll bg-gray-200 rounded-md md:hover:scale-105 w-80 h-96">

    <Image
      className='fixed object-cover object-top rounded-tl-md'
      src={image}
      width={320}
      height={220}
      alt={name}
    />
    <p className='p-4'>
      Es profesor/investigador de la Universidad Central del Ecuador, con experiencia adicional en la gestión y formulación de políticas públicas aplicadas en el sector energético del Ecuador. Fue investigador doctoral en el ICTA-UAB de 2015 a 2020, mi investigación doctoral analizó las RESTRICCIONES BIOFÍSICAS DE LOS SISTEMAS DE ENERGÍA FÓSIL-ESTUDIANDO EL METABOLISMO DE LA EXTRACCIÓN DE PETRÓLEO DE ECUADOR. Durante este tiempo también fue investigador en el proyecto `&quot;`Moving towards Adaptive Governance in Complexity: Informing Nexus Security`&quot;` (MAGIC) en la Unión Europea. Anteriormente, obtuvo una Maestría en Gobernanza Energética de la Facultad Latinoamericana de Ciencias Sociales-FLACSO y una Ingeniería de Petróleo de la Universidad Central del Ecuador. Autor de varios artículos científicos sobre sostenibilidad, energía y petróleo; Su interés de investigación se basa en ampliar el conocimiento sobre la relación de la sociedad, la economía y los ecosistemas para el aprovechamiento de recursos energéticos
    </p>

  </section>
}
