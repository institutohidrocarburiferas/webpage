import type {FormValues} from './types'

import {createStyles, MultiSelect} from '@mantine/core'
import {useForm} from '@mantine/form'

interface Props {
  setValues: React.Dispatch<React.SetStateAction<FormValues>>
}

const useStyles = createStyles((theme) => ({
  track: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
  },
  mark: {
    width: 6,
    height: 6,
    borderRadius: 6,
    transform: 'translateX(-3px) translateY(-2px)',
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
  },
  markFilled: {
    borderColor: theme.colors.blue[6],
  },
  markLabel: {fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0},
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: theme.white,
    borderWidth: 1,
    boxShadow: theme.shadows.sm,
  },
}))

const validate = (value: string[]) => (value.length === 0 ? 'Escoja valores para calcular el consumo' : null)

export const FormData: React.FC<Props> = ({setValues}) => {
  const form = useForm<FormValues>({
    initialValues: {
      // ciudad: [],
      area: [],
      jefatura: [],
      salario: [],
      tipoHogar: [],
      infraestructura: []
    },
    // functions will be used to validate values at corresponding key
    validate: {
      // ciudad: (value) => validate(value),
      area: (value) => validate(value),
      jefatura: (value) => validate(value),
      salario: (value) => validate(value),
      tipoHogar: (value) => validate(value),
      // infraestructura: (value) => validate(value),

    },
  })
  const {classes} = useStyles()

  return <form
    className="flex flex-col gap-5 mt-5"

    onSubmit={
      form.onSubmit((values: FormValues) => (
        setValues(values)
      ))
    }
  >
    {/* <MultiSelect
      clearable
      required
      classNames={{
        label: 'text-red'
      }}
      clearButtonLabel="Clear selection"
      data={['Pastaza']}
      label="Ciudad"
      placeholder="Escoge la ciudad del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('ciudad')}
    // defaultValue={['react', 'next']}
    // onChange={handleChange}
    /> */}
    <MultiSelect
      clearable
      required
      clearButtonLabel="Clear selection"
      data={['Urbano', 'Rural']}
      label="??rea"
      placeholder="Escoge el ??rea del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('area')}
    // defaultValue={['react', 'next']}
    />
    <MultiSelect
      clearable
      required
      clearButtonLabel="Clear selection"
      data={['Masculina', 'Femenina']}
      label="Jefatura"
      placeholder="Escoge la jefatura del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('jefatura')}
    // defaultValue={['react', 'next']}
    />
    <MultiSelect
      clearable
      required
      clearButtonLabel="Clear selection"
      data={['Tipo 1', 'Tipo 2', 'Tipo 3', 'Tipo 4', 'Tipo 5', 'Tipo 6', 'Tipo 7', 'Tipo 8', 'Tipo 9', 'Tipo 10', 'Tipo 11', 'Tipo 12', 'Tipo 13', 'Tipo 14', 'Tipo 15', 'Tipo 16']}
      label="Tipo de hogar"
      placeholder="Escoge el tipo de hogar del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('tipoHogar')}
    // defaultValue={['react', 'next']}
    />
    <MultiSelect
      clearable
      required
      clearButtonLabel="Clear selection"
      data={['Menos de 400', '400 a 800', '800 a 1200', '1200 a 2400', 'M??s de 2400']}
      label="Rango salarial"
      placeholder="Escoge el rango salarial del consumo..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('salario')}
    // defaultValue={['react', 'next']}
    />
    <MultiSelect
      clearable
      clearButtonLabel="Clear selection"
      data={['Refrigerador', 'Licuadora', 'Microondas', 'Cocina de inducci??n', 'Lavadora de platos', 'Televisor a color', 'Tv LCD', 'PC Escritorio', 'Radio', 'Videojuegos', 'Aire Acondicionado', 'Ventilador', 'Ducha El??ctrica', 'Lavadora de ropa', 'Secadora de ropa', 'Focos', 'Laptop', 'Celular', 'Auto el??ctrico', 'Motos el??ctricas']}
      label="Escoge la infraestructura del consumo"
      placeholder="Escoge los electrodom??sticos del consumo ..."
      transition="pop-top-left"
      transitionDuration={150}
      transitionTimingFunction="ease"
      {...form.getInputProps('infraestructura')}
    // defaultValue={['react', 'next']}
    />
    <button className='py-2 mt-2 font-bold tracking-wider text-black transition-colors border rounded-lg text-normal hover:text-white border-amber-700 hover:bg-amber-500 active:scale-95'>Calcular</button>
  </form>
}
