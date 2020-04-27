import Link from 'next/link';
import Head from 'next/head';
import { NextPage } from 'next';
import { Board } from '../components/Board';

interface MainProps {
    appName: string;
}

const Main: NextPage<MainProps> = ({ appName }) => {
    return (
        <>
            <Head>
                <title>{appName}</title>
            </Head>
            <h1>Main page</h1>
            <Link href="/api/hello">
                <a>Test Deno API</a>
            </Link>
            <Board />
        </>
    );
};

Main.getInitialProps = async ctx => ({ appName: (await import('../package.json')).name });

export default Main;
