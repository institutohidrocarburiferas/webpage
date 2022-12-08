import dynamic from 'next/dynamic'
import {Suspense} from 'react'

// interface Props {
//   x: string []
//   y: number[]
// }

export const BarPlot/*: React.FC<Props> */ = ({x, y, title}) => {
  const Plot = dynamic(() => import('react-plotly.js'), {ssr: false,})

  return <Suspense fallback={<div>Loading ...</div>}>
    <Plot
      config = {{responsive: true}}
      data = {[{x, y, type: 'bar'}]}
      layout = {{
        title,
        yaxis: {
          title: 'Consumo (KWH/mes)',
          titlefont: {
            size: 16,
            color: 'rgb(107, 107, 107)'
          },
          tickfont: {
            size: 12,
            color: 'rgb(107, 107, 107)'
          }
        }
      }}

      />
  </Suspense>
}
