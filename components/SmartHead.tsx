import React from 'react';
import Head from 'next/head';

export const SmartHead: React.FC<{
  title?: string;
  description?: string;
  type?: 'website' | 'article',
  uri?: string
}> = ({title, description, type, uri} = {
  title: 'Monbrand Software',
  description: 'Monbrand Softwareの公式ホームページです。',
  type: 'website',
  uri: '',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="baseurl" content="https://www.mbsoftware.tokyo"/>
      <meta charSet="utf-8"/>
      <meta property="og:url" content={'https://www.mbsoftware.tokyo' + uri}/>
      <meta property="og:title" content={title}/>
      <meta name="description" content={description}/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content={type}/>
      <meta property="og:image" content="https://www.mbsoftware.tokyo/site_icon_256.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@DN360"/>
      <meta property="og:site_name" content="Monbrand Software"/>
      <meta property="og:locale" content="ja_JP"/>
      <meta property="fb:app_id" content="2031350927176127"/>
      <link rel="icon" href="/site_icon_16.png" sizes="16x16" type="image/png"/>
      <link rel="icon" href="/site_icon_32.png" sizes="32x32" type="image/png"/>
      <link rel="icon" href="/site_icon_48.png" sizes="48x48" type="image/png"/>
      <link rel="icon" href="/site_icon_64.png" sizes="64x64" type="image/png"/>
    </Head>
  );
};
