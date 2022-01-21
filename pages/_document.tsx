import BaseDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends BaseDocument {
    render() {
        return (
            <Html lang={(this.props.__NEXT_DATA__.query.lang as string) ?? 'fr'}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
