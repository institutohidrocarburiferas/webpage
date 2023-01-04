// Totales
import type {Consumo} from '@constants/apps/consumos'
import type {FormValues, Graphs} from './types'

interface Props {
  filteredValues: Consumo[]
  values: FormValues
}

export function getTotals ({filteredValues, values}: Props): Graphs[] {
  const results = filteredValues.reduce(
    (obj, item) => {
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
    },
    {Urbano: 0, Rural: 0, Masculina: 0, Femenina: 0},
  )

  const tipos = filteredValues.reduce((obj, item) => {
    obj['Tipo ' + String(item['Tipo de Hogar'])] += item.Hogares * item['Consumo Electrodomésticos']

    return obj
  }, Object.fromEntries(values.tipoHogar.map((el) => [el, 0])))

  const salarios = filteredValues.reduce((obj, item) => {
    obj[item.Ingreso] += item.Hogares * item['Consumo Electrodomésticos']

    return obj
  }, Object.fromEntries(values.salario.map((el) => [el, 0])))

  const infraestructura = filteredValues.reduce((obj, item) => {
    // el -> electrodoméstico
    for (const el in obj) {
      obj[el] += item.Hogares * item[`Consumo ${el}`]
    }

    return obj
  }, Object.fromEntries(values.infraestructura.map((el) => [el, 0])))

  return [
    {
      title: 'Área del Consumo',
      data: {Urbano: results.Urbano, Rural: results.Rural},
      plot: 'bar',
    },
    {
      title: 'Jefatura del Consumo',
      data: {Masculina: results.Masculina, Femenina: results.Femenina},
      plot: 'bar',
    },
    {
      title: 'Tipos de Hogares del Consumo',
      data: tipos,
      plot: 'bar'
    },
    {
      title: 'Rango salarial del Consumo',
      data: salarios,
      plot: 'bar'
    },
    {
      title: 'Infraestructura del Consumo',
      data: infraestructura,
      plot: 'barpolar'
    },
  ]
}

export function totalConsumo (filteredValues: Consumo[]) {
  const totalConsumo = filteredValues.reduce((acum, item) => {
    return acum + item.Hogares * item['Consumo Electrodomésticos']
  }, 0)

  return totalConsumo
}
