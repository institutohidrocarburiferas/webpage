enum Region {
  Oriente,
  Sierra,
  Costa,
}

enum Provincia {
  Pastaza = 'Pastaza'
}

export interface Consumo {
  Región: Region
  Provincia: Provincia
  Área: 'Rural' | 'Urbano'
  Jefatura: 'Femenina' | 'Masculina'
  'Tipo de Hogar': '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16'
  Ingreso: 'Menos de 400' | '400 a 800' | '800 a 1200' | '1200 a 2400' | 'Más de 2400'
  Hogares: number
  'Consumo Refrigerador': number
  'Consumo Licuadora': number
  'Consumo Microondas': number
  'Consumo Cocina de inducción': number
  'Consumo Lavadora de platos': number
  'Consumo Televisor a color': number
  'Consumo Tv LCD': number
  'Consumo PC Escritorio': number
  'Consumo Radio': number
  'Consumo Videojuegos': number
  'Consumo Aire Acondicionado': number
  'Consumo Ventilador': number
  'Consumo Ducha Eléctrica': number
  'Consumo Lavadora de ropa': number
  'Consumo Secadora de ropa': number
  'Consumo Focos': number
  'Consumo Laptop': number
  'Consumo Celular': number
  'Consumo Auto eléctrico': number
  'Consumo Motos eléctricas': number
  'Consumo Electrodomésticos': number
  'Consumo Planilla': number
}

export interface FormValues {
  provincia: string
  area: string
  jefatura: string
  salario: string
  tipoHogar: string
  infraestructura: string[]
}
