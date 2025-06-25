import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
import Bootstrap from 'src/Bootstrap';
// import '../styles/theme/style.css'
// import '../styles/theme/owl.carousel.min.css'
import '../styles/theme/style.css'
import '../styles/theme/root.css'
import '../styles/theme/responsive.css'
import '../styles/theme/animate.min.css'
import '../styles/theme/owl.carousel.min.css'

// import 'assets/main.scss';
import LoadCustomScripts from 'components/LoadCustomScripts'

function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  return (
    <>
      <Bootstrap {...pageProps} />

      {/* <LoadCustomScripts scripts={[
        '/js/main.js',
        '/js/easing/easing.min.js',
        '/js/waypoints/waypoints.min.js',
        '/js/counterup/counterup.min.js',
        '/js/owlcarousel/owl.carousel.min.js'
      ]} /> */}
      <LoadCustomScripts scripts={[
        '/js/main.js',
        '/js/wow/wow.min.js',
        '/js/easing/easing.min.js',
        '/js/waypoints/waypoints.min.js',
        '/js/counterup/counterup.min.js',
        '/js/owlcarousel/owl.carousel.min.js',
      ]} />

      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
        </div>
      </div>
      {/*
        // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
        // Note Next.js does not (currently) provide anything for translation, only i18n routing.
        // If your app is not multilingual, next-localization and references to it can be removed.
      */}
      <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
        <Component {...rest} />
      </I18nProvider>
    </>
  );
}

export default App;
