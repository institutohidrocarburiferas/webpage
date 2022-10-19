import { Navbar } from '@components/Navbar'
import { Separator } from '@components/Separator'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return <>
    <Navbar />
    <Separator id="content" />
    <Component {...pageProps} />
  </>
}

export default MyApp
