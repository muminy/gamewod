import Head from "next/head";
import { useRouter } from "next/router";
import { ISeoMeta } from "constants/types";
import initialseo from "constants/seo";

export default function Seo(props: ISeoMeta) {
  const router = useRouter();

  const meta = {
    ...initialseo,
    ...props,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://gamewod.com${router.asPath}`} />
      <link rel="canonical" href={`https://gamewod.com${router.asPath}`} />
      <meta property="og:type" content={meta.openGraph?.type} />
      <meta property="og:site_name" content="Gamewod" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content={meta.twitter?.cardType} />
      <meta name="twitter:site" content={meta.twitter?.site} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
}
