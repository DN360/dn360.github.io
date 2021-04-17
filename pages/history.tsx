import React from 'react';
import classes from 'styles//history.module.scss';
import {NextPage} from 'next';
import Head from 'next/head';
import {BackButton} from 'components/Buttons';

const HistoryPage: NextPage<{}> = () => {
  return (
    <div className={classes.root}>
      <Head>
        <title>Monbrand software | History</title>
      </Head>
      <BackButton />
      <p>
        まだ書いている途中です。ちょっとまっててね。
      </p>
    </div>
  );
};

export default HistoryPage;
