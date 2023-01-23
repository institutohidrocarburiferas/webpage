import dynamic from 'next/dynamic'
import {Suspense} from 'react'

// interface Props {
//   theta: string []
//   r: number[]
//   title: string
// }

export const BarPolarPlot /*: React.FC<Props> */ = ({
  theta,
  r,
  title,
  color
}) => {
  const Plot = dynamic(() => import('react-plotly.js'), {ssr: false})
  const data = [
    {
      theta,
      r,
      type: 'barpolar',
      marker: {
        color
      }
    }
  ]

  const layout = {
    title,
    polar: {
      radialaxis: {ticksuffix: '%', angle: 45},
    }
  }

  return (
      <Suspense fallback={<div>Loading ...</div>}>
        <Plot
          config={{responsive: true}}
          // Change variable to Barpolar plot
          data={data}
          layout={layout}
        />
      </Suspense>
  )
}
