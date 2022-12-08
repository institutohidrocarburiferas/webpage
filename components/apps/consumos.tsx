
import type {FormValues} from './types'

import {useState} from 'react'

import {consumosPastaza} from '@constants/apps/consumos'
import {Subtitle} from '@components/UI/Subtitle'
import {Text} from '@components/UI/Text'

import {BarPlot} from './BarPlot'
import {FormData} from './FormData'

interface ResultProps {
  values: FormValues
}

const Resultados: React.FC<ResultProps> = ({values}) => {
  const data = consumosPastaza.filter(consumo => (
    values.ciudad.includes(consumo.Provincia) &&
    values.area.includes(consumo['Área']) &&
    values.jefatura.includes(consumo.Jefatura) &&
    values.tipoHogar.includes('Tipo ' + String(consumo['Tipo de Hogar'])) &&
    values.salario.includes(consumo.Ingreso)
  ))

  const results = data.reduce((obj, item) => {
    if (item['Área'] === 'Rural') {
      obj.Rural += item.Hogares * item['Consumo Electrodomésticos']
    } else if (item['Área'] === 'Urbano') {
      obj.Urbano += item.Hogares * item['Consumo Electrodomésticos']
    }

    if (item.Jefatura === 'Masculina') {
      obj.Masculina += item.Hogares * item['Consumo Electrodomésticos']
    } else if (item.Jefatura === 'Femenina') {
      obj.Femenina += item.Hogares * item['Consumo Electrodomésticos']
    }

    return obj
  }, {Urbano: 0, Rural: 0, Masculina: 0, Femenina: 0})

  const tipos = data.reduce((obj, item) => {
    obj['Tipo ' + String(item['Tipo de Hogar'])] += item.Hogares * item['Consumo Electrodomésticos']

    return obj
  }, Object.fromEntries(values.tipoHogar.map(el => [el, 0])))

  const salarios = data.reduce((obj, item) => {
    obj[item.Ingreso] += item.Hogares * item['Consumo Electrodomésticos']

    return obj
  }, Object.fromEntries(values.salario.map(el => [el, 0])))

  const infraestructura = data.reduce((obj, item) => {
    // el -> electrodoméstico
    for (const el in obj) {
      obj[el] += item.Hogares * item[`Consumo ${el}`]
    }

    return obj
  },
  Object.fromEntries(values.infraestructura.map(el => [el, 0]))
  )

  const totalConsumo = data.reduce((acum, item) => {
    return acum + item.Hogares * item['Consumo Electrodomésticos']
  }, 0)

  return <div className='mt-7'>
    <section className='max-w-2xl mx-auto m-10'>
      <Text>
        <div className='text-center'>
          <span className='font-bold'>Consumo Total:</span>{'  '}
          <span>{totalConsumo.toFixed(2)} KWH/mes</span>
        </div>
      </Text>
    </section>
    <section className='grid grid-cols-1 md:grid-cols-2'>

      <BarPlot
        title="Área del Consumo"
        x={['Urbano', 'Rural']}
        y={[results.Urbano, results.Rural]}
      />
      <BarPlot
        title="Jefatura del Consumo"
        x={['Masculina', 'Femenina']}
        y={[results.Masculina, results.Femenina]}
      />
      <BarPlot
        title="Tipos de Hogares del Consumo"
        x={Object.keys(tipos)}
        y={Object.values(tipos)} />
      <BarPlot
        title="Rango salarial del Consumo"
        x={Object.keys(salarios)}
        y={Object.values(salarios)}
      />
      <BarPlot
        title="Infraestructura del Consumo"
        x={Object.keys(infraestructura)}
        y={Object.values(infraestructura)}
      />

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
