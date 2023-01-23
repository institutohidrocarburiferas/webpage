import dynamic from 'next/dynamic'
import {Suspense} from 'react'

// interface Props {
//   values: number[]
//   labels: string[]
//   title: string
//   showlegend: boolean
// }

export const CircularPlot /*: React.FC<Props> */ = ({
  values,
  labels,
  title,
  showlegend = true
}) => {
  const Plot = dynamic(() => import('react-plotly.js'), {ssr: false})

  const data = [
    {
      values,
      labels,
      type: 'pie',
      textinfo: 'label+percent',
      insidetextorientation: 'radial'
      // marker: {
      //   color,
      // },
    },
  ]

  const layout = {
    title,
    showlegend,
  }

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Plot
        config={{responsive: true}}
        data={data}
        layout={layout}
      />
    </Suspense>
  )
}
