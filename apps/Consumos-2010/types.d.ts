export interface Consumo {
  'Región': 'Costa' | 'Sierra' | 'Oriente'
  Provincia: string
  'Área': 'Rural' | 'Urbano'
  Jefatura: 'Femenina' | 'Masculina'
  'Tipo de Hogar': 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  'Patrón de Consumo': number
  Hogares: number
}

export type DataPorProvincia = Record<string, {hogares: number, consumo: number}>

export interface FormValues {
  provincia: string
  area: string
  jefatura: string
  tipoHogar: string
}
