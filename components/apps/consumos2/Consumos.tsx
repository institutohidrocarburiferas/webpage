import type {FormValues} from './types'

import {useState} from 'react'

import {Subtitle} from '@components/UI/Subtitle'

import {FormData} from './FormData'
import {Resultados} from './Resultados'

export const Consumos: React.FC = () => {
  const [values, setValues] = useState<FormValues | null>(null)

  return <div>
    <div className='max-w-2xl mx-auto text-black'>
      <Subtitle>Escoja el tipo de hogar para calcular el patrón de consumo:</Subtitle>
      <FormData setValues={setValues} />
    </div>
    {values && <Resultados values={values} />}
  </div>
}
