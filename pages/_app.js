import { Navbar } from '@components/Navbar'
import { Visitors } from '@components/Visitors'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return <>
    <Navbar />
    <div className='w-full h-24'></div>
    <Component {...pageProps} />
    <Visitors />
  </>
}

export default MyApp
