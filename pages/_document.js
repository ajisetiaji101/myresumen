// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Aji Resume</title>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Fredoka+One" 
                        rel="stylesheet" 
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument