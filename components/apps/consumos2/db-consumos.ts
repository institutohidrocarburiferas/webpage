import type {Consumo} from './types'

import Pastaza from './db/pastaza.json'

type DataPorProvincia = Record<string, {hogares: number, consumo: number}>

// consumos (GWH / año) por provincia
export const dataPorProvincia: DataPorProvincia = {
  Pastaza: {
    hogares: 28_327,
    consumo: 54
  }
}

// Convert json to Consumo data
function jsonToConsumo (json: unknown): Consumo[] {
  return Object.values(json)
}

export const consumos: Consumo[] = [
  ...jsonToConsumo(Pastaza)
]
