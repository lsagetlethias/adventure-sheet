import '../styles/global.scss';

import Head from 'next/head';
import { FC } from 'react';
import { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <>
        <Head>
            <link rel="icon" href="/favicon.png" />
            <meta charSet="utf-8" />
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;
