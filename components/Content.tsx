import Head from 'next/head'

import {Footer} from './Layout/Footer'
import {TitlePage} from './Layout/TitlePage'

interface Props{
  title: string
  description: string
  image: string
  svgColor?: string
  children?: React.ReactNode
}

export const Content: React.FC<Props> = ({children, title, description, image, svgColor}) => {
  return <>
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
    </Head>
    <TitlePage
      image={image}
      svgColor={svgColor}
      title={title}
    />
    {children}
    <Footer image={image} svgColor={svgColor} />
  </>
}
