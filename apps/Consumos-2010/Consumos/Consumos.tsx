import type {Consumo, DataPorProvincia, FormValues} from '@apps/Consumos-2010/types'

import {useState} from 'react'

import {Subtitle} from '@components/UI/Subtitle'

import {FormData} from './FormData'
import {Resultados} from './Resultados'

interface Props {
  consumos: Consumo[]
  dataPorProvincia: DataPorProvincia
}

export const Consumos: React.FC<Props> = ({consumos, dataPorProvincia}) => {
  const [values, setValues] = useState<FormValues | null>(null)

  return <div>
    <div className='max-w-2xl mx-auto my-5 text-black'>
      <Subtitle>Seleccione el tipo de hogar para calcular el patrón de consumo:</Subtitle>
      <FormData setValues={setValues} />
    </div>
    {values
      ? <Resultados
            consumos={consumos}
            dataPorProvincia={dataPorProvincia}
            formValues={values}
          />
      : null
    }
  </div>
}
