import type {FormValues, Consumo, DataPorProvincia} from '@apps/Consumos-2010/types'

import {Text} from '@components/UI/Text'
import {CircularPlot} from '@apps/components/Plots/CircularPlot'

interface ResultProps {
  formValues: FormValues
  consumos: Consumo[]
  dataPorProvincia: DataPorProvincia
}

export const Resultados: React.FC<ResultProps> = ({formValues, consumos, dataPorProvincia}) => {
  const filteredPattern : Consumo = consumos.filter(consumo => (
    formValues.provincia === consumo.Provincia &&
    formValues.area === consumo['Área'] &&
    formValues.jefatura === consumo.Jefatura &&
    formValues.tipoHogar === String(consumo['Tipo de Hogar'])
  ))[0]

  const {
    consumo: consumoPorProvincia,
    hogares: hogaresPorProvincia
  } = dataPorProvincia[formValues.provincia]

  // Data para hogares
  const HOGARES = filteredPattern?.Hogares ?? 0
  const HOGARES_RESTANTES = hogaresPorProvincia - HOGARES

  // Data para consumo
  const patronDeConsumo = filteredPattern?.['Patrón de Consumo'] ?? 0
  // Consumo = HOGARES * patronDeConsumo (KWH / mes) -> (GWH / año)
  let CONSUMO_PATRON = HOGARES * patronDeConsumo * 12 / 10 ** 6

  CONSUMO_PATRON = Number(CONSUMO_PATRON.toFixed(2))

  // TODO: Llenar la información del consumo general por provincia
  const CONSUMO_RESTANTE = (consumoPorProvincia || 5) - CONSUMO_PATRON

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
  </div>
}
