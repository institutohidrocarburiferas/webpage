import Head from 'next/head'
import { Footer } from './Footer'
import { TitlePage } from './TitlePage'

export function Content ({ children, title, description, image, svgColor }) {
  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <TitlePage title={title} image={image} />
    {children}
    <Footer image={image} svgColor={svgColor} />
  </>
}
