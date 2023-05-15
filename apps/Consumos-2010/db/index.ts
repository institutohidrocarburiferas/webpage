import type {Consumo, DataPorProvincia} from '../types.d'

import patronesDeConsumo from './patrones_de_consumo_2010.json'
import hogaresPorProvincia from './hogares-por-provincia.json'

// consumos (GWH / año) por provincia
export const dataPorProvincia = {
  ...hogaresPorProvincia,
} as const satisfies DataPorProvincia

// Convert json to Consumo data
function jsonToConsumo (json: unknown): Consumo[] {
  return Object.values(json)
}

export const consumos2010: Consumo[] = [
  ...jsonToConsumo(patronesDeConsumo)
]
