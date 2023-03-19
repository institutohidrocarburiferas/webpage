import type {FormValues} from '@apps/Consumos-2010/types'

import cn from 'classnames'
import {Select} from '@mantine/core'
import {useForm} from '@mantine/form'

import hogaresPorProvincia from '@apps/Consumos-2010/db/hogares-por-provincia.json'

interface Props {
  setValues: React.Dispatch<React.SetStateAction<FormValues | null>>
}

// Function to validate in useForm/validate (line 27)
const validate = (value: string[] | string) => (value.length === 0 ? 'Escoja un valor para calcular el consumo' : null)

const dataIntegrantes = Array(16).fill(0).map((_, i) => {
  const persons = i + 1

  if (persons === 1) return '1 persona'
  else if (persons === 16) return 'Más de 16 personas'

  return `${persons} personas`
})

// ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Tipo 4', 'Tipo 5', 'Tipo 6', 'Tipo 7', 'Tipo 8', 'Tipo 9', 'Tipo 10', 'Tipo 11', 'Tipo 12', 'Tipo 13', 'Tipo 14', 'Tipo 15', 'Tipo 16']

export const FormData: React.FC<Props> = ({setValues}) => {
  const form = useForm<FormValues>({
    initialValues: {
      provincia: '',
      area: '',
      jefatura: '',
      tipoHogar: '',
    },
    // functions will be used to validate values at corresponding key
    validate: {
      provincia: (value) => validate(value),
      area: (value) => validate(value),
      jefatura: (value) => validate(value),
      tipoHogar: (value) => validate(value),
    },
  })

  return <form
    className={cn('flex flex-col gap-5 mt-5')}

    onSubmit={
      form.onSubmit((values: FormValues) => {
        const numberTipoHogar = Number(values.tipoHogar.slice(0, 2))
        const newTipoHogar = isNaN(numberTipoHogar) ? '16' : String(numberTipoHogar)

        setValues({
          ...values,
          tipoHogar: newTipoHogar
        })
      })
    }
  >
    <Select
      required
      data={Object.keys(hogaresPorProvincia)}
      label="Provincia"
      placeholder="Escoge la provincia del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('provincia')}
    />
    <Select
      required
      data={['Urbano', 'Rural']}
      label="Área"
      placeholder="Escoge el área del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('area')}
    />
    <Select
      required
      data={['Masculina', 'Femenina']}
      label="Jefatura del hogar"
      placeholder="Escoge la jefatura del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('jefatura')}
    />
    <Select
      required
      data={dataIntegrantes}
      label="Integrantes del hogar"
      placeholder="Escoge la cantidad de integrantes en el hogar..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('tipoHogar')}
    />
    <button className='py-2 mt-2 font-bold tracking-wider text-black transition-colors border rounded-lg text-normal hover:text-white border-amber-700 hover:bg-amber-500 active:scale-95'>Calcular</button>
  </form>
}
