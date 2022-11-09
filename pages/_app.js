import { Navbar } from '@components/Navbar'
import { Separator } from '@components/Separator'
import { Visitors } from '@components/Visitors'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return <>
    <Navbar />
    <Separator id="content" />
    <Component {...pageProps} />
    <Visitors />
  </>
}

export default MyApp
