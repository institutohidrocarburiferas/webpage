import {useRef} from 'react'

interface Props {
  children: React.ReactNode
  // TODO: Fix any type in root element from utils/openMemberModal
  root: any
}

const Modal: React.FC<Props> = ({children, root}) => {
  const ref = useRef<HTMLDivElement>(null)

  function callback (): void {
    ref.current?.removeEventListener('animationend', callback)
    root.unmount()
    document.querySelector('#modal')?.remove()
  }

  function handleClick (): void {
    ref.current?.classList.add('animate-fadeOut')
    ref.current?.addEventListener('animationend',
      callback,
      {once: true}
    )
  }

  return (
    <div ref={ref} className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen">
      <b
        className="absolute top-0 w-full h-full bg-black/30"
        onClick={handleClick}
      />
      <div className='container relative w-11/12 pt-10 overflow-scroll bg-white dark:bg-gray-900 animate-fadeIn h-5/6 rounded-xl '>
        <button
          className='fixed z-20 top-3 right-3 font-bold py-2.5 px-4 rounded-sm cursor-pointer text-xl text-gray-500 dark:text-gray-100 hover:text-red-500'
          onClick={handleClick}
        >X
        </button>
        <div className='w-full h-full'>
          {children}
        </div>
      </div>
    </div>)
}

export default Modal
