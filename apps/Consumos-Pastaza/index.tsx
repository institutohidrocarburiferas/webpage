import type {ItemComponent} from '@components/OptionsTabs'

import {Tabla} from '@apps/components/Tabla'
import {Consumos} from '@apps/components/Consumos'
import {OptionsTabs} from '@components/OptionsTabs'

import {consumosPastaza, dataPorProvincia} from './db'

export function ConsumosPastaza () {
  const components: ItemComponent[] = [
    {
      title: 'Consumos',
      Component: <Consumos
        consumos={consumosPastaza}
        dataPorProvincia={dataPorProvincia}
      />
    },
    {
      title: 'Tabla',
      Component: <Tabla consumos={consumosPastaza}/>
    },

  ]

  return <main className='w-full p-3 bg-white' >
    <OptionsTabs components={components} />
  </main>
}
