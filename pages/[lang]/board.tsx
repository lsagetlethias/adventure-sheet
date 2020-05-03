import Head from 'next/head';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Board } from '../../components/Board';
import Locale, { Lang } from '../../lib/locale';
import { ParsedUrlQuery } from 'querystring';
import { LocaleProvider } from '../../lib/localeContext';

interface MainProps {
    appName: string;
    lang: Lang;
}

interface MainQuery extends ParsedUrlQuery {
    lang: Lang;
}

const Main: NextPage<MainProps> = ({ appName, lang }) => {
    return (
        <>
            <Head>
                <title>{appName}</title>
            </Head>
            <LocaleProvider value={Locale[lang]}>
                <Board darkMode />
            </LocaleProvider>
        </>
    );
};

export const getStaticProps: GetStaticProps<MainProps, MainQuery> = async ({ params }) => {
    return {
        props: { appName: (await import('../../package.json')).name, lang: params?.lang ?? 'en' },
    };
};

export const getStaticPaths: GetStaticPaths<MainQuery> = async () => {
    const langs = Object.keys(Locale) as Lang[];
    return {
        fallback: false,
        paths: langs.map(lang => ({ params: { lang } })),
    };
};

export default Main;
