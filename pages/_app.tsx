import type {AppProps} from 'next/app'

import {appWithTranslation} from 'next-i18next'

import {Navbar} from '@components/Navbar'
import {TopArea} from '@components/Layout/TopArea'
import {Visitors} from '@components/Visitors'

import '../styles/globals.css'

function MyApp ({Component, pageProps}: AppProps) {
  return <>
      <TopArea />
      <Navbar />
      <Component { ...pageProps } />
      <Visitors />
  </>
}

export default appWithTranslation(MyApp)
