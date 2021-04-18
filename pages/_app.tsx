import React from 'react';
import App from 'next/app';
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
