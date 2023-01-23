import dynamic from 'next/dynamic'
import {Suspense} from 'react'

// type Plot = 'bar' | 'barpolar'

// interface Props {
//   x: string []
//   y: number[]
//   title: string
//   plot: Plot
// }

export const BarPlot /*: React.FC<Props> */ = ({x, y, title, plot, color}) => {
  const Plot = dynamic(() => import('react-plotly.js'), {ssr: false})

  if (plot === 'barpolar') {
    return (
      <Suspense fallback={<div>Loading ...</div>}>
        <Plot
          config={{responsive: true}}
          // Change variable to Barpolar plot
          data={[
            {
              theta: x,
              r: y,
              type: plot,
              marker: {
                color
              }
            }
          ]}
          layout={{
            title,
            yaxis: {
              title: 'Consumo (KWH/mes)',
              titlefont: {
                size: 16,
                color: 'rgb(107, 107, 107)',
              },
              tickfont: {
                size: 12,
                color: 'rgb(107, 107, 107)',
              },
            },
          }}
        />
      </Suspense>
    )
  }

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Plot
        config={{responsive: true}}
        data={[
          {
            x,
            y,
            type: plot,
            marker: {
              color,
            },
          },
        ]}
        layout={{
          title,
          yaxis: {
            title: 'Consumo (KWH/mes)',
            titlefont: {
              size: 16,
              color: 'rgb(107, 107, 107)',
            },
            tickfont: {
              size: 12,
              color: 'rgb(107, 107, 107)',
            },
          },
        }}
      />
    </Suspense>
  )
}
