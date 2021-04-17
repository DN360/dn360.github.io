import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {AppContextType} from 'next/dist/next-server/lib/utils';
import {Router} from 'next/router';
import '../styles/global.scss';
import {Background} from 'components/Background';

class CustomApp extends App {
  static async getInitialProps({Component, ctx}: AppContextType<Router>) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps, router} = this.props;
    return (
      <div>
        <Head>
          <title>Monbrand software</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="baseurl" content="https://www.mbsoftware.tokyo"/>
          <meta charSet="utf-8"/>
          <meta name="description" content="MonBrand Softwareの公式サイトです"/>
          <meta property="og:url" content="https://dn360.github.io"/>
          <meta property="og:title" content="Monbrand Software | TOP"/>
          <meta property="og:type" content="website"/>
          <meta property="og:description" content="MonBrand Softwareの公式サイトです"/>
          <meta property="og:image" content="https://dn360.github.io/site_icon_256.png"/>
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
        <Background items={[
          {
            key: router.pathname,
            Component, pageProps,
          },
        ]}>
          <Component {...pageProps} />
        </Background>
      </div>
    );
  }
}

export default CustomApp;
