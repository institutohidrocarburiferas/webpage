import { useRef } from 'react'

export function FormContact () {
  const form = useRef(null)

  function handleSubmit (e) {
    e.preventDefault()
    const { nombre, message } = Object.fromEntries(
      new FormData(form.current)
    )
    window.location.href = `mailto:iih@uce.edu.ec?subject=Envío%20desde%20la%20página%20web&body=Nombre%3A%20${nombre}%0AMensaje%3A%20${message}`
  }

  return <form ref={form} onSubmit={handleSubmit} method='POST' className='flex flex-col mt-5 md:mt-10'>
    <label className='flex flex-col gap-1 py-2'>
      <span className='font-bold'>Nombre completo</span>
      <input name="nombre" className='px-5 py-2 border rounded-md border-black/30 dark:bg-gray-600' type="text" placeholder='Ingrese su nombre completo' required />
    </label>
    {/* <label className='flex flex-col gap-1 py-2'>
      <span className='font-bold'>Correo</span>
      <input name="mail" className='px-5 py-2 border rounded-md border-black/30' type="mail" placeholder='nombre@correo.com' required />
    </label> */}
    <label className='flex flex-col gap-1 py-2'>
      <span className='font-bold'>Mensaje</span>
      <textarea name="message" className='px-5 py-2 border rounded-md border-black/30 dark:bg-gray-600' type="mail" placeholder='Ingrese su mensaje' rows={7} required />
    </label>
    <button type='submit' className='self-end px-4 py-2 mt-2 text-lg font-bold text-white transition-colors rounded-lg bg-amber-700 hover:bg-amber-500 active:scale-95'>Enviar</button>
  </form>
}
