export interface FormValues {
  ciudad: string
  area: string
  jefatura: string
  salario: string
  tipoHogar: string
  infraestructura: string[]
}

export type Plot = 'bar' | 'barpolar'

export interface Graphs {
  title: string
  data: Record<string, number>
  plot: Plot
}
