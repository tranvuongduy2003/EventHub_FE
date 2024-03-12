import '@/styles/globals.css';

//next
import Head from 'next/head';

//api
import httpRequest from '@/api-client/httpRequest';

//component
import { EmptyLayout } from '@/components/layout';
import { Toaster } from '@/components/ui';

//model
import { AppPropsWithLayout } from '@/models';

//swr
import { SWRConfig } from 'swr';

//font
import { Mulish } from 'next/font/google';
const mulish = Mulish({
  subsets: ['vietnamese', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  fallback: ['system-ui', 'arial'],
  variable: '--body-font'
});

export default function App({
  Component,
  pageProps: { pageProps }
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => httpRequest.get(url),
        shouldRetryOnError: false
      }}
    >
      <Layout>
        <main className={`${mulish.className} ${mulish.variable}`}>
          <Head>
            <title>Event Hub</title>
          </Head>
          <Component {...pageProps} />
          <Toaster />
        </main>
      </Layout>
    </SWRConfig>
  );
}
