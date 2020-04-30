import Link from 'next/link';
import Head from 'next/head';
import { NextPage, GetStaticProps } from 'next';
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
            <Board />
        </>
    );
};

export const getStaticProps: GetStaticProps<MainProps> = async () => {
    return {
        props: { appName: 'YOLO' },
    };
};

export default Main;
