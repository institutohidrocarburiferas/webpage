import type {FormValues} from './types'

// import {Text} from '@components/UI/Text'

import {consumos} from './consumos'
// import {getTotals, totalConsumo} from './totales'
// import {getPatrones} from './patrones'
// import {BarPlot} from './BarPlot'

interface ResultProps {
  values: FormValues
}

export const Resultados: React.FC<ResultProps> = ({values}) => {
  const filteredValues = consumos.filter(consumo => (
    values.ciudad.includes(consumo.Provincia) &&
    values.area.includes(consumo['Área']) &&
    values.jefatura.includes(consumo.Jefatura) &&
    values.tipoHogar.includes('Tipo ' + String(consumo['Tipo de Hogar'])) &&
    values.salario.includes(consumo.Ingreso)
  ))

  console.log(filteredValues)

  return <div className='flex flex-col mt-7'>
    {Object.entries(filteredValues[0] ?? {Error: 'No existe el patrón'}).map(el => (
      <span key={el[0]}><b>{el[0]}</b> - {el[1]}</span>
    ))}
  </div>
}
