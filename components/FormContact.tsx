import {useTranslation} from 'next-i18next'
import {useRef} from 'react'

export const FormContact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const {t} = useTranslation(['FormContact'])

  function handleSubmit (e: React.FormEvent) {
    e.preventDefault()
    const {nombre, message} = Object.fromEntries(new FormData(form.current!))

    window.location.href = `mailto:iih@uce.edu.ec?subject=Envío%20desde%20la%20página%20web&body=Nombre%3A%20${nombre}%0AMensaje%3A%20${message}`
  }

  return (
    <form ref={form} className="flex flex-col mt-5 md:mt-10" method="POST" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-1 py-2">
        <span className="font-bold">{t('fullName')}</span>
        <input
          required
          className="px-5 py-2 border rounded-md border-black/30 dark:bg-gray-600"
          name="nombre"
          placeholder={t('fullNamePlaceholder')}
          type="text"
        />
      </label>
      <label className="flex flex-col gap-1 py-2">
        <span className="font-bold">{t('userMessage')}</span>
        <textarea
          required
          className="px-5 py-2 border rounded-md border-black/30 dark:bg-gray-600"
          name="message"
          placeholder={t('userMessagePlaceholder')}
          rows={7}
        />
      </label>
      <button
        className="self-end px-4 py-2 mt-2 text-lg font-bold text-white transition-colors rounded-lg bg-amber-700 hover:bg-amber-500 active:scale-95"
        type="submit"
      >
        {t('sendButton')}
      </button>
    </form>
  )
}
