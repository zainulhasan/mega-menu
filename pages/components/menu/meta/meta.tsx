import Head from 'next/head'

interface Props {
    desc: string;
    title: string;
    canonical: string;
}

const Meta = (props: Props) => (
    <Head>
        <title>Mega Menu Application</title>
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="" />
        <meta name="og:description" property="og:description" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content={props.desc} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="" />
    </Head>
)
export default Meta