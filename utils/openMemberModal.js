import {Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import dynamic from 'next/dynamic'

export function openMemberModal (name, image, title, description) {
  const Modal = dynamic(() => import('@components/Modal'))
  const MemberInfo = dynamic(() => import('@components/MemberInfo'))

  const modalDiv = document.createElement('div')

  modalDiv.id = 'modal'
  document.body.appendChild(modalDiv)

  const root = createRoot(modalDiv)

  root.render(
    <Suspense fallback={<div>Loading ...</div>}>
      <Modal root={root}>
        <MemberInfo
          description={description}
          image={image}
          name={name}
          title={title}
        />
      </Modal>
    </Suspense>
  )
}
