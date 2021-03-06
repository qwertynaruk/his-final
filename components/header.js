import Head from 'next/head'

export default function Header() {
    return (
        <Head>
            <title>HIS Demo - Next.js</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-SSR4LG0W0R"></script>
            <script
                dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-SSR4LG0W0R');`
                }}
            />
        </Head>
    )
}
