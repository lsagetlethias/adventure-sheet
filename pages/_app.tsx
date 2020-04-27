import '../styles/global.scss';

import { AppType } from 'next/dist/next-server/lib/utils';

const App: AppType = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
