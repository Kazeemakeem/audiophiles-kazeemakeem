import '../styles/globals.css'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../app/store'
import MediaQuery from 'components/mediaQuery'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Audiophile | e-commerce website</title>
        <meta name='description' content='Onestop site for audio accessories'/>
      </Head>
      <MediaQuery />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
