import type {Consumo} from '@constants/apps/consumos'
import type {FormValues, Graphs} from './types'

interface Props {
  filteredValues: Consumo[]
  values: FormValues
}

export function getPatrones ({filteredValues, values}: Props): Graphs[] {
  const results = filteredValues.reduce((obj, item) => {
    if (item['Área'] === 'Rural') {
      obj.Rural = obj.Rural
        ? (obj.Rural + item['Consumo Electrodomésticos']) / 2
        : item['Consumo Electrodomésticos']
    } else if (item['Área'] === 'Urbano') {
      obj.Urbano = obj.Urbano
        ? (obj.Urbano + item['Consumo Electrodomésticos']) / 2
        : item['Consumo Electrodomésticos']
    }

    if (item.Jefatura === 'Masculina') {
      obj.Masculina = obj.Masculina
        ? (obj.Masculina + item['Consumo Electrodomésticos']) / 2
        : item['Consumo Electrodomésticos']
    } else if (item.Jefatura === 'Femenina') {
      obj.Femenina = obj.Femenina
        ? (obj.Femenina + item['Consumo Electrodomésticos']) / 2
        : item['Consumo Electrodomésticos']
    }

    return obj
  },
  {Urbano: null, Rural: null, Masculina: null, Femenina: null}
  )

  const tipos = filteredValues.reduce((obj, item) => {
    const itemName = 'Tipo ' + String(item['Tipo de Hogar'])

    obj[itemName] = obj[itemName]
      ? (obj[itemName] + item['Consumo Electrodomésticos']) / 2
      : item['Consumo Electrodomésticos']

    return obj
  }, Object.fromEntries(values.tipoHogar.map(el => [el, null])))

  const salarios = filteredValues.reduce((obj, item) => {
    obj[item.Ingreso] = obj[item.Ingreso]
      ? (obj[item.Ingreso] + item['Consumo Electrodomésticos']) / 2
      : item['Consumo Electrodomésticos']

    return obj
  }, Object.fromEntries(values.salario.map(el => [el, null])))

  const infraestructura = filteredValues.reduce((obj, item) => {
    // el -> electrodoméstico
    for (const el in obj) {
      obj[el] = obj[el]
        ? (obj[el] + item[`Consumo ${el}`]) / 2
        : item[`Consumo ${el}`]
    }

    return obj
  },
  Object.fromEntries(values.infraestructura.map(el => [el, null]))
  )

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
      plot: 'bar',
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
    }
  ]
}
