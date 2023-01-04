import type {FormValues} from './types'

import {useState} from 'react'

import {consumosPastaza} from '@constants/apps/consumos'
import {Subtitle} from '@components/UI/Subtitle'
import {Text} from '@components/UI/Text'

import {BarPlot} from './BarPlot'
import {FormData} from './FormData'
import {getTotals, totalConsumo} from './totales'
import {getPatrones} from './patrones'

interface ResultProps {
  values: FormValues
}

const Resultados: React.FC<ResultProps> = ({values}) => {
  const filteredValues = consumosPastaza.filter(consumo => (
    // values.ciudad.includes(consumo.Provincia) &&
    values.area.includes(consumo['Área']) &&
    values.jefatura.includes(consumo.Jefatura) &&
    values.tipoHogar.includes('Tipo ' + String(consumo['Tipo de Hogar'])) &&
    values.salario.includes(consumo.Ingreso)
  ))

  const graphsPatrones = getPatrones({filteredValues, values})

  const graphsTotals = getTotals({filteredValues, values})

  return <div className='mt-7'>
    <section className='max-w-2xl m-10 mx-auto'>
      <Text>
        <div className='text-center'>
          <span className='font-bold'>Consumo Total:</span>{'  '}
          <span>{totalConsumo(filteredValues).toFixed(2)} KWH/mes</span>
        </div>
      </Text>
    </section>
    <section className='grid grid-cols-1 md:grid-cols-2'>
      <div className='grid grid-cols-1'>
        {/* Histograms of patrones */}
      {graphsPatrones.map(({title, data, plot}) => (
        <BarPlot key={title}
          color={''}
          plot={plot}
          title={title}
          x={Object.keys(data)}
          y={Object.values(data)}
        />
      ))}
      </div>

      <div className='grid grid-cols-1'>
        {/* Histograms of totals */}
      {graphsTotals.map(({title, data, plot}) => (
        <BarPlot key={title}
          color='#65a30d'
          plot={plot}
          title={title}
          x={Object.keys(data)}
          y={Object.values(data)}
        />
      ))}
      </div>

    </section>
  </div>
}

export const Consumos: React.FC = () => {
  const [values, setValues] = useState<FormValues | null>(null)

  return <div>
    <div className='max-w-2xl mx-auto'>
      <Subtitle>Ingrese los datos para calcular el consumo:</Subtitle>
      <FormData setValues={setValues} />
    </div>
    {values && <Resultados values={values} />}
  </div>
}
