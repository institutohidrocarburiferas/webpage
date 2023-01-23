import type {FormValues, Consumo} from './types'

// import {Text} from '@components/UI/Text'

import {Text} from '@components/UI/Text'

import {consumos, dataPorProvincia} from './db-consumos'
// import {getTotals, totalConsumo} from './totales'
// import {getPatrones} from './patrones'
import {CircularPlot} from './Plots/CircularPlot'
import {BarPolarPlot} from './Plots/BarPolarPlot'

interface ResultProps {
  values: FormValues
}

export const Resultados: React.FC<ResultProps> = ({values}) => {
  const filteredPattern: Consumo = consumos.filter(consumo => (
    values.provincia.includes(consumo.Provincia) &&
    values.area.includes(consumo['Área']) &&
    values.jefatura.includes(consumo.Jefatura) &&
    values.tipoHogar.includes('Tipo ' + String(consumo['Tipo de Hogar'])) &&
    values.salario.includes(consumo.Ingreso)
  ))[0]

  const {
    consumo: consumoPorProvincia,
    hogares: hogaresPorProvincia
  } = dataPorProvincia[values.provincia]

  // Data para hogares
  const HOGARES = filteredPattern?.Hogares ?? 0
  const HOGARES_RESTANTES = hogaresPorProvincia - HOGARES

  // Data para consumo
  const patronDeConsumo = filteredPattern?.['Consumo Planilla'] ?? 0
  // Consumo = HOGARES * patronDeConsumo (KWH / mes) -> (GWH / año)
  let CONSUMO_PATRON = HOGARES * patronDeConsumo * 12 / 10 ** 6

  CONSUMO_PATRON = Number(CONSUMO_PATRON.toFixed(2))

  const CONSUMO_RESTANTE = consumoPorProvincia - CONSUMO_PATRON

  const infraestructura = [filteredPattern].reduce((obj, item) => {
    // el -> electrodoméstico
    for (const el in obj) {
      obj[el] = item ? (item[`Consumo ${el}`] / item['Consumo Electrodomésticos'] * 100).toFixed(2) : 0
    }

    return obj
  },
  Object.fromEntries(values.infraestructura.map(el => [el, null]))
  )

  return <div className='grid grid-cols-1 max-w-2xl mx-auto mt-7'>
    <div>
      <Text><b>Patrón de Consumo: </b>{patronDeConsumo.toFixed(2)} KWH/mes</Text>
    </div>
    <CircularPlot
      labels={['Hogares del Patrón', 'Resto de Hogares']}
      showlegend={false}
      title={'Hogares del Patrón de Consumo'}
      values={[HOGARES, HOGARES_RESTANTES]}
    />

    <CircularPlot
      labels={['Consumo de Hogares del Patrón', 'Consumo del Resto de Hogares']}
      showlegend={false}
      title={'Hogares del Patrón de Consumo'}
      values={[CONSUMO_PATRON, CONSUMO_RESTANTE]}
    />

    <BarPolarPlot
      color={''}
      r={Object.values(infraestructura)}
      theta={Object.keys(infraestructura)}
      title={'Infraestructura de consumo'}
    />
  </div>
}
