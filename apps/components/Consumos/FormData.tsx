import type {FormValues} from '@apps/components/Consumos/types'

import cn from 'classnames'
import {MultiSelect, Select} from '@mantine/core'
import {useForm} from '@mantine/form'

interface Props {
  setValues: React.Dispatch<React.SetStateAction<FormValues | null>>
}

// Function to validate in useForm/validate (line 27)
const validate = (value: string[] | string) => (value.length === 0 ? 'Escoja un valor para calcular el consumo' : null)

const dataInfraestructura = ['Refrigerador', 'Licuadora', 'Microondas', 'Cocina de inducción', 'Lavadora de platos', 'Televisor a color', 'Tv LCD', 'PC Escritorio', 'Radio', 'Videojuegos', 'Aire Acondicionado', 'Ventilador', 'Ducha Eléctrica', 'Lavadora de ropa', 'Secadora de ropa', 'Focos', 'Laptop', 'Celular', 'Auto eléctrico', 'Motos eléctricas']

const dataIntegrantes = Array(16).fill(0).map((el, i) => {
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
      salario: '',
      infraestructura: dataInfraestructura
    },
    // functions will be used to validate values at corresponding key
    validate: {
      provincia: (value) => validate(value),
      area: (value) => validate(value),
      jefatura: (value) => validate(value),
      salario: (value) => validate(value),
      tipoHogar: (value) => validate(value),
      // infraestructura: (value) => validate(value),
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
      data={['Pastaza']}
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
      placeholder="Escoge el tipo de hogar del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('tipoHogar')}
    />
    <Select
      required
      data={['Menos de 400', '400 a 800', '800 a 1200', '1200 a 2400', 'Más de 2400']}
      label="Ingresos por hogar"
      placeholder="Escoge el rango salarial del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('salario')}
    />
    <MultiSelect
      clearable
      clearButtonLabel="Clear selection"
      data={dataInfraestructura}
      label="Escoge la infraestructura del consumo"
      placeholder="Escoge los electrodomésticos del consumo ..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('infraestructura')}
    />
    <button className='py-2 mt-2 font-bold tracking-wider text-black transition-colors border rounded-lg text-normal hover:text-white border-amber-700 hover:bg-amber-500 active:scale-95'>Calcular</button>
  </form>
}
