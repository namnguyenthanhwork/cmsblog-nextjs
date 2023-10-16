import React from 'react';
import '@/styles/globals.scss';
import { Layout, PageMetadata } from '@/components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageMetadata />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
