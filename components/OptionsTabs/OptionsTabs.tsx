import type {ItemComponent} from './types'

import {useState} from 'react'
import cn from 'classnames'

interface Props {
  components: ItemComponent[]
}

export function OptionsTabs ({components}: Props) {
  const [current, setCurrent] = useState<ItemComponent>(components[0])

  return <section className='max-w-6xl relative mx-auto'>
    <div className='border-b px-5'>
      {components.map(item => (
        <button
          key={item.title}
          className={cn('px-5 py-2',
            {'border border-b-0 bg-gray-100/50 font-semibold rounded-t-lg': current.title === item.title}
          )}
          onClick={() => setCurrent(item)}
        >
          {item.title}
        </button>
      ))}
    </div>
    {/* Components */}
    <div>
      {current.Component}
    </div>
  </section>
}
