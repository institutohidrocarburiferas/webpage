import { Navbar } from '@components/Navbar'
// import { TopArea } from '@components/TopArea'
import { Visitors } from '@components/Visitors'
import { appWithTranslation } from 'next-i18next'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp ({ Component, pageProps }: AppProps) {
  return <>
      {/* <TopArea /> */}
      <Navbar />
      <Component { ...pageProps } />
      <Visitors />
  </>
}

export default appWithTranslation(MyApp)
