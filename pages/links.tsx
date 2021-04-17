import React from 'react';
import classes from 'styles//links.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import {BackButton} from 'components/Buttons';

const LinksPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand software | Links</title>
      </Head>
      <BackButton />
      <p>
        まだ書いている途中です。ちょっとまっててね。
      </p>
    </div>
  );
};

export default LinksPage;
