import Head from 'next/head';
import siteConfig from '../../../config/site';

const DOMAIN = siteConfig.domain;
const DEFAULT_OG_IMAGE = siteConfig.ogImage;

export default function PageMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  siteName = siteConfig.siteName,
  canonical = siteConfig.domain,
  ogImage = siteConfig.ogImage,
  ogType = siteConfig.ogType,
}) {
  return (
    <Head>
      <title key="title">{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={`${title} | ${siteName}`} />
      <meta key="og_description" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_image" property="og:image" content={ogImage ?? DEFAULT_OG_IMAGE} />
      <meta key="og_image:alt" property="og:image:alt" content={`${title} | ${siteName}`} />
      <meta name="robots" content="index,follow" />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" property="twitter:title" content={`${title} | ${siteName}`} />
      <meta key="twitter:description" property="twitter:description" content={description} />
      <link rel="canonical" href={canonical ?? DOMAIN} />
      <link rel="icon" href="/favicon.png" type="image/x-icon" sizes="96x96" />
    </Head>
  );
}
