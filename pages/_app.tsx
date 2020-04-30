import '../styles/global.scss';

import { AppType } from 'next/dist/next-server/lib/utils';
import Head from 'next/head';

const App: AppType = ({ Component, pageProps }) => (
    <>
        <Head>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;
