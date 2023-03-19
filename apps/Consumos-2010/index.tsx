import type {ItemComponent} from '@components/OptionsTabs'

import {Tabla} from '@apps/components/Tabla'
import {OptionsTabs} from '@components/OptionsTabs'

import {Consumos} from './Consumos'
import {consumos2010, dataPorProvincia} from './db'

export function Consumos2010 () {
  const components: ItemComponent[] = [
    {
      title: 'Consumos',
      Component: <Consumos
        consumos={consumos2010}
        dataPorProvincia={dataPorProvincia}
      />
    },
    {
      title: 'Tabla',
      Component: <Tabla
        consumos={consumos2010}
        labels={[
          {label: 'Provincia', title: 'Provincia'},
          {label: 'Área', title: 'Área'},
          {label: 'Jefatura', title: 'Jefatura'},
          {label: 'Tipo de Hogar', title: 'Integrantes'},
          {label: 'Patrón de Consumo', title: 'Patrón de Consumo'},
        ]}
      />
    },

  ]

  return <main className='w-full p-3 bg-white' >
  <OptionsTabs components={components} />
</main>
}
