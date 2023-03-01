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
  const filteredPattern : Consumo = consumos.filter(consumo => (
    values.provincia === consumo.Provincia &&
    values.area === consumo['Área'] &&
    values.jefatura === consumo.Jefatura &&
    values.tipoHogar === String(consumo['Tipo de Hogar']) &&
    values.salario === consumo.Ingreso
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
      <Text><b>Patrón de consumo del tipo de hogar: </b>{patronDeConsumo.toFixed(2)} KWH/mes</Text>
    </div>
    <CircularPlot
      labels={['Hogares del tipo de hogar', 'Resto de Hogares']}
      showlegend={false}
      title={'Participación del tipo de hogar'}
      unit={'hogares'}
      values={[HOGARES, HOGARES_RESTANTES]}
    />

    <CircularPlot
      labels={['Consumo de electricidad en el tipo de hogar', 'Consumo de electricidad restante']}
      showlegend={false}
      title={'Participación en el consumo de electricidad en el tipo de hogar'}
      unit={'GWH/año'}
      values={[CONSUMO_PATRON, CONSUMO_RESTANTE]}
    />

    <BarPolarPlot
      color={null}
      r={Object.values(infraestructura)}
      theta={Object.keys(infraestructura)}
      title={'Infraestructura de consumo en el tipo de hogar'}
    />
  </div>
}
